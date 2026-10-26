// Headless check that the training yard can be completed: a scripted "human" follows the markers.
import { Room } from '../server/room.js';
const room = new Room([{ name: 'Human' }, { name: 'BOT', isBot: true }], { seed: 3, tutorial: true });
const me = room.players[0];
let seq = 0, last = '';
for (let tick = 0; tick < 30 * 240 && room.stage === 0; tick++) {
  const t = room.tut;
  const key = t ? `${t.step}.${t.sub}` : 'done';
  if (key !== last) { console.log(`t=${room.time.toFixed(1)}s lesson ${key} cam=${room.camY}`); last = key; }
  let dx = 0, dy = 0, fire = false;
  if (t && t.mark) {
    const [mx, my] = t.mark;
    let gx = mx, gy = my;
    if (t.step === 1 || (t.step === 2 && t.sub === 0)) {   // stand off below/beside the target, then face it and shoot
      const ang = Math.atan2(me.y - my, me.x - mx); gx = mx + Math.cos(ang) * 70; gy = my + Math.sin(ang) * 70; fire = true;
    }
    const d = Math.hypot(gx - me.x, gy - me.y);
    if (d > 4) { dx = (gx - me.x) / d; dy = (gy - me.y) / d; }
    if (fire && d < 12) { const al = Math.hypot(mx - me.x, my - me.y); dx = (mx - me.x) / al * 0.2; dy = (my - me.y) / al * 0.2; }
  }
  room.pushInput(0, ++seq, dx, dy, fire);
  room.step();
}
console.log(room.stage === 1 ? 'TRAINING COMPLETED -> stage 1, bot alive: ' + room.players[1].alive : `stuck at ${last}`);
