import { VIEW_W, VIEW_H, TICK_RATE, LEVEL_LEN, MAX_CARRY, MATCH_WAIT_MS, DIFF, STAGES, ITEM, RESCUE_PER_UPGRADE } from '../../shared/constants.js';
import { LEVEL, setStage } from '../../shared/level.js';
import { stepJeep, normInput } from '../../shared/physics.js';
import { T, B, footprint } from '../../shared/entities.js';
import * as RP from './render.js';
import * as RH from './render-hand.js';
import * as R3 from './render3d.js';
import { sfx, unlockAudio, setMuted, isMuted, setMusic } from './audio.js';

const $ = id => document.getElementById(id);
const canvas = $('game');
const ctx = canvas.getContext('2d');
const buf = document.createElement('canvas');
buf.width = VIEW_W; buf.height = VIEW_H;
const bctx = buf.getContext('2d');
RP.initRender(); RH.initRender();

// remote play needs a buffer to smooth network jitter; local (offline) play can render almost immediately
const INTERP_MS = window.RJ_LOCAL ? 40 : 110;
const STEP_MS = 1000 / TICK_RATE;
const store = { get(k) { try { return localStorage.getItem(k); } catch { return null; } }, set(k, v) { try { localStorage.setItem(k, v); } catch {} } };

// ---------------- graphics themes ----------------
// snes: 16-bit pixel art (render.js) drawn in a 360x240 buffer and scaled up
// nes: same pixel art squeezed through a small 8-bit palette
// pastel / doodle: hand-made styles (render-hand.js) drawn at device resolution
const SKINS = ['snes', 'nes', '3d', 'doodle'];
let skin = SKINS.includes(store.get('rj_skin')) ? store.get('rj_skin') : 'snes';
let R = RP, bufK = 1;
const hiRes = () => skin === '3d' || skin === 'doodle';
function setupBuffer() {
  bufK = hiRes() ? Math.max(1, Math.min(skin === '3d' ? 2.5 : 4, Math.round(L.s * L.dpr))) : 1;
  if (buf.width !== VIEW_W * bufK || buf.height !== VIEW_H * bufK) { buf.width = VIEW_W * bufK; buf.height = VIEW_H * bufK; }
  RH.setScale(bufK); R3.setScale(bufK);
}
function setSkin(sk) {
  if (sk === '3d' && !R3.init()) { toast('Máy không hỗ trợ WebGL — dùng theme SNES'); sk = 'snes'; }
  skin = sk; R = hiRes() ? RH : RP;
  if (hiRes()) RH.setStyle(sk === '3d' ? 'pastel' : sk);   // 3D reuses the hand renderer for particles, health bars and icons
  store.set('rj_skin', sk);
  RP.resetTerrain(); RH.resetTerrain(); setupBuffer();
  for (const b of document.querySelectorAll('[data-skin]')) b.setAttribute('aria-pressed', b.dataset.skin === sk ? 'true' : 'false');
}
// NES look: map every pixel to the nearest colour of a small 8-bit palette (via a 4096-entry lookup table)
const NES_PAL = ['#000000', '#fcfcfc', '#bcbcbc', '#7c7c7c', '#a40000', '#d82800', '#f83800', '#fca044', '#f8b800', '#ac7c00',
  '#503000', '#00a800', '#005800', '#00b800', '#b8f818', '#58d854', '#0058f8', '#3cbcfc', '#0078f8', '#6888fc', '#f878f8',
  '#fce0a8', '#a4e4fc', '#e45c10', '#881400', '#f0d0b0', '#d8f878'].map(h => [1, 3, 5].map(i => parseInt(h.slice(i, i + 2), 16)));
const NES_LUT = new Uint32Array(4096);
for (let i = 0; i < 4096; i++) {
  const r = ((i >> 8) & 15) * 17, g = ((i >> 4) & 15) * 17, b = (i & 15) * 17;
  let best = 0, bd = Infinity;
  NES_PAL.forEach((p, k) => { const d = (p[0] - r) ** 2 * 0.3 + (p[1] - g) ** 2 * 0.59 + (p[2] - b) ** 2 * 0.11; if (d < bd) { bd = d; best = k; } });
  const p = NES_PAL[best];
  NES_LUT[i] = (255 << 24) | (p[2] << 16) | (p[1] << 8) | p[0];
}
function nesFilter() {
  const img = bctx.getImageData(0, 0, buf.width, buf.height), px = new Uint32Array(img.data.buffer);
  for (let i = 0; i < px.length; i++) {
    const v = px[i];
    px[i] = NES_LUT[((v & 0xf0) << 4) | ((v >> 8) & 0xf0) | ((v >> 20) & 0x0f)];
  }
  bctx.putImageData(img, 0, 0);
}

// ---------------- layout ----------------
const L = { dpr: 1, W: 0, H: 0, s: 1, ox: 0, oy: 0, gw: 0, gh: 0, top: 0 };
function resize() {
  L.dpr = Math.min(window.devicePixelRatio || 1, 3);
  L.W = window.innerWidth; L.H = window.innerHeight;
  canvas.width = Math.round(L.W * L.dpr); canvas.height = Math.round(L.H * L.dpr);
  // landscape: the playfield fills the height and is centred; the sides are thumb zones
  L.s = Math.min(L.W / VIEW_W, L.H / VIEW_H);
  L.gw = VIEW_W * L.s; L.gh = VIEW_H * L.s;
  L.ox = (L.W - L.gw) / 2; L.oy = (L.H - L.gh) / 2;
  const portrait = L.H > L.W * 1.05;
  document.body.classList.toggle('portrait', portrait);
  window.RJ_PAUSED = portrait && state === 'play';
}
window.addEventListener('resize', () => { resize(); setupBuffer(); });
resize(); setupBuffer();
for (const b of document.querySelectorAll('[data-skin]')) b.onclick = () => setSkin(b.dataset.skin);
setSkin(skin);
try { screen.orientation && screen.orientation.addEventListener && screen.orientation.addEventListener('change', () => setTimeout(() => { resize(); setupBuffer(); }, 50)); } catch {}

