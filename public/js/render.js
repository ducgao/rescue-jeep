// World renderer, 16-bit cartoon style. Draws into a low-res 240x400 buffer; terrain cached in chunks.
import { VIEW_W, VIEW_H, LEVEL_LEN } from '../../shared/constants.js';
import { LEVEL } from '../../shared/level.js';
import { hash2 } from '../../shared/physics.js';
import { T, B } from '../../shared/entities.js';
import { buildSprites, canvas, outline, OUT } from './sprites.js';

const CH = 256;
const TILE = 16;
const chunks = new Map();
let S = null;

const THEMES = [
  { // grassland
    grass: '#58b848', grass2: '#5cbe4c', grassDk: '#3c9438', grassLt: '#88d860',
    dirt: '#d8a860', dirtDk: '#b07c44', dirtLt: '#ecc684', edge: '#2c7c2c',
    water: '#3070d8', waterDk: '#2050b0', waterLt: '#88c8f8', foam: '#e8f8ff',
    cliff: '#a06830', cliffDk: '#704018', sand: '#e8d098',
    stone: '#aca494', stoneLt: '#c8c0b0', stoneDk: '#847c6c', flowers: ['#f8f8f0', '#f8e048', '#f87890'],
  },
  { // desert
    grass: '#e8c078', grass2: '#e4b86c', grassDk: '#c4944c', grassLt: '#f8dca0',
    dirt: '#c8905c', dirtDk: '#a06c3c', dirtLt: '#dcac78', edge: '#a87840',
    water: '#3488c0', waterDk: '#24689c', waterLt: '#98d8f0', foam: '#f0fcff',
    cliff: '#b06c38', cliffDk: '#7c4420', sand: '#f0d8a0',
    stone: '#c8a878', stoneLt: '#e0c494', stoneDk: '#a0845c', flowers: ['#a89070', '#8c7458', '#f8f0d8'],
  },
  { // snow base
    grass: '#e8f0f8', grass2: '#dfe9f5', grassDk: '#a8bcd8', grassLt: '#ffffff',
    dirt: '#c8d4e2', dirtDk: '#a4b2c6', dirtLt: '#dce6f0', edge: '#b4c2d6',
    water: '#2858a8', waterDk: '#1c4084', waterLt: '#c8e8ff', foam: '#ffffff',
    cliff: '#8898b0', cliffDk: '#5c6c88', sand: '#d8e4f0',
    stone: '#8c94a0', stoneLt: '#a8b0bc', stoneDk: '#6c7480', flowers: ['#c8e0ff', '#ffffff', '#a8c8f0'],
  },
];
let C = THEMES[0], curTheme = -1;
export function resetTerrain() { chunks.clear(); curTheme = -1; }

// ---------- terrain helpers ----------
const isClearing = (tx, ty) => hash2((tx >> 1) + 311, (ty >> 1) + 17) + hash2(tx + 5, ty + 9) * 0.25 > 1.1;
function inRoad(wx, wy) { return LEVEL.roads.some(r => wx >= r.x && wx < r.x + r.w && wy >= r.y0 && wy < r.y1); }
function isDirtTile(tx, ty) { const wx = tx * TILE + 8, wy = ty * TILE + 8; return wy >= 420 && (isClearing(tx, ty) || inRoad(wx, wy)); }

