// Deterministic level layouts, one per stage. y = LEVEL_LEN is the start (bottom), y = 0 is the boss.
// `rivers` holds every horizontal barrier band: kind 'water' (bullets pass), 'ridge' / 'wall' (bullets blocked);
// `bridges` are the passable gaps in a band.
import { LEVEL_LEN, VIEW_W, STAGES } from './constants.js';

// Layouts are authored on a 240-wide grid (BW) and then stretched to the real playfield width.
const BW = 240;
import { rng, circleHitsRect } from './physics.js';

function builder(theme) {
  const L = { theme, rivers: [], blockers: [], spawns: [], helipads: [], deco: [], roads: [] };
  const api = {
    L,
    band(y, h, gaps, kind = 'water') {
      L.rivers.push({ y, h, bridges: gaps, kind });
      let cx = 0;
      for (const br of [...gaps].sort((a, b) => a.x - b.x)) {
        if (br.x > cx) L.blockers.push({ x: cx, y, w: br.x - cx, h, kind: kind === 'water' ? 'water' : kind });
        cx = br.x + br.w;
      }
      if (cx < BW) L.blockers.push({ x: cx, y, w: BW - cx, h, kind: kind === 'water' ? 'water' : kind });
    },
    wall: (x, y, w, h) => L.blockers.push({ x, y, w, h, kind: 'sandbag' }),
    rock: (x, y, w, h) => L.blockers.push({ x, y, w, h, kind: 'rock' }),
    S: (type, x, y, extra = {}) => L.spawns.push({ type, x, y, ...extra }),
    wave: (y, n, side = 'top') => L.spawns.push({ type: 'wave', x: 0, y, n, side }),
    heli: (x, y) => L.helipads.push({ x, y }),
  };
  return api;
}

function decorate(L, R, kinds) {
  for (let i = 0; i < Math.round(260 * VIEW_W / BW); i++) {
    const x = 6 + R() * (VIEW_W - 12), y = 440 + R() * (LEVEL_LEN - 460);
    const blocked = L.blockers.some(b => circleHitsRect(x, y, 16, b)) ||
      L.rivers.some(r => y > r.y - 26 && y < r.y + r.h + 22) ||
      L.roads.some(r => x > r.x - 8 && x < r.x + r.w + 8 && y > r.y0 && y < r.y1) ||
      L.spawns.some(s => s.type !== 'wave' && Math.abs(s.x - x) < 28 && Math.abs(s.y - y) < 30) ||
      L.helipads.some(h => Math.abs(h.x - x) < 32 && Math.abs(h.y - y) < 32);
    if (!blocked) L.deco.push({ kind: R() < 0.65 ? kinds[0] : kinds[1], x, y });
  }
}

// stretch every x coordinate / width from the 240 authoring grid to the playfield width
function stretch(L) {
  const k = VIEW_W / BW, sx = v => Math.round(v * k);
  for (const b of L.blockers) {
    if (b.kind === 'sandbag' || b.kind === 'rock') b.x = sx(b.x + b.w / 2) - b.w / 2; // obstacles keep their size
    else { const x1 = sx(b.x + b.w); b.x = sx(b.x); b.w = Math.max(1, x1 - b.x); }
  }
  for (const r of L.rivers) for (const g of r.bridges) { g.x = sx(g.x); g.w = sx(g.w); }
  for (const r of L.roads) { r.x = sx(r.x); r.w = sx(r.w); }
  for (const h of L.helipads) h.x = sx(h.x);
  for (const sp of L.spawns) {
    sp.x = sx(sp.x);
    if (sp.patrol) sp.patrol = sp.patrol.map(sx);
    if (sp.turrets) sp.turrets = sp.turrets.map(sx);
  }
}

