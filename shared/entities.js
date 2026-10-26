// Entity type codes + collision footprints shared by server and client prediction.
export const T = { soldier: 0, turret: 1, tank: 2, prison: 3, boss: 4, bossTurret: 5, boss2: 6 };
export const TYPE_NAME = ['soldier', 'turret', 'tank', 'prison', 'boss', 'bossTurret', 'boss2'];
export const B = { mg: 0, grenade: 1, missile: 2, ebullet: 3, eshell: 4, homing: 5, laser: 6, big: 7 };

// half sizes of blocking rect; null = not a blocker
const FOOT = {
  [T.turret]: [9, 9],
  [T.tank]: [10, 11],
  [T.prison]: [16, 12],
  [T.boss]: [92, 42],
  [T.bossTurret]: [9, 9],
  [T.boss2]: [58, 26],
};
export const RADIUS = { [T.soldier]: 5, [T.turret]: 10, [T.tank]: 12, [T.prison]: 16, [T.boss]: 60, [T.bossTurret]: 10, [T.boss2]: 48 };
export const HARD = new Set([T.turret, T.tank, T.prison, T.boss, T.bossTurret, T.boss2]);
export const isBossType = t => t === T.boss || t === T.boss2;

export function footprint(type, x, y) {
  const f = FOOT[type];
  if (!f) return null;
  return { x: x - f[0], y: y - f[1], w: f[0] * 2, h: f[1] * 2, kind: 'ent' };
}

// distance from point to entity surface (approx, rect-aware for blockers)
export function distToEntity(px, py, type, x, y) {
  const f = FOOT[type];
  if (!f) return Math.hypot(px - x, py - y) - RADIUS[type];
  const dx = Math.max(Math.abs(px - x) - f[0], 0), dy = Math.max(Math.abs(py - y) - f[1], 0);
  return Math.hypot(dx, dy);
}