function drawGrassTile(x, px, py, tx, ty) {
  const h = hash2(tx, ty);
  x.fillStyle = hash2(tx >> 2, ty >> 2) > 0.6 ? C.grass2 : C.grass; x.fillRect(px, py, TILE, TILE);
  const n = 1 + ((h * 3) | 0);
  for (let i = 0; i < n; i++) {
    const ox = (hash2(tx * 7 + i, ty) * 12) | 0, oy = (hash2(tx, ty * 5 + i) * 12) | 0;
    x.fillStyle = C.grassDk; x.fillRect(px + ox, py + oy + 2, 1, 2); x.fillRect(px + ox + 2, py + oy + 2, 1, 2); x.fillRect(px + ox + 1, py + oy + 3, 1, 1);
    x.fillStyle = C.grassLt; x.fillRect(px + ox + 1, py + oy + 1, 1, 2);
  }
  if (h > 0.9) {
    const ox = 4 + ((h * 97) | 0) % 8, oy = 4 + ((h * 53) | 0) % 8;
    const col = C.flowers[((h * 1000) | 0) % 3];
    x.fillStyle = col; x.fillRect(px + ox - 1, py + oy, 3, 1); x.fillRect(px + ox, py + oy - 1, 1, 3);
    if (LEVEL.theme === 0) { x.fillStyle = '#f8a020'; x.fillRect(px + ox, py + oy, 1, 1); }
  }
}
function drawDirtTile(x, px, py, tx, ty) {
  x.fillStyle = C.dirt; x.fillRect(px, py, TILE, TILE);
  for (let i = 0; i < 3; i++) {
    const h = hash2(tx * 3 + i, ty * 7);
    const ox = (h * 14) | 0, oy = (hash2(tx, ty * 3 + i) * 14) | 0;
    x.fillStyle = C.dirtDk; x.fillRect(px + ox, py + oy + 1, 2, 1);
    x.fillStyle = C.dirtLt; x.fillRect(px + ox, py + oy, 2, 1);
  }
  const jag = (len, f) => { for (let i = 0; i < len; i += 2) f(i, hash2(tx * 13 + i, ty * 11) > 0.5 ? 2 : 1); };
  if (!isDirtTile(tx, ty - 1)) jag(TILE, (i, d) => { x.fillStyle = C.grass; x.fillRect(px + i, py, 2, d); x.fillStyle = C.edge; x.fillRect(px + i, py + d, 2, 1); });
  if (!isDirtTile(tx, ty + 1)) jag(TILE, (i, d) => { x.fillStyle = C.dirtDk; x.fillRect(px + i, py + TILE - d - 1, 2, 1); x.fillStyle = C.grass; x.fillRect(px + i, py + TILE - d, 2, d); });
  if (!isDirtTile(tx - 1, ty)) jag(TILE, (i, d) => { x.fillStyle = C.grass; x.fillRect(px, py + i, d, 2); x.fillStyle = C.edge; x.fillRect(px + d, py + i, 1, 2); });
  if (!isDirtTile(tx + 1, ty)) jag(TILE, (i, d) => { x.fillStyle = C.edge; x.fillRect(px + TILE - d - 1, py + i, 1, 2); x.fillStyle = C.grass; x.fillRect(px + TILE - d, py + i, d, 2); });
}
function drawStoneTile(x, px, py, tx, ty) {
  x.fillStyle = C.stone; x.fillRect(px, py, TILE, TILE);
  x.fillStyle = C.stoneLt; x.fillRect(px, py, TILE - 1, 1); x.fillRect(px, py, 1, TILE - 1);
  x.fillStyle = C.stoneDk; x.fillRect(px, py + TILE - 1, TILE, 1); x.fillRect(px + TILE - 1, py, 1, TILE);
  if (hash2(tx, ty) > 0.8) { x.fillStyle = C.stoneDk; x.fillRect(px + 5, py + 6, 3, 1); x.fillRect(px + 7, py + 7, 1, 2); }
}

function drawSandbags(x, b, by) {
  const [c, cx] = canvas(b.w, b.h + 4);
  for (let row = 0; row < 2; row++) {
    const yy = row * 5, off = row ? 3 : 0;
    for (let i = -off; i < b.w; i += 7) {
      cx.fillStyle = '#b8945c'; cx.fillRect(i, yy + 1, 7, 6);
      cx.fillStyle = '#e8cc8c'; cx.fillRect(i, yy + 1, 6, 2);
      cx.fillStyle = '#86683c'; cx.fillRect(i, yy + 6, 7, 1); cx.fillRect(i + 6, yy + 1, 1, 6);
    }
  }
  x.fillStyle = 'rgba(0,0,0,0.25)'; x.fillRect(b.x + 2, by + b.h + 2, b.w, 3);
  x.drawImage(outline(c), b.x - 1, by - 3);
}

// rock ridge (desert) or concrete wall (snow base), drawn per solid segment with a 3/4 front face
function drawBand(x, rv, ry) {
  const segs = [];
  let cx = 0;
  for (const g of [...rv.bridges].sort((a, b) => a.x - b.x)) { if (g.x > cx) segs.push([cx, g.x]); cx = g.x + g.w; }
  if (cx < VIEW_W) segs.push([cx, VIEW_W]);
  const face = rv.kind === 'ridge' ? 12 : 9;
  for (const [a, b] of segs) {
    const w = b - a;
    const [c, cx2] = canvas(w, rv.h + 4);
    if (rv.kind === 'ridge') {
      cx2.fillStyle = '#b87440'; cx2.fillRect(0, 0, w, rv.h - face);
      for (let i = 0; i < w; i += 6) for (let j = 2; j < rv.h - face - 2; j += 7) {
        const h = hash2(a + i, rv.y + j);
        cx2.fillStyle = h > 0.5 ? '#d89a5c' : '#9c5c30'; cx2.fillRect(i + ((h * 3) | 0), j, 4, 2);
      }
      cx2.fillStyle = '#e8b478'; cx2.fillRect(0, 0, w, 2);
      cx2.fillStyle = '#8c4c24'; cx2.fillRect(0, rv.h - face, w, face);
      for (let i = 1; i < w; i += 4) { cx2.fillStyle = '#6c3418'; cx2.fillRect(i + ((hash2(i, rv.y) * 2) | 0), rv.h - face + 1, 1, face - 2); }
      cx2.fillStyle = 'rgba(0,0,0,0.3)'; cx2.fillRect(0, rv.h, w, 4);
    } else {
      cx2.fillStyle = '#a8b0bc'; cx2.fillRect(0, 0, w, rv.h - face);
      cx2.fillStyle = '#d0d8e4'; cx2.fillRect(0, 0, w, 2);
      cx2.fillStyle = '#ffffff'; cx2.fillRect(0, 0, w, 1);
      cx2.fillStyle = '#6c7480'; cx2.fillRect(0, rv.h - face, w, face);
      for (let i = 0; i < w; i += 16) { cx2.fillStyle = '#4c5460'; cx2.fillRect(i, rv.h - face, 1, face); cx2.fillStyle = '#8c94a0'; cx2.fillRect(i + 1, rv.h - face, 14, 1); }
      // hazard stripes on the ends next to gates
      for (const ex of [a > 0 ? 0 : -1, b < VIEW_W ? w - 6 : -1]) {
        if (ex < 0) continue;
        for (let j = 0; j < rv.h; j += 4) { cx2.fillStyle = (j / 4) % 2 ? '#1c140c' : '#f8c830'; cx2.fillRect(ex, j, 6, 4); }
      }
      cx2.fillStyle = 'rgba(0,0,0,0.3)'; cx2.fillRect(0, rv.h, w, 4);
    }
    x.drawImage(outline(c), a - 1, ry - 1);
  }
}