// ---------- Tutorial: small safe area, targets are spawned step by step by the room ----------
function tutorial() {
  const R = rng(7);
  const { L, heli } = builder(0);
  L.tutorial = true;
  L.minCam = LEVEL_LEN - 240;           // camera locked: the whole lesson happens on one screen
  heli(214, LEVEL_LEN - 52);            // helipad in the bottom-right corner of the yard
  stretch(L);
  decorate(L, R, ['tree', 'bush']);
  // trees only along the edges of the yard so nothing blocks the lessons
  L.deco = L.deco.filter(d => d.y > LEVEL_LEN - 1400 && (d.y < LEVEL_LEN - 250 || d.x < 22 || d.x > VIEW_W - 22));
  return L;
}

// ---------- Stage 1: grassland (hand-made, gentle) ----------
function stage1() {
  const R = rng(1986);
  const { L, band, wall, rock, S, wave, heli } = builder(0);
  L.roads.push({ x: 104, w: 32, y0: 4600, y1: LEVEL_LEN });
  wall(30, 5650, 40, 8); wall(170, 5620, 40, 8);
  wave(5560, 3);
  S('turret', 190, 5400);
  wave(5330, 3, 'left');
  S('prison', 55, 5210, { pows: 4, flash: 1 });
  wall(20, 5160, 30, 8);
  wave(5080, 4, 'right');
  heli(185, 4960);
  S('tank', 70, 4800, { patrol: [40, 150] });
  wave(4720, 3);
  band(4560, 56, [{ x: 98, w: 44 }]);
  S('turret', 45, 4480); S('turret', 195, 4480);
  wall(70, 4430, 20, 8); wall(150, 4430, 20, 8);
  L.roads.push({ x: 20, w: 28, y0: 3080, y1: 4560 });
  wave(4320, 5);
  S('prison', 185, 4160, { pows: 5, flash: 1 });
  rock(120, 4100, 26, 22);
  S('tank', 60, 4020, { patrol: [30, 120] });
  wave(3940, 4, 'left');
  S('turret', 120, 3850);
  heli(55, 3660);
  wall(150, 3600, 50, 8);
  S('tank', 185, 3470, { patrol: [130, 210] });
  wave(3380, 4, 'right');
  S('prison', 120, 3250, { pows: 4, flash: 1 });
  band(3020, 64, [{ x: 24, w: 40 }, { x: 176, w: 40 }]);
  S('turret', 120, 2930);
  rock(100, 2870, 40, 18);
  L.roads.push({ x: 180, w: 30, y0: 1600, y1: 3020 });
  wave(2780, 6);
  heli(185, 2560);
  S('tank', 60, 2440, { patrol: [30, 130] });
  S('prison', 60, 2250, { pows: 6, flash: 1 });
  S('turret', 60, 2060); S('turret', 180, 2060);
  wall(95, 2010, 50, 8);
  wave(1900, 6, 'left');
  S('prison', 180, 1720, { pows: 4, flash: 1 });
  heli(55, 1520);
  S('tank', 120, 1320, { patrol: [40, 200] });
  wave(1180, 5, 'right');
  S('turret', 40, 1100); S('turret', 200, 1100);
  wave(1000, 6);
  heli(200, 860);
  wall(30, 760, 40, 8); wall(170, 760, 40, 8);
  S('boss', 120, 70, { turrets: [40, 90, 150, 200] });
  stretch(L);
  decorate(L, R, ['tree', 'bush']);
  return L;
}

