// Headless bot-vs-level simulation for balancing: node test/sim.js [runs]
import { Room } from '../server/room.js';
import { TICK_RATE, STAGES } from '../shared/constants.js';
import { LEVELS } from '../shared/level.js';
LEVELS.forEach((L, i) => console.log(`stage ${i}: spawns=${L.spawns.length} heli=${L.helipads.length} prisons=${L.spawns.filter(s => s.type === 'prison').length} pows=${L.spawns.reduce((a, s) => a + (s.pows || 0), 0)} turrets=${L.spawns.filter(s => s.type === 'turret').length} tanks=${L.spawns.filter(s => s.type === 'tank').length} bands=${L.rivers.map(r => r.kind).join(',')}`));
const runs = +process.argv[2] || 6;
const reached = Array(STAGES + 1).fill(0);
for (let i = 0; i < runs; i++) {
  let result = null;
  const room = new Room([{ name: 'B1', isBot: true }, { name: 'B2', isBot: true }], { seed: 1000 + i, onEnd: (_, m) => (result = m) });
  const stageLog = [];
  let lastStage = room.stage, t0 = 0, dAt = 0;
  const lives = () => room.players.reduce((a, p) => a + p.lives, 0);
  while (!room.ended && room.tick < TICK_RATE * 60 * 30) {
    room.step();
    const d = room.players.reduce((a, p) => a + (p._d || 0), 0);
    for (const p of room.players) { if (p._wasAlive && !p.alive) p._d = (p._d || 0) + 1; p._wasAlive = p.alive; }
    if (room.stage !== lastStage) { stageLog.push(`S${lastStage}:${Math.round(room.time - t0)}s/${d - dAt}💀`); lastStage = room.stage; t0 = room.time; dAt = d; }
  }
  const dEnd = room.players.reduce((a, p) => a + (p._d || 0), 0);
  stageLog.push(`S${room.stage}:${Math.round(room.time - t0)}s/${dEnd - dAt}💀(${result ? (result.win ? 'WIN' : 'LOSE ' + room.progress() + '%') : 'TIMEOUT'})`);
  reached[result && result.win ? STAGES : room.stage]++;
  console.log(`run ${i}: ${stageLog.join(' → ')} score=${room.players.map(p => p.score).join('/')} w=${room.players.map(p => p.weapon).join('/')}`);
}
console.log('ended at stage (index 3 = won all):', reached.join(' '));