// ---------------- input ----------------
// left half of the screen: floating joystick (drag to drive); right half: hold to fire
const joy = { id: null, ox: 0, oy: 0, x: 0, y: 0, active: false };
const fireTouch = { id: null, x: 0, y: 0 };
let fireLatch = false;   // a quick tap between two input ticks still fires once
const keys = new Set();
const JOY_R = 46;
function pointerDown(id, x, y) {
  if (x >= L.W / 2) { fireTouch.id = id; fireTouch.x = x; fireTouch.y = y; fireLatch = true; return; }
  if (joy.active) return;
  joy.active = true; joy.id = id; joy.ox = x; joy.oy = y; joy.x = x; joy.y = y;
}
function pointerMove(id, x, y) {
  if (!joy.active || joy.id !== id) return;
  joy.x = x; joy.y = y;
  const dx = x - joy.ox, dy = y - joy.oy, d = Math.hypot(dx, dy);
  if (d > JOY_R) { joy.ox = x - dx / d * JOY_R; joy.oy = y - dy / d * JOY_R; } // follow finger
}
function pointerUp(id) {
  if (joy.id === id) { joy.active = false; joy.id = null; }
  if (fireTouch.id === id) fireTouch.id = null;
}
canvas.addEventListener('touchstart', e => { e.preventDefault(); unlockAudio(); for (const t of e.changedTouches) pointerDown(t.identifier, t.clientX, t.clientY); }, { passive: false });
canvas.addEventListener('touchmove', e => { e.preventDefault(); for (const t of e.changedTouches) pointerMove(t.identifier, t.clientX, t.clientY); }, { passive: false });
canvas.addEventListener('touchend', e => { for (const t of e.changedTouches) pointerUp(t.identifier); });
canvas.addEventListener('touchcancel', e => { for (const t of e.changedTouches) pointerUp(t.identifier); });
canvas.addEventListener('mousedown', e => { unlockAudio(); pointerDown('m', e.clientX, e.clientY); });
window.addEventListener('mousemove', e => pointerMove('m', e.clientX, e.clientY));
window.addEventListener('mouseup', () => pointerUp('m'));
window.addEventListener('keydown', e => { keys.add(e.key.toLowerCase()); if (e.key === ' ' || e.key.toLowerCase() === 'j' || e.key.toLowerCase() === 'k') { fireLatch = true; e.preventDefault(); } });
window.addEventListener('keyup', e => keys.delete(e.key.toLowerCase()));
window.addEventListener('blur', () => { keys.clear(); joy.active = false; fireTouch.id = null; });

const isFiring = () => fireTouch.id !== null || keys.has(' ') || keys.has('j') || keys.has('k');
function readInput() {
  let dx = 0, dy = 0;
  if (keys.has('arrowleft') || keys.has('a')) dx -= 1;
  if (keys.has('arrowright') || keys.has('d')) dx += 1;
  if (keys.has('arrowup') || keys.has('w')) dy -= 1;
  if (keys.has('arrowdown') || keys.has('s')) dy += 1;
  if (dx || dy) { const m = Math.hypot(dx, dy); return [dx / m, dy / m]; }
  if (joy.active) {
    const vx = (joy.x - joy.ox) / JOY_R, vy = (joy.y - joy.oy) / JOY_R;
    const m = Math.hypot(vx, vy);
    if (m < 0.15) return [0, 0];
    const k = Math.min(1, (m - 0.15) / 0.55) / m; // reach full speed quickly
    return [vx * k, vy * k];
  }
  return [0, 0];
}

// ---------------- UI ----------------
let toastT = 0;
function toast(msg, ms = 2200) { const t = $('toast'); t.textContent = msg; t.classList.add('on'); clearTimeout(toastT); toastT = setTimeout(() => t.classList.remove('on'), ms); }
function show(id) { for (const s of ['menu', 'wait', 'end']) $(s).classList.toggle('on', s === id); }
$('name').value = store.get('rj_name') || '';
$('play').onclick = () => { unlockAudio(); startMatchmaking(); };
$('name').addEventListener('keydown', e => { if (e.key === 'Enter') $('play').click(); });
$('cancel').onclick = () => { send({ t: 'cancel' }); closeWs(); state = 'menu'; show('menu'); };
$('again').onclick = () => startMatchmaking();
$('toMenu').onclick = () => { closeWs(); state = 'menu'; show('menu'); };
$('skip').onclick = e => { e.stopPropagation(); send({ t: 'skip' }); };
$('askLife').onclick = e => { e.stopPropagation(); send({ t: 'life' }); };
$('lifeYes').onclick = e => { e.stopPropagation(); send({ t: 'lifeAns', yes: 1 }); $('lifePrompt').hidden = true; };
$('lifeNo').onclick = e => { e.stopPropagation(); send({ t: 'lifeAns', yes: 0 }); $('lifePrompt').hidden = true; };
if ($('tut')) $('tut').checked = store.get('rj_tut_done') !== '1';
const muteBtn = $('mute');
setMuted(store.get('rj_mute') === '1');
const paintMute = () => { muteBtn.textContent = isMuted() ? '×' : '♪'; muteBtn.style.opacity = isMuted() ? 0.5 : 1; };
paintMute();
muteBtn.onclick = e => { e.stopPropagation(); setMuted(!isMuted()); store.set('rj_mute', isMuted() ? '1' : '0'); paintMute(); };