function buildChunk(ci) {
  const [c, x] = canvas(VIEW_W, CH);
  const y0 = ci * CH;
  for (let py = 0; py < CH; py += TILE) for (let px = 0; px < VIEW_W; px += TILE) {
    const tx = px / TILE, ty = (y0 + py) / TILE;
    if (y0 + py < 420) drawStoneTile(x, px, py, tx, ty);
    else if (isDirtTile(tx, ty)) drawDirtTile(x, px, py, tx, ty);
    else drawGrassTile(x, px, py, tx, ty);
  }
  for (const r of LEVEL.roads) {
    const a = Math.max(r.y0, y0), b = Math.min(r.y1, y0 + CH);
    for (let yy = a; yy < b; yy += 4) {
      for (const [rx, oy] of [[r.x + 6, 0], [r.x + r.w - 10, 2]]) {
        if (!isDirtTile(Math.floor(rx / TILE), Math.floor(yy / TILE))) continue;
        x.fillStyle = C.dirtDk; x.fillRect(rx, yy - y0 + oy, 2, 2);
      }
    }
  }
  // rivers: north cliff face, water, south foam + sand
  for (const rv of LEVEL.rivers) {
    if (rv.y + rv.h < y0 - 12 || rv.y > y0 + CH + 12) continue;
    const ry = rv.y - y0;
    if (rv.kind === 'ridge' || rv.kind === 'wall') { drawBand(x, rv, ry); continue; }
    x.fillStyle = C.cliff; x.fillRect(0, ry - 7, VIEW_W, 7);
    for (let i = 0; i < VIEW_W; i += 5) { x.fillStyle = C.cliffDk; x.fillRect(i + ((hash2(i, rv.y) * 3) | 0), ry - 6, 1, 6); }
    x.fillStyle = C.edge; x.fillRect(0, ry - 8, VIEW_W, 1);
    x.fillStyle = OUT; x.fillRect(0, ry - 1, VIEW_W, 1);
    x.fillStyle = C.water; x.fillRect(0, ry, VIEW_W, rv.h);
    x.fillStyle = C.waterDk; x.fillRect(0, ry, VIEW_W, 4);
    for (let i = 0; i < 60; i++) {
      const hx = (hash2(i, rv.y) * VIEW_W) | 0, hy = ry + 6 + ((hash2(rv.y, i) * (rv.h - 12)) | 0);
      x.fillStyle = C.waterLt; x.fillRect(hx, hy, 3, 1); x.fillRect(hx + 3, hy - 1, 3, 1);
    }
    x.fillStyle = C.foam;
    for (let i = 0; i < VIEW_W; i += 4) x.fillRect(i, ry + rv.h - 2 - ((i / 4) % 2), 3, 1);
    x.fillStyle = C.sand; x.fillRect(0, ry + rv.h, VIEW_W, 4);
    x.fillStyle = C.dirtDk; x.fillRect(0, ry + rv.h + 4, VIEW_W, 1);
    for (const br of rv.bridges) {
      const [bc, bx] = canvas(br.w + 6, rv.h + 18);
      bx.fillStyle = '#6c4020'; bx.fillRect(3, 0, br.w, rv.h + 18);
      for (let yy = 1; yy < rv.h + 18; yy += 4) { bx.fillStyle = '#b87c44'; bx.fillRect(3, yy, br.w, 3); bx.fillStyle = '#d89c5c'; bx.fillRect(3, yy, br.w, 1); }
      bx.fillStyle = '#4c2c14'; bx.fillRect(0, 0, 3, rv.h + 18); bx.fillRect(br.w + 3, 0, 3, rv.h + 18);
      bx.fillStyle = '#8c5c30'; for (let yy = 0; yy < rv.h + 18; yy += 10) { bx.fillRect(0, yy, 3, 3); bx.fillRect(br.w + 3, yy, 3, 3); }
      x.fillStyle = 'rgba(0,0,40,0.35)'; x.fillRect(br.x + 2, ry + 2, br.w + 6, rv.h);
      x.drawImage(outline(bc), br.x - 4, ry - 10);
    }
  }
  // helipads
  for (const h of LEVEL.helipads) {
    if (h.y < y0 - 30 || h.y > y0 + CH + 30) continue;
    const hy = h.y - y0;
    const [pc, px] = canvas(44, 46);
    px.fillStyle = '#7c786c'; px.fillRect(0, 2, 44, 44);
    px.fillStyle = '#a8a49c'; px.fillRect(0, 0, 44, 42);
    px.fillStyle = '#c8c4bc'; px.fillRect(0, 0, 44, 2);
    px.strokeStyle = '#f8d030'; px.lineWidth = 2; px.beginPath(); px.arc(22, 21, 17, 0, 7); px.stroke();
    px.fillStyle = '#f8f8f0'; px.fillRect(14, 12, 3, 18); px.fillRect(27, 12, 3, 18); px.fillRect(17, 19, 10, 3);
    x.drawImage(outline(pc), h.x - 23, hy - 22);
  }
  // static blockers
  for (const b of LEVEL.blockers) {
    if (b.kind === 'water' || b.y + b.h < y0 - 8 || b.y > y0 + CH + 8) continue;
    const by = b.y - y0;
    if (b.kind === 'sandbag') drawSandbags(x, b, by);
    else {
      x.fillStyle = 'rgba(0,0,0,0.25)'; x.beginPath(); x.ellipse(b.x + b.w / 2 + 3, by + b.h + 1, b.w / 2, 4, 0, 0, 7); x.fill();
      x.drawImage(S.rock(b.w, b.h), b.x - 1, by - 3);
    }
  }
  // trees & bushes (anchor = trunk base)
  for (const d of LEVEL.deco) {
    if (d.y < y0 - 40 || d.y > y0 + CH + 40) continue;
    const img = S[d.kind] || S.tree;
    const dx = Math.round(d.x), dy = Math.round(d.y - y0);
    x.fillStyle = 'rgba(0,30,0,0.3)'; x.beginPath(); x.ellipse(dx + 3, dy, img.width / 2 - 2, 4, 0, 0, 7); x.fill();
    x.drawImage(img, dx - (img.width >> 1), dy - img.height + 2);
  }
  return c;
}

