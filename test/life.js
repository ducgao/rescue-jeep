// Headless check of the "ask for a life" flow with a human (slot 0) and a bot (slot 1).
import { Room } from '../server/room.js';
const evs = [];
const room = new Room([{ name: 'Human' }, { name: 'BOT', isBot: true }], { seed: 5, send: (i, m) => { if (typeof m === 'string') { const s = JSON.parse(m); evs.push(...s.ev.filter(e => e[0] === 'L' || e[0] === 'A')); } } });
const me = room.players[0];
for (let i = 0; i < 60; i++) room.step();
me.invulnUntil = 0; me.lives = 1; room.killPlayer(me);
console.log('after death: alive', me.alive, 'lives', me.lives, 'bot lives', room.players[1].lives);
room.requestLife(0);
for (let i = 0; i < 30 * 3; i++) { room.pushInput(0, i + 1, 0, 0, false); room.step(); }
console.log('after request: alive', me.alive, 'lives', me.lives, 'bot lives', room.players[1].lives, 'events', JSON.stringify(evs));

// two humans: accept and timeout paths
const r2 = new Room([{ name: 'A' }, { name: 'B' }], { seed: 9 });
const a = r2.players[0], b = r2.players[1];
a.invulnUntil = 0; a.lives = 1; r2.killPlayer(a);
r2.requestLife(0); r2.step();
console.log('pending request', JSON.stringify(r2.snapshot().lr));
r2.answerLife(1, true);
console.log('accepted: A lives', a.lives, 'B lives', b.lives);
a.invulnUntil = 0; for (let i = 0; i < 20; i++) r2.step(); a.invulnUntil = 0; r2.killPlayer(a);
r2.requestLife(0);
for (let i = 0; i < 30 * 11; i++) r2.step();
console.log('after 11s no answer: A lives', a.lives, 'B lives', b.lives, 'request', r2.lifeReq);
