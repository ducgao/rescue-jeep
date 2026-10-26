// Simple steering-based bot: deliver POWs > pick up POWs > follow mate / push forward,
// plus bullet dodging, bridge routing and unstuck jitter. Produces a movement vector only.
import { VIEW_W, VIEW_H, DT, MAX_CARRY, JEEP_R } from '../shared/constants.js';
import { collidesAny } from '../shared/physics.js';
import { T, HARD } from '../shared/entities.js';

function routeAcrossRivers(L, px, py, gx, gy) {
  for (const r of L.rivers) {
    const top = r.y, bot = r.y + r.h;
    const crossingUp = py > bot - 2 && gy < bot;
    const crossingDown = py < top + 2 && gy > top;
    if (!crossingUp && !crossingDown) continue;
    // choose bridge closest to (current x + goal x)/2
    let best = null, bd = Infinity;
    for (const b of r.bridges) {
      const cx = b.x + b.w / 2, d = Math.abs(cx - px) + Math.abs(cx - gx) * 0.5;
      if (d < bd) { bd = d; best = b; }
    }
    const cx = best.x + best.w / 2;
    const aligned = Math.abs(px - cx) < best.w / 2 - 9;
    if (crossingUp) return aligned ? [cx, top - 14] : [cx, bot + 16];
    return aligned ? [cx, bot + 14] : [cx, top - 16];
  }
  return [gx, gy];
}