export function initRender() { S = buildSprites(); }

export function drawTerrain(ctx, camY) {
  if (curTheme !== LEVEL.theme) { chunks.clear(); curTheme = LEVEL.theme; C = THEMES[curTheme] || THEMES[0]; }
  const first = Math.floor(camY / CH), last = Math.floor((camY + VIEW_H) / CH);
  for (let ci = first; ci <= last; ci++) {
    if (ci < 0 || ci * CH > LEVEL_LEN) continue;
    let c = chunks.get(ci);
    if (!c) { c = buildChunk(ci); chunks.set(ci, c); if (chunks.size > 12) chunks.delete(chunks.keys().next().value); }
    ctx.drawImage(c, 0, Math.round(ci * CH - camY));
  }
}

// white silhouettes for hit flashes
const whiteCache = new Map();
function white(img) {
  let w = whiteCache.get(img);
  if (!w) {
    const [c, x] = canvas(img.width, img.height);
    x.drawImage(img, 0, 0); x.globalCompositeOperation = 'source-in'; x.fillStyle = '#fff'; x.fillRect(0, 0, img.width, img.height);
    w = c; whiteCache.set(img, w);
  }
  return w;
}
const blit = (ctx, img, x, y, hit) => ctx.drawImage(hit ? white(img) : img, Math.round(x - img.width / 2), Math.round(y - img.height / 2));
const shadow = (ctx, x, y, rx, ry) => { ctx.fillStyle = 'rgba(0,20,0,0.32)'; ctx.beginPath(); ctx.ellipse(Math.round(x), Math.round(y), rx, ry, 0, 0, 7); ctx.fill(); };
function barrel(ctx, x, y, a, len, w, col) {
  const ex = x + Math.cos(a) * len, ey = y + Math.sin(a) * len;
  ctx.lineCap = 'butt';
  ctx.strokeStyle = OUT; ctx.lineWidth = w + 2; ctx.beginPath(); ctx.moveTo(x, y); ctx.lineTo(ex + Math.cos(a), ey + Math.sin(a)); ctx.stroke();
  ctx.strokeStyle = col; ctx.lineWidth = w; ctx.beginPath(); ctx.moveTo(x, y); ctx.lineTo(ex, ey); ctx.stroke();
}