// ---------- Stages 2-3: generated from segments, denser per stage ----------
function generated(stage) {
  const R = rng(4242 + (stage - 1) * 97);
  const { L, band, wall, rock, S, wave, heli } = builder(stage - 1);
  const placed = [];
  const free = (x, y, r) => !placed.some(p => Math.hypot(p[0] - x, p[1] - y) < r + p[2]) &&
    !L.blockers.some(b => circleHitsRect(x, y, r, b)) &&
    !L.rivers.some(rv => y > rv.y - r - 24 && y < rv.y + rv.h + r + 20);
  const place = (x, y, r) => { placed.push([x, y, r]); };
  const tryPut = (y0, y1, r, fn) => {
    for (let k = 0; k < 30; k++) {
      const x = 28 + R() * (BW - 56), y = y1 + R() * (y0 - y1);
      if (free(x, y, r)) { place(x, y, r); fn(x, y); return true; }
    }
    return false;
  };
  const barrierKinds = stage === 2 ? ['ridge', 'ridge', 'water'] : ['wall', 'water', 'wall'];
  const turretsPer = stage === 2 ? 1.4 : 1.8, tanksPer = stage === 2 ? 1.1 : 1.4;
  let y = LEVEL_LEN - 300, seg = 0, prisons = 0, lastHeli = LEVEL_LEN, bi = 0;
  place(120, LEVEL_LEN - 60, 50);
  while (y > 1000) {
    const segH = 300 + R() * 110, top = y - segH;
    if (seg % 3 === 2) {
      const kind = barrierKinds[bi++ % barrierKinds.length];
      const h = kind === 'water' ? 56 : kind === 'ridge' ? 38 : 22;
      const by = Math.round(top + segH * 0.45);
      let gaps;
      if (R() < 0.5) { const gx = 40 + Math.round(R() * 116); gaps = [{ x: gx, w: 44 }]; }
      else { const a = 18 + Math.round(R() * 30), b = 150 + Math.round(R() * 40); gaps = [{ x: a, w: 40 }, { x: b, w: 40 }]; }
      band(by, h, gaps, kind);
      for (const g of gaps) {
        const cx = g.x + g.w / 2;
        for (const ox of [-48, 48]) {
          const tx = Math.max(24, Math.min(BW - 24, cx + ox));
          if (R() < (stage === 2 ? 0.6 : 0.9) && free(tx, by - 46, 12)) { place(tx, by - 46, 12); S('turret', tx, by - 46); }
        }
      }
      wave(by - 110, 3 + stage);
    } else {
      const nT = Math.floor(turretsPer + R()), nK = Math.floor(tanksPer + R());
      for (let i = 0; i < nT; i++) tryPut(y - 30, top + 30, 14, (x, yy) => S('turret', x, yy));
      for (let i = 0; i < nK; i++) tryPut(y - 30, top + 30, 16, (x, yy) => S('tank', x, yy, { patrol: [Math.max(26, x - 60), Math.min(214, x + 60)] }));
      if (prisons < 5 && seg % 3 !== 1 || (prisons < 5 && R() < 0.4)) {
        if (tryPut(y - 40, top + 60, 24, (x, yy) => S('prison', x, yy, { pows: 4 + Math.floor(R() * 3), flash: 1 }))) prisons++;
      }
      for (let i = 0; i < 1 + Math.floor(R() * 2); i++) {
        tryPut(y - 20, top + 20, 18, (x, yy) => (R() < 0.5 ? rock(x - 13, yy - 9, 26, 18) : wall(x - 20, yy - 4, 40, 8)));
      }
      wave(y - segH * 0.25, 2 + stage, ['top', 'left', 'right'][Math.floor(R() * 3)]);
      wave(y - segH * 0.75, 2 + stage);
      if (lastHeli - y > 700) {
        const hx = R() < 0.5 ? 50 : 190;
        if (free(hx, y - 50, 30)) { place(hx, y - 50, 30); heli(hx, y - 50); lastHeli = y; }
      }
    }
    y = top; seg++;
  }
  heli(stage === 2 ? 40 : 200, 860); place(stage === 2 ? 40 : 200, 860, 30);
  wave(1000, 2 + stage * 2);
  if (stage === 2) S('boss2', 120, 80);
  else S('boss', 120, 70, { turrets: [28, 66, 104, 136, 174, 212] });
  stretch(L);
  decorate(L, R, stage === 2 ? ['cactus', 'drybush'] : ['pine', 'snowbush']);
  return L;
}

// index 0 = tutorial, 1..3 = real stages
export const LEVELS = [tutorial(), stage1(), generated(2), generated(3)];
// live binding used by the client renderer / prediction; the server uses room.L per room
export let LEVEL = LEVELS[0];
export function setStage(i) { LEVEL = LEVELS[Math.max(0, Math.min(STAGES - 1, i))]; }
