// HTTP static server + WebSocket matchmaking. One Node process, one port.
import http from 'node:http';
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { WebSocketServer } from 'ws';
import { Room } from './room.js';
import { TICK_RATE, MATCH_WAIT_MS } from '../shared/constants.js';

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const PORT = +process.env.PORT || 8080;
const MIME = { '.html': 'text/html; charset=utf-8', '.js': 'text/javascript; charset=utf-8', '.css': 'text/css', '.png': 'image/png', '.json': 'application/json', '.webmanifest': 'application/manifest+json' };

const server = http.createServer((req, res) => {
  let url = decodeURIComponent((req.url || '/').split('?')[0]);
  if (url === '/healthz') { res.writeHead(200); return res.end('ok'); }
  if (url === '/') url = '/index.html';
  if (url.startsWith('/vendor/')) url = '/node_modules/three/build/' + url.slice(8);   // three.js for the 3D theme
  // the training yard runs in the browser, so the simulation modules are served too (never index.js)
  const simFile = url === '/server/room.js' || url === '/server/bot.js';
  const base = simFile || url.startsWith('/shared/') || url.startsWith('/node_modules/three/build/') ? ROOT : path.join(ROOT, 'public');
  const file = path.normalize(path.join(base, url));
  if (!file.startsWith(base)) { res.writeHead(403); return res.end(); }
  fs.readFile(file, (err, data) => {
    if (err) { res.writeHead(404); return res.end('not found'); }
    res.writeHead(200, { 'Content-Type': MIME[path.extname(file)] || 'application/octet-stream', 'Cache-Control': 'no-cache' });
    res.end(data);
  });
});

const wss = new WebSocketServer({ server, path: '/ws', maxPayload: 4096 });
const rooms = new Set();
let waiting = null; // { ws, name, since, timer, tick }

function sendTo(ws, msg) {
  if (ws && ws.readyState === 1) ws.send(typeof msg === 'string' ? msg : JSON.stringify(msg));
}

function startRoom(seats) {
  const room = new Room(seats.map(s => ({ name: s.name, isBot: !s.ws, aim: s.ws ? s.ws.wantsAim : true })), {
    tutorial: seats.some(s => s.ws && s.ws.wantsTutorial),
    send: (slot, msg) => sendTo(seats[slot].ws, msg),
    onEnd: r => {
      rooms.delete(r);
      seats.forEach(s => { if (s.ws) s.ws.room = null; });
      log(`room ${r.id} ended`);
    },
  });
  seats.forEach((s, slot) => { if (s.ws) { s.ws.room = room; s.ws.slot = slot; sendTo(s.ws, room.startMsg(slot)); } });
  rooms.add(room);
  log(`room ${room.id} started: ${seats.map(s => s.ws ? s.name : 'BOT').join(' + ')} (rooms=${rooms.size})`);
}

function clearWaiting() {
  if (!waiting) return;
  clearTimeout(waiting.timer); clearInterval(waiting.tick);
  waiting = null;
}

function join(ws, name) {
  if (ws.room) return;
  if (waiting && waiting.ws === ws) return;
  if (waiting && waiting.ws.readyState === 1) {
    const mate = waiting;
    clearWaiting();
    startRoom([{ ws: mate.ws, name: mate.name }, { ws, name }]);
    return;
  }
  clearWaiting();
  const w = { ws, name, since: Date.now() };
  w.tick = setInterval(() => sendTo(ws, { t: 'wait', left: Math.max(0, Math.ceil((MATCH_WAIT_MS - (Date.now() - w.since)) / 1000)) }), 500);
  w.timer = setTimeout(() => {
    if (waiting !== w) return;
    clearWaiting();
    if (ws.readyState === 1) startRoom([{ ws, name }, { ws: null, name: 'BOT' }]);
  }, MATCH_WAIT_MS);
  waiting = w;
  sendTo(ws, { t: 'wait', left: Math.ceil(MATCH_WAIT_MS / 1000) });
}

wss.on('connection', ws => {
  ws.room = null;
  ws.isAlive = true;
  ws.on('pong', () => (ws.isAlive = true));
  ws.on('message', raw => {
    let m;
    try { m = JSON.parse(raw); } catch { return; }
    if (!m || typeof m !== 'object') return;
    switch (m.t) {
      case 'join': ws.wantsTutorial = !!m.tut; ws.wantsAim = m.aim; join(ws, String(m.name || 'Player').replace(/[^\p{L}\p{N} _.-]/gu, '').slice(0, 12) || 'Player'); break;
      case 'cancel': if (waiting && waiting.ws === ws) clearWaiting(); break;
      case 'i': if (ws.room && !ws.room.ended) ws.room.pushInput(ws.slot, m.s | 0, m.x, m.y, m.f); break;
      case 'skip': if (ws.room && !ws.room.ended) ws.room.skipTutorial(); break;
      case 'life': if (ws.room && !ws.room.ended) ws.room.requestLife(ws.slot); break;
      case 'lifeAns': if (ws.room && !ws.room.ended) ws.room.answerLife(ws.slot, !!m.yes); break;
      case 'ping': sendTo(ws, { t: 'pong', c: m.c }); break;
    }
  });
  ws.on('close', () => {
    if (waiting && waiting.ws === ws) clearWaiting();
    const room = ws.room;
    if (room && !room.ended) {
      room.setBot(ws.slot);
      if (room.players.every(p => p.isBot)) { room.ended = true; rooms.delete(room); log(`room ${room.id} abandoned`); }
    }
  });
});

// heartbeat: drop dead sockets
setInterval(() => {
  for (const ws of wss.clients) {
    if (!ws.isAlive) { ws.terminate(); continue; }
    ws.isAlive = false; ws.ping();
  }
}, 15000);

// fixed-step game loop for all rooms
const STEP_MS = 1000 / TICK_RATE;
let acc = 0, last = performance.now();
setInterval(() => {
  const now = performance.now();
  acc += Math.min(250, now - last); last = now;
  while (acc >= STEP_MS) {
    acc -= STEP_MS;
    for (const r of rooms) { try { r.step(); } catch (e) { console.error('room error', e); rooms.delete(r); } }
  }
}, 5);

function log(...a) { console.log(new Date().toISOString(), ...a); }
server.listen(PORT, () => log(`Rescue Jeep listening on :${PORT}`));