export function drawHelis(ctx, camY, now, padAnim) {
  LEVEL.helipads.forEach((h, i) => {
    const y = h.y - camY;
    if (y < -60 || y > VIEW_H + 50) return;
    const anim = padAnim[i] || 0;
    const lift = anim > 0 ? Math.sin((1 - anim / 2.4) * Math.PI) * 26 : 0;
    const hx = h.x, hy = y - 2 - lift;
    shadow(ctx, hx + 2 + lift * 0.3, y + 6, 10 - lift * 0.1, 5);
    blit(ctx, S.heli, hx, hy + 4);
    const fast = anim > 0;
    const ra = now * (fast ? 0.035 : 0.006);
    ctx.fillStyle = fast ? 'rgba(40,40,48,0.25)' : 'rgba(40,40,48,0.12)';
    ctx.beginPath(); ctx.arc(hx, hy - 2, 19, 0, 7); ctx.fill();
    ctx.lineCap = 'round';
    for (let k = 0; k < 2; k++) {
      const a = ra + k * Math.PI / 2, ca = Math.cos(a), sa = Math.sin(a);
      ctx.strokeStyle = OUT; ctx.lineWidth = 3; ctx.beginPath(); ctx.moveTo(hx - ca * 19, hy - 2 - sa * 19); ctx.lineTo(hx + ca * 19, hy - 2 + sa * 19); ctx.stroke();
      ctx.strokeStyle = '#5c5c68'; ctx.lineWidth = 1; ctx.beginPath(); ctx.moveTo(hx - ca * 18, hy - 2 - sa * 18); ctx.lineTo(hx + ca * 18, hy - 2 + sa * 18); ctx.stroke();
    }
    ctx.fillStyle = OUT; ctx.fillRect(Math.round(hx) - 2, Math.round(hy) - 4, 4, 4);
    ctx.fillStyle = '#a8a8b0'; ctx.fillRect(Math.round(hx) - 1, Math.round(hy) - 3, 2, 2);
  });
}

export function drawEnemy(ctx, e, camY, now) {
  const [id, type, ex, ey, a, hpf, hit, shield] = e;
  const x = Math.round(ex), y = Math.round(ey - camY);
  if (y < -110 || y > VIEW_H + 60) return;
  switch (type) {
    case T.soldier: {
      const f = ((now / 150 + id) | 0) % 2;
      shadow(ctx, x, y + 5, 4, 2);
      const img = (hit ? S.soldierHit : S.soldier)[f];
      ctx.save(); ctx.translate(x, y); if (Math.cos(a) < 0) ctx.scale(-1, 1);
      ctx.drawImage(img, -Math.floor(img.width / 2), -8); ctx.restore();
      break;
    }
    case T.bossTurret:
      if (LEVEL.theme === 1) { // gun mounted on the war machine
        blit(ctx, S.bossGun, x, y, hit);
        barrel(ctx, x, y, a, 13, 4, '#3c3c48');
        ctx.fillStyle = hit ? '#fff' : '#f84838'; ctx.fillRect(x - 1, y - 1, 3, 3);
        break;
      }
    // falls through
    case T.turret: {
      shadow(ctx, x + 2, y + 7, 11, 4);
      blit(ctx, S.bunker, x, y, hit);
      barrel(ctx, x, y - 1, a, 12, 3, type === T.bossTurret ? '#a84030' : '#6c6c78');
      ctx.fillStyle = OUT; ctx.fillRect(x - 3, y - 4, 6, 6);
      ctx.fillStyle = hit ? '#fff' : type === T.bossTurret ? '#d85c44' : '#9c9cac'; ctx.fillRect(x - 2, y - 3, 4, 4);
      break;
    }
    case T.tank: {
      shadow(ctx, x + 2, y + 11, 13, 4);
      blit(ctx, S.tankBody, x, y, hit);
      barrel(ctx, x, y, a, 15, 3, '#5c2418');
      blit(ctx, S.tankTop, x, y, hit);
      break;
    }
    case T.prison: {
      shadow(ctx, x + 2, y + 14, 18, 4);
      blit(ctx, S.prison, x, y + 1, hit);
      if (((now / 280 + id) | 0) % 2) { ctx.fillStyle = '#f8c088'; ctx.fillRect(x - 3, y + 6, 2, 2); ctx.fillRect(x + 2, y + 5, 2, 2); }
      break;
    }
    case T.boss2: {
      const img = S.warMachine;
      ctx.fillStyle = 'rgba(0,0,0,0.3)'; ctx.fillRect(x - 58, y + 28, 120, 5);
      ctx.drawImage(hit ? white(img) : img, x - (img.width >> 1), y - 30);
      // tread animation
      const f = ((now / 90) | 0) % 2;
      ctx.fillStyle = '#7c7c88'; for (const tx of [x - 60, x + 43]) for (let k = -26 + f * 2; k < 28; k += 4) ctx.fillRect(tx + 3, y + k, 12, 1);
      const pulse = (Math.sin(now / 140) + 1) / 2;
      ctx.fillStyle = OUT; ctx.beginPath(); ctx.arc(x, y - 6, 9, 0, 7); ctx.fill();
      ctx.fillStyle = `rgb(${190 + pulse * 60 | 0},${30 + pulse * 50 | 0},40)`; ctx.beginPath(); ctx.arc(x, y - 6, 7, 0, 7); ctx.fill();
      if (shield) { ctx.strokeStyle = `rgba(140,210,255,${0.45 + pulse * 0.45})`; ctx.lineWidth = 2; ctx.beginPath(); ctx.arc(x, y - 6, 12 + pulse * 2, 0, 7); ctx.stroke(); }
      break;
    }
    case T.boss: {
      const img = LEVEL.theme === 2 ? S.fortressSnow : S.fortress;
      ctx.fillStyle = 'rgba(0,0,0,0.3)'; ctx.fillRect(x - img.width / 2 + 4, y + 50, img.width - 4, 6);
      ctx.drawImage(hit ? white(img) : img, x - (img.width >> 1), y - 46);
      const pulse = (Math.sin(now / 140) + 1) / 2;
      const cy = y - 12;
      ctx.fillStyle = OUT; ctx.beginPath(); ctx.arc(x, cy, 12, 0, 7); ctx.fill();
      ctx.fillStyle = `rgb(${190 + pulse * 60 | 0},${30 + pulse * 50 | 0},40)`; ctx.beginPath(); ctx.arc(x, cy, 10, 0, 7); ctx.fill();
      ctx.fillStyle = '#f8c0a8'; ctx.fillRect(x - 5, cy - 6, 4, 3);
      if (shield) {
        ctx.strokeStyle = `rgba(140,210,255,${0.45 + pulse * 0.45})`; ctx.lineWidth = 2;
        ctx.beginPath(); ctx.arc(x, cy, 16 + pulse * 2, 0, 7); ctx.stroke();
      }
      break;
    }
  }
}