// ---------------- network ----------------
let ws = null, state = 'menu';
let you = 0, roster = [], snaps = [], latest = null, timeOffset = null;
let seq = 0, pending = [], pred = null, predErr = { x: 0, y: 0 }, wasAlive = true;
let evq = [], padAnim = {}, shake = 0, lastMgSfx = 0, seenBullets = new Set(), banner = null, curStage = -1, flashT = 0;
const ITEM_NAME = { [ITEM.rapid]: 'BẮN NHANH', [ITEM.shield]: 'KHIÊN', [ITEM.life]: '+1 MẠNG', [ITEM.bomb]: 'BOM!', [ITEM.wup]: 'VŨ KHÍ +' };
function switchStage(i) { setStage(i); R.resetTerrain(); curStage = i; }

function wsUrl() {
  const q = new URLSearchParams(location.search).get('server');
  if (q) return q;
  return (location.protocol === 'https:' ? 'wss://' : 'ws://') + location.host + '/ws';
}
function send(m) { if (ws && ws.readyState === 1) ws.send(JSON.stringify(m)); }
function closeWs() { if (ws) { ws.onclose = null; try { ws.close(); } catch {} ws = null; } }

function startMatchmaking() {
  const name = ($('name').value || '').trim() || 'Player';
  store.set('rj_name', name);
  $('err').textContent = '';
  closeWs();
  state = 'connecting';
  show('wait'); setCount(Math.ceil(MATCH_WAIT_MS / 1000));
  ws = window.RJ_LOCAL ? window.RJ_LOCAL() : new WebSocket(wsUrl());
  const tut = $('tut') ? $('tut').checked : false;
  ws.onopen = () => send({ t: 'join', name, tut });
  ws.onmessage = ev => onMsg(JSON.parse(ev.data));
  ws.onerror = () => {};
  ws.onclose = () => {
    ws = null;
    if (state === 'play' || state === 'connecting' || state === 'wait') {
      state = 'menu'; show('menu'); $('err').textContent = 'Mất kết nối tới server. Thử lại nhé.';
    }
  };
}
function setCount(n) {
  $('count').textContent = n;
  $('countbar').style.width = (n / (MATCH_WAIT_MS / 1000) * 100) + '%';
}

function onMsg(m) {
  switch (m.t) {
    case 'wait': state = 'wait'; setCount(m.left); break;
    case 's': onSnap(m); break;
    case 'start': {
      you = m.you; roster = m.players; snaps = []; latest = null; timeOffset = null;
      seq = 0; pending = []; pred = null; predErr = { x: 0, y: 0 }; evq = []; padAnim = {}; seenBullets = new Set();
      R.clearParticles();
      state = 'play'; show(null);
      const mate = roster[1 - you];
      banner = null; switchStage(m.stage || 0);
      if (m.stage) toast(mate.bot ? 'Đồng đội: BOT' : `Đồng đội: ${mate.name}`);   // the bot only joins after the training yard
      sfx('start');
      break;
    }
    case 'end': onEnd(m); break;
  }
}

function blockersFrom(s) {
  const out = LEVEL.blockers.slice();
  for (const e of s.e) { const f = footprint(e[1], e[2], e[3]); if (f) out.push(f); }
  return out;
}

function onSnap(s) {
  const now = performance.now();
  s.st = s.k / TICK_RATE * 1000;
  const off = now - s.st;
  if (timeOffset === null || off < timeOffset) timeOffset = off; else timeOffset += (off - timeOffset) * 0.02;
  snaps.push(s); if (snaps.length > 40) snaps.shift();
  latest = s;
  if (s.sg !== curStage) { switchStage(s.sg); pred = null; pending = []; }
  for (const e of s.ev) evq.push({ st: s.st, e });
  // reconcile own jeep
  const me = s.p[you];
  if (!me[3]) { pred = { x: me[0], y: me[1], a: me[2] }; pending = []; wasAlive = false; return; }
  if (!pred || !wasAlive) { pred = { x: me[0], y: me[1], a: me[2] }; pending = []; predErr = { x: 0, y: 0 }; wasAlive = true; return; }
  pending = pending.filter(i => i.seq > s.ack[you]);
  const p = { x: me[0], y: me[1], a: pred.a };
  const blk = blockersFrom(s);
  for (const i of pending) stepJeep(p, i.dx, i.dy, s.cam, blk);
  const ex = pred.x - p.x, ey = pred.y - p.y;
  if (Math.hypot(ex, ey) > 28) predErr = { x: 0, y: 0 }; else { predErr.x += ex; predErr.y += ey; }
  pred = p;
  // mg sound when new mg bullets appear near me
  for (const b of s.b) {
    if (seenBullets.has(b[0])) continue;
    seenBullets.add(b[0]);
    if ((b[1] === B.mg || b[1] === B.big || b[1] === B.missile || b[1] === B.laser) && Math.hypot(b[2] - me[0], b[3] - me[1]) < 24 && now - lastMgSfx > 140) {
      sfx(b[1] === B.missile ? 'launch' : b[1] === B.laser ? 'laser' : 'mg'); lastMgSfx = now;
    }
  }
  if (seenBullets.size > 3000) seenBullets = new Set(s.b.map(b => b[0]));
}

function inputStep() {
  const [dx, dy] = normInput(...readInput());
  seq++;
  send({ t: 'i', s: seq, x: dx, y: dy, f: isFiring() || fireLatch ? 1 : 0 });
  fireLatch = false;
  if (pred && latest && latest.p[you][3] && !latest.ph) {
    pending.push({ seq, dx, dy });
    if (pending.length > 90) pending.shift();
    stepJeep(pred, dx, dy, latest.cam, blockersFrom(latest));
  }
}

