// Offline build: runs the authoritative Room + bot inside the browser, no server.
import { Room } from '../../server/room.js';
import { TICK_RATE } from '../../shared/constants.js';

// dev: ?stage=2&start=700 starts stage 2 near the boss
const qs = new URLSearchParams(location.search);
if ((qs.get('start') || qs.get('stage') || qs.get('lives')) && typeof process === 'undefined') {
  window.process = { env: { RJ_START_Y: qs.get('start') || '', RJ_STAGE: qs.get('stage') || '', RJ_LIVES: qs.get('lives') || '' } };
}

window.RJ_LOCAL = () => {
  const fake = { readyState: 0, onopen: null, onmessage: null, onclose: null, onerror: null };
  let room = null, timer = null;
  const emit = m => fake.onmessage && fake.onmessage({ data: typeof m === 'string' ? m : JSON.stringify(m) });
  const stop = () => { clearInterval(timer); timer = null; };
  fake.send = str => {
    const m = JSON.parse(str);
    if (m.t === 'join') {
      room = new Room([{ name: m.name }, { name: 'BOT', isBot: true }], {
        seed: Date.now(), tutorial: !!m.tut, snapEvery: 1,
        send: (slot, msg) => { if (slot === 0) emit(msg); },
        onEnd: stop,
      });
      emit(room.startMsg(0));
      const STEP = 1000 / TICK_RATE;
      let acc = 0, last = performance.now();
      timer = setInterval(() => {
        const now = performance.now();
        acc += Math.min(250, now - last); last = now;
        if (window.RJ_PAUSED) { acc = 0; return; }   // paused while the phone is held upright
        while (acc >= STEP && room && !room.ended) { acc -= STEP; room.step(); }
      }, 5);
    } else if (m.t === 'i' && room) room.pushInput(0, m.s | 0, m.x, m.y, m.f);
    else if (m.t === 'skip' && room) room.skipTutorial();
    else if (m.t === 'life' && room) room.requestLife(0);
    else if (m.t === 'lifeAns' && room) room.answerLife(0, !!m.yes);
  };
  fake.close = () => { stop(); room = null; fake.readyState = 3; };
  setTimeout(() => { fake.readyState = 1; fake.onopen && fake.onopen(); }, 0);
  return fake;
};

const sub = document.querySelector('#menu .sub');
if (sub) sub.textContent = 'Bản offline · chơi cùng BOT';
import('./main.js');