export function drawPow(ctx, w, camY, now) {
  const [id, x, y, flash] = w;
  const f = ((now / 140 + id) | 0) % 2;
  const img = flash && ((now / 120) | 0) % 2 ? S.powFlash[f] : S.pow[f];
  const sy = y - camY;
  shadow(ctx, x, sy + 5, 4, 2);
  ctx.drawImage(img, Math.round(x) - (img.width >> 1), Math.round(sy) - 8);
}

export function drawItem(ctx, it, camY, now) {
  const [id, type, x, y, blink] = it;
  if (blink && ((now / 100) | 0) % 2) return;
  const bob = Math.round(Math.sin(now / 200 + id) * 1.5);
  const sy = y - camY;
  shadow(ctx, x, sy + 6, 5, 2);
  const img = S.items[type] || S.items[0];
  ctx.drawImage(img, Math.round(x - img.width / 2), Math.round(sy - img.height / 2 - 2 + bob));
  if (((now / 60 + id * 7) | 0) % 14 === 0) { ctx.fillStyle = '#fff'; ctx.fillRect(Math.round(x) + 3, Math.round(sy) - 7 + bob, 2, 2); }
}

export function itemIcon(type) { return S.items[type] || S.items[0]; }

export function drawJeep(ctx, slot, x, y, a, camY, flags) {
  const sy = y - camY;
  shadow(ctx, x + 3, sy + 5, 12, 8);
  const n = 16, rot = a + Math.PI / 2;
  const idx = ((Math.round(rot / (Math.PI * 2 / n)) % n) + n) % n;
  const blink = flags.invuln && ((performance.now() / 90) | 0) % 2;
  const img = (blink ? S.jeepWhite : S.jeep[slot])[idx];
  ctx.drawImage(img, Math.round(x - img.width / 2), Math.round(sy - img.height / 2));
  if (flags.shield) {
    const t = performance.now() / 120, r = 16 + Math.sin(t) * 1.2;
    ctx.strokeStyle = flags.shield <= 2 && ((t | 0) % 2) ? 'rgba(160,220,255,0.3)' : 'rgba(160,220,255,0.85)';
    ctx.lineWidth = 1.5; ctx.beginPath(); ctx.arc(Math.round(x), Math.round(sy), r, 0, 7); ctx.stroke();
    ctx.fillStyle = 'rgba(160,220,255,0.15)'; ctx.fill();
  }
  if (flags.carry > 0) {
    const bx = Math.round(x) - 6, by = Math.round(sy) - 24;
    ctx.fillStyle = OUT; ctx.fillRect(bx - 1, by - 1, 14, 9);
    ctx.fillStyle = '#f8f8f0'; ctx.fillRect(bx, by, 12, 7);
    ctx.fillStyle = OUT; ctx.fillRect(bx + 5, by + 7, 2, 2);
    ctx.font = 'bold 7px monospace'; ctx.textAlign = 'center'; ctx.fillText(flags.carry, Math.round(x), by + 6);
  }
  if (flags.self) {
    ctx.fillStyle = OUT; ctx.fillRect(Math.round(x) - 3, Math.round(sy) + 15, 7, 4);
    ctx.fillStyle = slot === 0 ? '#a8e870' : '#a0d0ff'; ctx.fillRect(Math.round(x) - 2, Math.round(sy) + 16, 5, 2);
  }
}