function onEnd(m) {
  state = 'end';
  closeWs();
  const t = $('endTitle');
  t.innerHTML = m.win ? 'MISSION<br>COMPLETE' : 'GAME<br>OVER';
  t.className = 'title ' + (m.win ? 'win' : 'lose');
  const tm = `${Math.floor(m.time / 60)}:${String(m.time % 60).padStart(2, '0')}`;
  $('endSub').textContent = m.win ? `Hoàn thành ${m.stages} màn · ${tm}` : `Màn ${m.stage}/${m.stages} · Tiến độ ${m.progress}% · ${tm}`;
  $('endRows').innerHTML = m.players.map((p, i) =>
    `<tr><td style="color:var(--p${i + 1})">${esc(p.name)}${p.bot && !/bot/i.test(p.name) ? ' (bot)' : ''}${i === you ? ' ★' : ''}</td><td>${p.rescued}</td><td>${p.kills}</td><td>${p.score}</td></tr>`).join('');
  sfx(m.win ? 'win' : 'lose');
  setTimeout(() => show('end'), 600);
}
const esc = s => String(s).replace(/[&<>"]/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[c]));

// ---------------- events ----------------
function runEvent(e) {
  const k = e[0];
  if (k === 'x') { R.spawnExplosion(e[1], e[2], e[3]); sfx(e[3] >= 1 ? 'boom' : 'pop'); if (e[3] >= 1) shake = Math.max(shake, e[3] * 3); }
  else if (k === 'h') R.spawnSpark(e[1], e[2]);
  else if (k === 's') { R.spawnSplat(e[1], e[2]); sfx('squish'); }
  else if (k === 'd') {
    padAnim[e[1]] = 2.4;
    const h = LEVEL.helipads[e[1]];
    R.spawnText(h.x, h.y - 26, `+${e[2] * 100}`, e[3] === 0 ? '#e6f07a' : '#8fc4ff');
    sfx('deliver');
    if (e[3] === you) toast(`Đã cứu ${e[2]} tù binh!`);
  } else if (k === 'p') { if (e[1] === you) sfx('pickup'); }
  else if (k === 'u') {
    const p = latest && latest.p[e[1]];
    if (p) R.spawnText(p[0], p[1] - 16, `WEAPON ${e[2]}`, '#ffe14a');
    if (e[1] === you) sfx('upgrade');
  } else if (k === 'k') {
    if (e[1] === you) { sfx('die'); shake = 6; try { navigator.vibrate && navigator.vibrate(120); } catch {} }
  } else if (k === 'g') {
    banner = e[1] === 0 ? { text: 'TẬP LÁI', sub: 'Màn hướng dẫn', t: performance.now() }
      : { text: `STAGE ${e[1]}`, sub: DIFF[e[1]].name + (e[1] > 1 ? ' · +1 mạng' : ''), t: performance.now() };
    if (e[1] === 1 && curStage === 1 && $('tut') && $('tut').checked) { store.set('rj_tut_done', '1'); $('tut').checked = false; }
    sfx('start');
  } else if (k === 'c') {
    banner = { text: 'CLEAR!', sub: `Thưởng +${e[2]} điểm`, t: performance.now(), dur: 3.8 };
    sfx('win');
  } else if (k === 'i') {
    const p = latest && latest.p[e[1]];
    if (p) R.spawnText(p[0], p[1] - 18, ITEM_NAME[e[2]] || '', '#f8e060');
    if (e[1] === you) sfx(e[2] === ITEM.bomb ? 'boom' : 'upgrade');
  } else if (k === 'L') {
    if (e[1] !== you) sfx('pickup');
  } else if (k === 'A') {
    const mine = e[1] === you, name = roster[mine ? e[2] : e[1]]?.name || 'Đồng đội';
    if (e[3] === 1) { toast(mine ? `${name} đã cho bạn 1 mạng!` : `Bạn đã cho ${name} 1 mạng`); sfx('upgrade'); }
    else if (e[3] === 2) { if (mine) toast('Đồng đội không còn mạng dư để cho'); }
    else toast(mine ? `${name} không cho mạng` : 'Đã từ chối');
  } else if (k === 'T') {
    sfx('pickup');
  } else if (k === 'B') {
    flashT = 0.35; shake = 8;
  } else if (k === 'b') { roster[e[1]] && (roster[e[1]].bot = true); if (e[1] !== you) toast('Đồng đội rời trận — BOT lái thay', 3000); }
}

// ---------------- interpolation ----------------
function lerpAng(a, b, t) { let d = ((b - a + Math.PI * 3) % (Math.PI * 2)) - Math.PI; return a + d * t; }
function interpList(la, lb, t, xi, yi, ai) {
  if (!la) return lb;
  const m = new Map(la.map(r => [r[0], r]));
  return lb.map(rb => {
    const ra = m.get(rb[0]);
    if (!ra) return rb;
    const o = rb.slice();
    o[xi] = ra[xi] + (rb[xi] - ra[xi]) * t; o[yi] = ra[yi] + (rb[yi] - ra[yi]) * t;
    if (ai !== undefined) o[ai] = lerpAng(ra[ai], rb[ai], t);
    return o;
  });
}
function sample(now) {
  const rt = now - timeOffset - INTERP_MS;
  let a = snaps[0], b = snaps[snaps.length - 1];
  for (let i = snaps.length - 1; i > 0; i--) { if (snaps[i - 1].st <= rt) { a = snaps[i - 1]; b = snaps[i]; break; } }
  const t = b.st === a.st ? 1 : Math.max(0, Math.min(1, (rt - a.st) / (b.st - a.st)));
  const players = b.p.map((pb, i) => {
    const pa = a.p[i], o = pb.slice();
    if (pa[3] && pb[3]) { o[0] = pa[0] + (pb[0] - pa[0]) * t; o[1] = pa[1] + (pb[1] - pa[1]) * t; o[2] = lerpAng(pa[2], pb[2], t); }
    return o;
  });
  return {
    rt, cam: a.cam + (b.cam - a.cam) * t, players,
    e: interpList(a.e, b.e, t, 2, 3, 4),
    b: interpList(a.b, b.b, t, 2, 3),
    w: interpList(a.w, b.w, t, 1, 2),
    i: b.i || [],
  };
}

// ---------------- drawing ----------------
let menuCam = LEVEL_LEN - VIEW_H;
function drawWorld(now, dt) {
  bctx.setTransform(bufK, 0, 0, bufK, 0, 0); bctx.imageSmoothingEnabled = hiRes();
  bctx.fillStyle = '#14160f'; bctx.fillRect(0, 0, VIEW_W, VIEW_H);
  if (state !== 'play' || !latest || timeOffset === null) {
    menuCam -= dt * 14; if (menuCam < 600) menuCam = LEVEL_LEN - VIEW_H;
    if (skin === '3d') { const cv = R3.render({ cam: menuCam, now }); if (cv) bctx.drawImage(cv, 0, 0, VIEW_W, VIEW_H); }
    else { R.drawTerrain(bctx, menuCam); R.drawHelis(bctx, menuCam, now, {}); }
    R.drawParticles(bctx, menuCam, dt);
    return null;
  }
  const S = sample(now);
  while (evq.length && evq[0].st <= S.rt) runEvent(evq.shift().e);
  for (const k in padAnim) padAnim[k] = Math.max(0, padAnim[k] - dt);
  const cam = S.cam;
  if (skin === '3d') {
    const players = S.players.map((p, i) => {
      const o = p.slice(); o.slot = i; o.x = p[0]; o.y = p[1]; o.a = p[2];
      if (i === you && pred) { o.x = pred.x + predErr.x; o.y = pred.y + predErr.y; o.a = pred.a; }
      return o;
    });
    predErr.x *= 0.82; predErr.y *= 0.82;
    const cv = R3.render({ cam, now, padAnim, S: { e: S.e, b: S.b, w: S.w, i: S.i, players } });
    if (cv) bctx.drawImage(cv, 0, 0, VIEW_W, VIEW_H);
    for (const e of S.e) R.drawHpBar(bctx, e, cam);
    R3.drawOverlay(bctx, { players }, cam, you);
    R.drawParticles(bctx, cam, dt);
    if (flashT > 0) { bctx.fillStyle = `rgba(255,255,255,${Math.min(1, flashT * 2.5)})`; bctx.fillRect(0, 0, VIEW_W, VIEW_H); flashT -= dt; }
    return S;
  }
  R.drawTerrain(bctx, cam);
  // ground structures first
  for (const e of S.e) if (e[1] === T.prison || e[1] === T.boss) R.drawEnemy(bctx, e, cam, now);
  R.drawHelis(bctx, cam, now, padAnim);
  for (const w of S.w) R.drawPow(bctx, w, cam, now);
  for (const it of S.i) R.drawItem(bctx, it, cam, now);
  for (const e of S.e) if (e[1] !== T.prison && e[1] !== T.boss) R.drawEnemy(bctx, e, cam, now);
  for (const e of S.e) R.drawHpBar(bctx, e, cam);
  S.players.forEach((p, i) => {
    if (!p[3]) return;
    let x = p[0], y = p[1], a = p[2];
    if (i === you && pred) { x = pred.x + predErr.x; y = pred.y + predErr.y; a = pred.a; }
    R.drawJeep(bctx, i, x, y, a, cam, { invuln: p[4], carry: p[7], self: i === you, shield: p[11] });
  });
  predErr.x *= 0.82; predErr.y *= 0.82;
  for (const b of S.b) R.drawBullet(bctx, b, cam);
  R.drawParticles(bctx, cam, dt);
  if (flashT > 0) { bctx.fillStyle = `rgba(255,255,255,${Math.min(1, flashT * 2.5)})`; bctx.fillRect(0, 0, VIEW_W, VIEW_H); flashT -= dt; }
  return S;
}

const PX = "'Press Start 2P', monospace";
function drawHud(S, now) {
  const d = L.dpr, c = ctx;
  const x0 = L.ox * d, y0 = L.oy * d, gw = L.gw * d, gh = L.gh * d;
  const u = Math.max(1, L.s * d); // one game pixel in device px
  c.save();
  // top bar
  c.fillStyle = 'rgba(10,12,8,0.62)'; c.fillRect(x0, y0, gw, 22 * u);
  const latestP = latest.p;
  latestP.forEach((p, i) => {
    const left = i === 0;
    const px = left ? x0 + 5 * u : x0 + gw - 5 * u;
    c.textAlign = left ? 'left' : 'right';
    c.font = `${Math.round(5 * u)}px ${PX}`;
    c.fillStyle = i === 0 ? '#c9d65a' : '#6fb0ff';
    const nm = (roster[i]?.name || `P${i + 1}`).slice(0, 10) + (roster[i]?.bot && !/bot/i.test(roster[i].name) ? '·BOT' : '') + (i === you ? ' ★' : '');
    c.fillText(nm, px, y0 + 8 * u);
    c.fillStyle = '#f2efd8';
    c.fillText(String(p[8]).padStart(6, '0'), px, y0 + 16 * u);
    // lives + weapon
    const lx = left ? px + 44 * u : px - 44 * u;
    for (let k = 0; k < 3; k++) {
      c.fillStyle = k < p[5] ? (i === 0 ? '#c9d65a' : '#6fb0ff') : 'rgba(255,255,255,0.15)';
      c.fillRect(lx + (left ? k : -k - 1) * 5 * u, y0 + 11 * u, 4 * u, 5 * u);
    }
    c.fillStyle = '#ffd84a'; c.textAlign = left ? 'left' : 'right';
    c.font = `${Math.round(4 * u)}px ${PX}`;
    c.fillText('W' + p[6], left ? lx + 17 * u : lx - 17 * u, y0 + 16 * u);
    if (!p[3] && p[5] <= 0) { c.fillStyle = '#ff5a4a'; c.fillText('OUT', left ? lx + 30 * u : lx - 30 * u, y0 + 16 * u); }
  });
  // progress
  const prog = 1 - S.cam / (LEVEL_LEN - VIEW_H);
  c.fillStyle = 'rgba(255,255,255,0.15)'; c.fillRect(x0 + gw / 2 - 18 * u, y0 + 9 * u, 36 * u, 3 * u);
  c.fillStyle = '#ffd84a'; c.fillRect(x0 + gw / 2 - 18 * u, y0 + 9 * u, 36 * u * prog, 3 * u);
  c.font = `${Math.round(4 * u)}px ${PX}`; c.textAlign = 'center'; c.fillStyle = '#a7a58c';
  c.fillText(latest.sg === 0 ? 'TẬP LÁI' : `S${latest.sg} ` + (S.cam < 30 ? 'BOSS' : `${Math.round(prog * 100)}%`), x0 + gw / 2, y0 + 19 * u);
  // boss health bar under the top bar
  const boss = S.e.find(e => e[1] === T.boss || e[1] === T.boss2);
  if (boss) {
    const bw = gw - 40 * u, bx = x0 + 20 * u, by = y0 + 24 * u;
    c.fillStyle = '#1c140c'; c.fillRect(bx - u, by - u, bw + 2 * u, 6 * u);
    c.fillStyle = '#3c3830'; c.fillRect(bx, by, bw, 4 * u);
    c.fillStyle = boss[7] ? '#78c0ff' : '#f84838'; c.fillRect(bx, by, bw * boss[5], 4 * u);
    c.fillStyle = 'rgba(255,255,255,0.35)'; c.fillRect(bx, by, bw * boss[5], u);
    c.font = `800 ${Math.round(5 * u)}px 'Be Vietnam Pro', sans-serif`; c.textAlign = 'center'; c.fillStyle = '#f2efd8';
    c.fillText(boss[7] ? 'PHÁ THÁP PHÁO ĐỂ TẮT KHIÊN' : 'BOSS', x0 + gw / 2, by + 10 * u);
  }
  // my active power-ups (spread / shield) with seconds left
  const mine = latestP[you];
  let px0 = x0 + 4 * u;
  for (const [idx, type] of [[10, ITEM.rapid], [11, ITEM.shield]]) {
    if (!mine[idx]) continue;
    const ic = R.itemIcon(type);
    c.drawImage(ic, px0, y0 + (boss ? 38 : 24) * u, 11 * u, 11 * u);
    c.font = `${Math.round(4 * u)}px ${PX}`; c.textAlign = 'left'; c.fillStyle = '#000';
    const lbl = idx === 10 ? `x${mine[idx]}` : mine[idx];
    c.fillText(lbl, px0 + 11 * u + u * 0.5, y0 + (boss ? 46 : 32) * u + u * 0.5);
    c.fillStyle = '#f2efd8'; c.fillText(lbl, px0 + 11 * u, y0 + (boss ? 46 : 32) * u);
    px0 += 24 * u;
  }
  c.textAlign = 'center';
  // rescue progress toward the next gun level (5 rescued = +1 level)
  {
    const prog = latestP[you][12] || 0, bx = x0 + gw - 4 * u, by = y0 + (boss ? 38 : 24) * u;
    c.textAlign = 'right'; c.font = `800 ${Math.round(5 * u)}px 'Be Vietnam Pro', sans-serif`;
    c.fillStyle = '#1c140c'; c.fillText(`Cứu ${prog}/${RESCUE_PER_UPGRADE} → đạn+`, bx + u * 0.6, by + 5 * u + u * 0.6);
    c.fillStyle = '#f8e060'; c.fillText(`Cứu ${prog}/${RESCUE_PER_UPGRADE} → đạn+`, bx, by + 5 * u);
    for (let k = 0; k < RESCUE_PER_UPGRADE; k++) {
      c.fillStyle = '#1c140c'; c.fillRect(bx - (RESCUE_PER_UPGRADE - k) * 5 * u, by + 7 * u, 4 * u, 3 * u);
      c.fillStyle = k < prog ? '#f8e060' : 'rgba(255,255,255,0.25)';
      c.fillRect(bx - (RESCUE_PER_UPGRADE - k) * 5 * u + u * 0.5, by + 7.5 * u, 3 * u, 2 * u);
    }
    c.textAlign = 'center';
  }
  // my carry
  const me = latestP[you];
  if (me[7] > 0) {
    c.fillStyle = 'rgba(10,12,8,0.62)'; c.fillRect(x0 + gw / 2 - 30 * u, y0 + gh - 14 * u, 60 * u, 11 * u);
    c.fillStyle = me[7] >= MAX_CARRY ? '#ff9a2a' : '#f2efd8'; c.font = `${Math.round(4.5 * u)}px ${PX}`;
    c.fillText(`POW ${me[7]}/${MAX_CARRY}`, x0 + gw / 2, y0 + gh - 6.5 * u);
  }
  // respawn notice
  if (!me[3]) {
    c.fillStyle = 'rgba(0,0,0,0.5)'; c.fillRect(x0, y0 + gh / 2 - 14 * u, gw, 24 * u);
    c.fillStyle = me[5] > 0 ? '#f2efd8' : '#ff5a4a'; c.font = me[5] > 0 ? `${Math.round(6 * u)}px ${PX}` : `800 ${Math.round(8 * u)}px 'Be Vietnam Pro', sans-serif`;
    c.fillText(me[5] > 0 ? 'RESPAWN…' : 'HẾT MẠNG', x0 + gw / 2, y0 + gh / 2 + 2 * u);
  }
  // banner
  if (banner) {
    const age = (now - banner.t) / 1000;
    const dur = banner.dur || 2.2;
    if (age > dur) banner = null;
    else {
      c.globalAlpha = Math.min(1, (dur - age) * 2);
      c.font = `${Math.round(14 * u)}px ${PX}`; c.fillStyle = '#7a3a10'; c.fillText(banner.text, x0 + gw / 2 + 2 * u, y0 + gh * 0.42 + 2 * u);
      c.fillStyle = '#ffd84a'; c.fillText(banner.text, x0 + gw / 2, y0 + gh * 0.42);
      c.font = `700 ${Math.round(6 * u)}px 'Be Vietnam Pro', sans-serif`; c.fillStyle = '#f2efd8';
      c.fillText(banner.sub, x0 + gw / 2, y0 + gh * 0.42 + 14 * u);
      c.globalAlpha = 1;
    }
  }
  c.restore();
}

// left: drive joystick (floating), right: fire button
function drawControls(now) {
  const d = L.dpr, c = ctx;
  const side = Math.max(60, Math.min(90, L.ox * 0.5 + 30));
  c.save();
  // joystick
  let bx = side, by = L.H - side - 6, kx = bx, ky = by, alpha = 0.3;
  if (joy.active) { bx = joy.ox; by = joy.oy; kx = joy.x; ky = joy.y; alpha = 0.85; }
  const dx = kx - bx, dy = ky - by, m = Math.hypot(dx, dy);
  if (m > JOY_R) { kx = bx + dx / m * JOY_R; ky = by + dy / m * JOY_R; }
  c.globalAlpha = alpha;
  c.strokeStyle = '#f2efd8'; c.lineWidth = 2 * d;
  c.beginPath(); c.arc(bx * d, by * d, JOY_R * d, 0, 7); c.stroke();
  c.fillStyle = 'rgba(255,216,74,0.85)'; c.beginPath(); c.arc(kx * d, ky * d, 18 * d, 0, 7); c.fill();
  // fire button
  const fx = L.W - side, fy = L.H - side - 6, on = isFiring();
  c.globalAlpha = on ? 0.95 : 0.45;
  c.fillStyle = on ? 'rgba(255,90,60,0.9)' : 'rgba(255,90,60,0.35)';
  c.beginPath(); c.arc(fx * d, fy * d, 38 * d, 0, 7); c.fill();
  c.strokeStyle = '#ffe0d0'; c.lineWidth = 2.5 * d; c.stroke();
  c.fillStyle = '#ffffff'; c.font = `800 ${15 * d}px 'Be Vietnam Pro', sans-serif`; c.textAlign = 'center'; c.textBaseline = 'middle';
  c.fillText('BẮN', fx * d, fy * d);
  c.restore();
}

// step-by-step coaching for the training yard: [lesson, sub-step, markerX, markerY]
function tutLines(step, sub) {
  if (step === 0) return ['BÀI 1/3 · LÁI XE', 'Kéo ngón tay ở NỬA TRÁI màn hình để lái', `Chạy tới vòng sáng (${sub + 1}/3)`];
  if (step === 1) return ['BÀI 2/3 · BẮN', 'Đạn bay THẲNG THEO HƯỚNG ĐẦU XE', `Quay đầu xe về mục tiêu, rồi giữ NỬA PHẢI để bắn (${sub + 1}/3)`];
  if (step === 2) return ['BÀI 3/3 · CỨU TÙ BINH', ['Bắn sập trại giam', 'Lái xe chạm vào tù binh để đón', 'Chở tù binh về bãi trực thăng (chữ H)'][sub] || '', 'Cứu đủ 5 người = +1 cấp đạn'];
  return ['HOÀN THÀNH!', 'Bạn đã sẵn sàng', 'Vào trận thật…'];
}
function drawTutorial(now) {
  if (!latest || !latest.tu || latest.ph) return;
  const [step, sub, mx, my] = latest.tu;
  const d = L.dpr, c = ctx, s = L.s, cam = latest.cam;
  const W2S = (x, y) => [(L.ox + x * s) * d, (L.oy + (y - cam) * s) * d];
  const pulse = (Math.sin(now / 220) + 1) / 2;
  c.save();
  // highlight the half of the screen being taught
  if (step === 0) { c.fillStyle = `rgba(255,216,74,${0.08 + 0.08 * pulse})`; c.fillRect(0, 0, L.W / 2 * d, L.H * d); }
  if (step === 1) { c.fillStyle = `rgba(255,90,60,${0.08 + 0.08 * pulse})`; c.fillRect(L.W / 2 * d, 0, L.W / 2 * d, L.H * d); }
  // goal marker: pulsing ring + bouncing arrow
  if (mx >= 0) {
    const [sx, sy] = W2S(mx, my), r = (16 + pulse * 4) * s * d;
    c.strokeStyle = step === 1 ? '#ff6a4a' : '#ffd84a'; c.lineWidth = 3 * d;
    c.beginPath(); c.arc(sx, sy, r, 0, 7); c.stroke();
    const ay = sy - r - (8 + pulse * 8) * d;
    c.fillStyle = c.strokeStyle; c.beginPath(); c.moveTo(sx, ay + 10 * d); c.lineTo(sx - 9 * d, ay - 4 * d); c.lineTo(sx + 9 * d, ay - 4 * d); c.closePath(); c.fill();
  }
  // shooting lesson: show the line the gun fires along (straight out of the jeep's nose)
  if (step === 1 && pred) {
    const a = pred.a, [jx, jy] = W2S(pred.x + Math.cos(a) * 14, pred.y + Math.sin(a) * 14), len = 120 * s * d;
    c.setLineDash([7 * d, 6 * d]); c.strokeStyle = 'rgba(255,240,150,0.9)'; c.lineWidth = 2.5 * d;
    c.beginPath(); c.moveTo(jx, jy); c.lineTo(jx + Math.cos(a) * len, jy + Math.sin(a) * len); c.stroke(); c.setLineDash([]);
    c.fillStyle = 'rgba(255,240,150,0.95)'; c.font = `800 ${11 * d}px 'Be Vietnam Pro', sans-serif`; c.textAlign = 'center';
    c.fillText('HƯỚNG BẮN', jx + Math.cos(a) * (len + 22 * d), jy + Math.sin(a) * (len + 22 * d));
  }
  // instruction card under the HUD bar
  const [t0, t1, t2] = tutLines(step, sub);
  const w = Math.min(L.gw - 16, 500), x = L.W / 2, y = L.oy + 22 * s + 6;
  c.fillStyle = 'rgba(16,18,12,0.86)';
  c.beginPath(); c.roundRect ? c.roundRect((x - w / 2) * d, y * d, w * d, 58 * d, 8 * d) : c.rect((x - w / 2) * d, y * d, w * d, 58 * d); c.fill();
  c.textAlign = 'center'; c.textBaseline = 'middle';
  c.fillStyle = '#a7a58c'; c.font = `800 ${10 * d}px 'Be Vietnam Pro', sans-serif`; c.fillText(t0, x * d, (y + 11) * d);
  c.fillStyle = '#ffd84a'; c.font = `800 ${15 * d}px 'Be Vietnam Pro', sans-serif`; c.fillText(t1, x * d, (y + 28) * d, (w - 16) * d);
  c.fillStyle = '#f2efd8'; c.font = `500 ${11.5 * d}px 'Be Vietnam Pro', sans-serif`; c.fillText(t2, x * d, (y + 46) * d, (w - 16) * d);
  c.restore();
}

// "ask for a life" button for a player who is out, and the yes/no prompt shown to the teammate
function updateLifeUi() {
  const ask = $('askLife'), prompt = $('lifePrompt');
  if (state !== 'play' || !latest || latest.ph || latest.tu) { ask.hidden = true; prompt.hidden = true; return; }
  const me = latest.p[you], mate = latest.p[1 - you], lr = latest.lr;
  const out = me && !me[3] && me[5] <= 0;
  ask.hidden = !out;
  if (out) {
    if (lr && lr[0] === you) { ask.disabled = true; ask.textContent = `Đang chờ đồng đội đồng ý… ${lr[2]}s`; }
    else if (!mate || mate[5] < 2) { ask.disabled = true; ask.textContent = 'Đồng đội không còn mạng dư'; }
    else { ask.disabled = false; ask.textContent = 'XIN 1 MẠNG TỪ ĐỒNG ĐỘI'; }
  }
  const askMe = lr && lr[1] === you;
  if (askMe && prompt.hidden) sfx('pickup');
  prompt.hidden = !askMe;
  if (askMe) {
    $('lifeTxt').textContent = `${roster[lr[0]]?.name || 'Đồng đội'} hết mạng, xin 1 mạng của bạn`;
    $('lifeSub').textContent = `Bạn còn ${mate ? latest.p[you][5] : 0} mạng · tự từ chối sau ${lr[2]}s`;
  }
}

// ---------------- main loop ----------------
let last = performance.now(), acc = 0;
function frame(now) {
  const dt = Math.min(0.1, (now - last) / 1000); last = now;
  if (state === 'play') {
    acc += dt * 1000;
    let n = 0;
    while (acc >= STEP_MS && n++ < 5) { acc -= STEP_MS; inputStep(); }
    if (acc > STEP_MS * 5) acc = 0;
  } else acc = 0;

  let track = '';
  if (state === 'play' && latest && !latest.ph) track = latest.e.some(e => e[1] === T.boss || e[1] === T.boss2) ? 'boss' : 'stage' + Math.max(0, (latest.sg || 0) - 1);
  setMusic(track);
  window.RJ_PAUSED = document.body.classList.contains('portrait') && state === 'play';
  const S = drawWorld(now, dt);
  if (skin === 'nes') nesFilter();
  $('skip').hidden = !(state === 'play' && latest && latest.tu && !latest.ph);
  updateLifeUi();
  ctx.setTransform(1, 0, 0, 1, 0, 0);
  ctx.fillStyle = '#0d0e0a'; ctx.fillRect(0, 0, canvas.width, canvas.height);
  ctx.imageSmoothingEnabled = hiRes();
  let sx = 0, sy = 0;
  if (shake > 0) { sx = (Math.random() - 0.5) * shake; sy = (Math.random() - 0.5) * shake; shake = Math.max(0, shake - dt * 20); }
  ctx.drawImage(buf, Math.round((L.ox + sx * L.s) * L.dpr), Math.round((L.oy + sy * L.s) * L.dpr), Math.round(L.gw * L.dpr), Math.round(L.gh * L.dpr));
  ctx.strokeStyle = '#2a2e20'; ctx.lineWidth = 2 * L.dpr;
  ctx.strokeRect(L.ox * L.dpr, L.oy * L.dpr, L.gw * L.dpr, L.gh * L.dpr);
  if (S) { drawHud(S, now); drawControls(now); drawTutorial(now); }
  requestAnimationFrame(frame);
}
requestAnimationFrame(frame);

// expose for automated tests
window.__rj = { get state() { return state; }, get latest() { return latest; }, get you() { return you; }, get pred() { return pred; } };