export function botInput(room, p) {
  const st = p.bot;
  const cam = room.camY;
  const mate = room.players.find(q => q !== p && q.alive);
  let gx = p.x, gy = p.y, urgency = 1, aim = null;

  // 1) deliver POWs if a helipad is near the view
  let pad = null;
  if (p.carry > 0) {
    let bd = Infinity;
    for (const h of room.L.helipads) {
      if (h.y < cam - 30 || h.y > cam + VIEW_H + 10) continue;
      const d = Math.abs(h.y - p.y) + Math.abs(h.x - p.x);
      if (d < bd) { bd = d; pad = h; }
    }
    if (pad && (p.carry >= 3 || bd < 220)) { gx = pad.x; gy = pad.y; }
    else pad = null;
  }
  // 2) collect POWs
  if (!pad && p.carry < MAX_CARRY) {
    let bw = null, bd = Infinity;
    for (const w of room.pows.values()) {
      if (w.y < cam || w.y > cam + VIEW_H) continue;
      const d = Math.hypot(w.x - p.x, w.y - p.y) - (w.flash ? 40 : 0);
      if (d < bd) { bd = d; bw = w; }
    }
    if (bw) { gx = bw.x; gy = bw.y; pad = bw; }
  }
  // tutorial: just keep the human company
  if (room.tut && mate) { pad = mate; gx = Math.max(16, Math.min(VIEW_W - 16, mate.x + (p.x < mate.x ? -50 : 50))); gy = mate.y + 20; }
  // 2b) grab power-up items in view
  if (!pad) {
    let bi = null, bd = 150;
    for (const it of room.items.values()) {
      if (it.y < cam + 10 || it.y > cam + VIEW_H - 6) continue;
      const d = Math.hypot(it.x - p.x, it.y - p.y);
      if (d < bd) { bd = d; bi = it; }
    }
    if (bi) { gx = bi.x; gy = bi.y; pad = bi; }
  }
  // 3) fight / follow / advance
  if (!pad) {
    let hard = null, hd = Infinity;
    st.ignore = st.ignore || new Map();
    for (const e of room.enemies.values()) {
      if (e.y < cam - 10 || e.y > cam + VIEW_H || room.shielded(e)) continue;
      if ((st.ignore.get(e.id) || 0) > room.time) continue;
      const d = Math.hypot(e.x - p.x, e.y - p.y) + (HARD.has(e.type) ? 0 : 50);
      if (d < hd) { hd = d; hard = e; }
    }
    // give up on a target we can't damage (e.g. a soldier stuck behind sandbags)
    if (hard) {
      if (st.aimId !== hard.id) { st.aimId = hard.id; st.aimT = room.time; st.aimHp = hard.hp; }
      else if (hard.hp < st.aimHp) { st.aimHp = hard.hp; st.aimT = room.time; }
      else if (room.time - st.aimT > 5) { st.ignore.set(hard.id, room.time + 8); st.aimId = null; hard = null; }
    }
    if (hard) {
      // standoff below the target, then turn the jeep to face it (the gun only fires forward)
      aim = hard;
      const side = p.slot === 0 ? -1 : 1;
      const stand = hard.type === T.boss || hard.type === T.boss2 ? 150 : hard.type === T.soldier ? 0 : 100; // soldiers: just run them over
      gx = Math.max(16, Math.min(VIEW_W - 16, hard.x + (hard.type === T.soldier ? 0 : side * 12)));
      gy = hard.y + stand;
      // target across a river/ridge and within range: shoot over it from our bank instead of crossing
      for (const rv of room.L.rivers) {
        const bankY = rv.y + rv.h + 14;
        if (hard.y < rv.y && p.y > rv.y + rv.h - 2 && gy > rv.y - 20 && bankY - hard.y < 180) {
          gy = Math.max(gy, bankY); gx = Math.max(16, Math.min(VIEW_W - 16, hard.x));
        }
      }
      if (mate && !mate.isBot) gy = Math.max(gy, Math.min(mate.y - 10, hard.y + stand + 40));
    } else if (mate && !mate.isBot) {
      const side = p.x < mate.x ? -1 : 1;
      gx = Math.max(16, Math.min(VIEW_W - 16, mate.x + side * 45));
      if (gx < 20 || gx > VIEW_W - 20) gx = mate.x - side * 45;
      gy = mate.y + 10;
      urgency = Math.hypot(gx - p.x, gy - p.y) > 25 ? 1 : 0.4;
    } else {
      gx = VIEW_W / 2 + (p.slot === 0 ? -25 : 25);
      gy = p.y - 80;
    }
  }
  gy = Math.max(cam + 12, Math.min(cam + VIEW_H - 12, gy));
  const [rgx, rgy] = routeAcrossRivers(room.L, p.x, p.y, gx, gy);
  const rerouted = rgx !== gx || rgy !== gy;
  gx = rgx; gy = rgy;

  let dx = gx - p.x, dy = gy - p.y;
  const dl = Math.hypot(dx, dy);
  if (dl < 5) { dx = 0; dy = 0; } else { dx = dx / dl * urgency; dy = dy / dl * urgency; }
  if (aim && !rerouted && dl < 28 && Math.hypot(aim.x - p.x, aim.y - p.y) < 190) {
    // at the standoff spot: creep toward the target so the heading points at it
    const ax0 = aim.x - p.x, ay0 = aim.y - p.y, al = Math.hypot(ax0, ay0) || 1;
    dx = ax0 / al * 0.2; dy = ay0 / al * 0.2;
  }

  // dodge incoming enemy bullets
  let ax = 0, ay = 0;
  for (const b of room.bullets.values()) {
    if (!b.enemy) continue;
    const rx = p.x - b.x, ry = p.y - b.y;
    const d = Math.hypot(rx, ry);
    if (d > 70) continue;
    const sp = Math.hypot(b.vx, b.vy) || 1;
    const ux = b.vx / sp, uy = b.vy / sp;
    const along = rx * ux + ry * uy;
    if (along < -4) continue; // moving away
    const perp = rx * -uy + ry * ux; // signed lateral distance
    if (Math.abs(perp) > 16) continue;
    const s = (perp >= 0 ? 1 : -1) * (1.6 - Math.abs(perp) / 16) * (1 - d / 90);
    ax += -uy * s; ay += ux * s;
  }
  // keep clear of tanks / turrets bodies
  for (const e of room.enemies.values()) {
    if (!HARD.has(e.type) || e.type === T.prison || e.type === T.boss || e.type === T.boss2) continue;
    const rx = p.x - e.x, ry = p.y - e.y, d = Math.hypot(rx, ry);
    if (d < 40 && d > 0) { ax += rx / d * 0.7; ay += ry / d * 0.7; }
  }
  dx += ax * 1.6; dy += ay * 1.6;

  // unstuck
  st.t += DT;
  if (st.t > 0.6) {
    const moved = st.lx === undefined ? 99 : Math.hypot(p.x - st.lx, p.y - st.ly);
    if (moved < 4 && (Math.abs(dx) + Math.abs(dy)) > 0.3) {
      st.jitter = 0.8;
      const s = room.R() < 0.5 ? -1 : 1;
      st.jx = -dy * s + (room.R() - 0.5); st.jy = dx * s + 0.6;
    }
    st.lx = p.x; st.ly = p.y; st.t = 0;
  }
  if (st.jitter > 0) { st.jitter -= DT; dx = st.jx; dy = st.jy; }

  let m = Math.hypot(dx, dy);
  if (m > 1) { dx /= m; dy /= m; m = 1; }

  // obstacle probe: if the way ahead is blocked, rotate toward the free side
  if (m > 0.2) {
    const solids = room.L.blockers.concat(room.dynBlockers());
    const free = (ux, uy) => {
      for (const k of [5, 11]) {
        const x = p.x + ux * k, y = p.y + uy * k;
        if (x < JEEP_R || x > VIEW_W - JEEP_R || collidesAny(x, y, JEEP_R, solids)) return false;
      }
      return true;
    };
    const ux = dx / m, uy = dy / m;
    if (!free(ux, uy)) {
      const base = Math.atan2(uy, ux);
      const order = (st.side || 1) > 0 ? [1, -1] : [-1, 1];
      search: for (const d of [0.5, 1.0, 1.5, 2.1, 2.7]) {
        for (const s of order) {
          const a = base + s * d;
          if (free(Math.cos(a), Math.sin(a))) { dx = Math.cos(a) * m; dy = Math.sin(a) * m; st.side = s; st.jitter = 0; break search; }
        }
      }
    }
  }
  return [dx, dy];
}