export function drawBullet(ctx, b, camY) {
  const [, kind, bx, by, z, a = 0] = b;
  const x = Math.round(bx), y = Math.round(by - camY);
  switch (kind) {
    case B.mg: ctx.fillStyle = OUT; ctx.fillRect(x - 2, y - 2, 4, 4); ctx.fillStyle = '#fff070'; ctx.fillRect(x - 1, y - 1, 2, 2); break;
    case B.big:
      ctx.fillStyle = OUT; ctx.beginPath(); ctx.arc(x, y, 3.5, 0, 7); ctx.fill();
      ctx.fillStyle = '#f8a020'; ctx.beginPath(); ctx.arc(x, y, 2.5, 0, 7); ctx.fill();
      ctx.fillStyle = '#fff8c0'; ctx.fillRect(x - 1, y - 1, 2, 2); break;
    case B.grenade: {
      const gz = Math.round(z);
      shadow(ctx, x, y + 1, 2, 1);
      ctx.fillStyle = OUT; ctx.fillRect(x - 3, y - gz - 3, 6, 6);
      ctx.fillStyle = '#4c6c2c'; ctx.fillRect(x - 2, y - gz - 2, 4, 4);
      ctx.fillStyle = '#8cc05c'; ctx.fillRect(x - 2, y - gz - 2, 2, 2); break;
    }
    case B.missile: {
      const ca = Math.cos(a), sa = Math.sin(a);
      ctx.fillStyle = 'rgba(255,190,90,0.7)'; ctx.fillRect(Math.round(x - ca * 6) - 1, Math.round(y - sa * 6) - 1, 3, 3);
      ctx.strokeStyle = OUT; ctx.lineWidth = 4; ctx.beginPath(); ctx.moveTo(x - ca * 4, y - sa * 4); ctx.lineTo(x + ca * 3, y + sa * 3); ctx.stroke();
      ctx.strokeStyle = '#f8f8f0'; ctx.lineWidth = 2; ctx.beginPath(); ctx.moveTo(x - ca * 3, y - sa * 3); ctx.lineTo(x + ca * 2, y + sa * 2); ctx.stroke();
      ctx.fillStyle = '#f84838'; ctx.fillRect(Math.round(x + ca * 2), Math.round(y + sa * 2), 1, 1);
      break;
    }
    case B.homing: {
      const ca = Math.cos(a), sa = Math.sin(a);
      ctx.fillStyle = 'rgba(255,200,120,0.6)'; ctx.fillRect(Math.round(x - ca * 6) - 1, Math.round(y - sa * 6) - 1, 2, 2);
      ctx.fillStyle = 'rgba(200,200,200,0.4)'; ctx.fillRect(Math.round(x - ca * 10) - 1, Math.round(y - sa * 10) - 1, 2, 2);
      ctx.strokeStyle = OUT; ctx.lineWidth = 4; ctx.beginPath(); ctx.moveTo(x - ca * 4, y - sa * 4); ctx.lineTo(x + ca * 3, y + sa * 3); ctx.stroke();
      ctx.strokeStyle = '#78e0a8'; ctx.lineWidth = 2; ctx.beginPath(); ctx.moveTo(x - ca * 3, y - sa * 3); ctx.lineTo(x + ca * 2, y + sa * 2); ctx.stroke();
      ctx.fillStyle = '#f84838'; ctx.fillRect(Math.round(x + ca * 2), Math.round(y + sa * 2), 1, 1);
      break;
    }
    case B.laser: {
      const ca = Math.cos(a), sa = Math.sin(a);
      ctx.lineCap = 'round';
      ctx.strokeStyle = 'rgba(80,220,255,0.45)'; ctx.lineWidth = 5; ctx.beginPath(); ctx.moveTo(x - ca * 18, y - sa * 18); ctx.lineTo(x, y); ctx.stroke();
      ctx.strokeStyle = '#d8fcff'; ctx.lineWidth = 2; ctx.beginPath(); ctx.moveTo(x - ca * 16, y - sa * 16); ctx.lineTo(x, y); ctx.stroke();
      break;
    }
    case B.ebullet:
      ctx.fillStyle = OUT; ctx.beginPath(); ctx.arc(x, y, 3, 0, 7); ctx.fill();
      ctx.fillStyle = '#f84838'; ctx.beginPath(); ctx.arc(x, y, 2, 0, 7); ctx.fill();
      ctx.fillStyle = '#fff'; ctx.fillRect(x - 1, y - 1, 1, 1); break;
    case B.eshell:
      ctx.fillStyle = OUT; ctx.beginPath(); ctx.arc(x, y, 4.5, 0, 7); ctx.fill();
      ctx.fillStyle = '#f8a020'; ctx.beginPath(); ctx.arc(x, y, 3.5, 0, 7); ctx.fill();
      ctx.fillStyle = '#f84838'; ctx.beginPath(); ctx.arc(x + 1, y + 1, 2, 0, 7); ctx.fill();
      ctx.fillStyle = '#fff'; ctx.fillRect(x - 2, y - 2, 2, 1); break;
  }
}

// ---------- particles (cartoon puffs with outlines) ----------
const parts = [];
export function spawnExplosion(x, y, size) {
  const n = [4, 8, 12, 30][size], sp = [30, 50, 70, 110][size], rad = [4, 6, 8, 10][size];
  for (let i = 0; i < n; i++) {
    const a = Math.random() * 7, v = sp * (0.3 + Math.random() * 0.7);
    parts.push({ x, y, vx: Math.cos(a) * v, vy: Math.sin(a) * v - 10, life: 0.35 + Math.random() * (0.25 + size * 0.15), t: 0, kind: 'puff', s: rad * (0.6 + Math.random() * 0.6) });
  }
  parts.push({ x, y, vx: 0, vy: 0, life: 0.18, t: 0, kind: 'flash', s: [10, 16, 22, 50][size] });
  if (size >= 1) for (let i = 0; i < 4 + size * 3; i++) {
    const a = Math.random() * 7, v = 60 + Math.random() * 60;
    parts.push({ x, y, vx: Math.cos(a) * v, vy: Math.sin(a) * v - 40, g: 160, life: 0.6, t: 0, kind: 'debris', s: 2 });
  }
}
export function spawnSpark(x, y) {
  for (let i = 0; i < 3; i++) { const a = Math.random() * 7; parts.push({ x, y, vx: Math.cos(a) * 50, vy: Math.sin(a) * 50, life: 0.15, t: 0, kind: 'spark', s: 1 }); }
}
export function spawnText(x, y, text, color = '#fff') { parts.push({ x, y, vx: 0, vy: -22, life: 1.1, t: 0, kind: 'text', text, color }); }
export function spawnSplat(x, y) {
  parts.push({ x, y, vx: 0, vy: 0, life: 0.5, t: 0, kind: 'stars', s: 1 });
  parts.push({ x, y, vx: 0, vy: 0, life: 6, t: 0, kind: 'splat', s: 1 });
}

