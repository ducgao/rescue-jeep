// Shared movement + collision helpers (deterministic, used for client prediction too).
import { VIEW_W, VIEW_H, JEEP_SPEED, JEEP_R, DT } from './constants.js';

export function circleHitsRect(cx, cy, r, b) {
  const nx = Math.max(b.x, Math.min(cx, b.x + b.w));
  const ny = Math.max(b.y, Math.min(cy, b.y + b.h));
  const dx = cx - nx, dy = cy - ny;
  return dx * dx + dy * dy < r * r;
}

export function pointInRect(x, y, b) {
  return x >= b.x && x <= b.x + b.w && y >= b.y && y <= b.y + b.h;
}

export function collidesAny(x, y, r, blockers) {
  for (let i = 0; i < blockers.length; i++) {
    const b = blockers[i];
    // cheap vertical reject
    if (y + r < b.y || y - r > b.y + b.h) continue;
    if (circleHitsRect(x, y, r, b)) return true;
  }
  return false;
}

// Normalise raw input to magnitude <= 1, quantised so client & server agree.
export function normInput(dx, dy) {
  dx = +dx || 0; dy = +dy || 0;
  const m = Math.hypot(dx, dy);
  if (m > 1) { dx /= m; dy /= m; }
  if (m < 0.08) { dx = 0; dy = 0; }
  return [Math.round(dx * 100) / 100, Math.round(dy * 100) / 100];
}

// Move a jeep one tick. Mutates j {x,y}. Returns true if moved.
export function stepJeep(j, dx, dy, camY, blockers) {
  const vx = dx * JEEP_SPEED * DT, vy = dy * JEEP_SPEED * DT;
  const r = JEEP_R;
  const minX = r, maxX = VIEW_W - r, minY = camY + r + 2, maxY = camY + VIEW_H - r - 2;
  let nx = Math.max(minX, Math.min(maxX, j.x + vx));
  if (!collidesAny(nx, j.y, r, blockers)) j.x = nx;
  let ny = Math.max(minY, Math.min(maxY, j.y + vy));
  if (!collidesAny(j.x, ny, r, blockers)) j.y = ny;
  if (dx || dy) j.a = Math.atan2(dy, dx);
  return !!(dx || dy);
}

export function dist2(ax, ay, bx, by) { const dx = ax - bx, dy = ay - by; return dx * dx + dy * dy; }

// Seeded RNG (mulberry32) for deterministic level generation.
export function rng(seed) {
  let a = seed >>> 0;
  return function () {
    a |= 0; a = (a + 0x6D2B79F5) | 0;
    let t = Math.imul(a ^ (a >>> 15), 1 | a);
    t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t;
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
}

export function hash2(x, y) {
  let h = (x * 374761393 + y * 668265263) | 0;
  h = Math.imul(h ^ (h >>> 13), 1274126177);
  return ((h ^ (h >>> 16)) >>> 0) / 4294967296;
}