export function drawParticles(ctx, camY, dt) {
  for (let i = parts.length - 1; i >= 0; i--) {
    const p = parts[i];
    p.t += dt; if (p.t >= p.life) { parts.splice(i, 1); continue; }
    if (p.g) p.vy += p.g * dt;
    p.x += p.vx * dt; p.y += p.vy * dt;
    if (!p.g) { p.vx *= 0.9; p.vy *= 0.9; }
    const k = p.t / p.life, x = Math.round(p.x), y = Math.round(p.y - camY);
    if (p.kind === 'puff') {
      const r = Math.max(1, p.s * (k < 0.2 ? 0.6 + k * 2 : 1 - (k - 0.2) * 0.6));
      const col = k < 0.25 ? '#fff8c0' : k < 0.5 ? '#f8b030' : k < 0.75 ? '#e86030' : '#8c8480';
      ctx.fillStyle = OUT; ctx.beginPath(); ctx.arc(x, y, r + 1, 0, 7); ctx.fill();
      ctx.fillStyle = col; ctx.beginPath(); ctx.arc(x, y, r, 0, 7); ctx.fill();
      ctx.fillStyle = 'rgba(255,255,255,0.45)'; ctx.fillRect(x - (r >> 1), y - (r >> 1), Math.max(1, r >> 1), Math.max(1, r >> 2));
    } else if (p.kind === 'flash') {
      ctx.fillStyle = `rgba(255,250,220,${1 - k})`; ctx.beginPath(); ctx.arc(x, y, p.s * (0.5 + k), 0, 7); ctx.fill();
    } else if (p.kind === 'debris') { ctx.fillStyle = OUT; ctx.fillRect(x - 1, y - 1, 3, 3); ctx.fillStyle = '#8c5c30'; ctx.fillRect(x, y, 1, 1); }
    else if (p.kind === 'spark') { ctx.fillStyle = '#fff6a0'; ctx.fillRect(x, y, 2, 2); }
    else if (p.kind === 'splat') { ctx.fillStyle = `rgba(90,60,30,${0.5 * (1 - k)})`; ctx.beginPath(); ctx.ellipse(x, y + 2, 5, 2, 0, 0, 7); ctx.fill(); }
    else if (p.kind === 'stars') {
      for (let s = 0; s < 3; s++) {
        const a = s * 2.1 + k * 6, sx = x + Math.cos(a) * 6, sy = y - 6 - k * 6 + Math.sin(a) * 2;
        ctx.fillStyle = '#f8e048'; ctx.fillRect(Math.round(sx) - 1, Math.round(sy), 3, 1); ctx.fillRect(Math.round(sx), Math.round(sy) - 1, 1, 3);
      }
    } else if (p.kind === 'text') {
      ctx.globalAlpha = 1 - k * k; ctx.font = 'bold 9px monospace'; ctx.textAlign = 'center';
      ctx.fillStyle = OUT;
      for (const [ox, oy] of [[-1, 0], [1, 0], [0, -1], [0, 1], [1, 1]]) ctx.fillText(p.text, x + ox, y + oy);
      ctx.fillStyle = p.color; ctx.fillText(p.text, x, y); ctx.globalAlpha = 1;
    }
  }
}
export function clearParticles() { parts.length = 0; }

// small health bar above every enemy (bosses use the big bar in the HUD)
const BAR = { [T.soldier]: [10, 13], [T.turret]: [16, 15], [T.bossTurret]: [16, 15], [T.tank]: [20, 17], [T.prison]: [24, 18] };
export function drawHpBar(ctx, e, camY) {
  const spec = BAR[e[1]];
  if (!spec) return;
  const [w, up] = spec, f = Math.max(0, Math.min(1, e[5]));
  const x = Math.round(e[2] - w / 2), y = Math.round(e[3] - camY - up);
  if (y < -4 || y > VIEW_H) return;
  ctx.fillStyle = OUT; ctx.fillRect(x - 1, y - 1, w + 2, 4);
  ctx.fillStyle = '#4c1c14'; ctx.fillRect(x, y, w, 2);
  ctx.fillStyle = f > 0.55 ? '#58d848' : f > 0.28 ? '#f8d030' : '#f84838';
  ctx.fillRect(x, y, Math.max(1, Math.round(w * f)), 2);
}
