// Hand-made skins drawn at device resolution (same API as render.js):
//   "pastel": warm, soft pastel colours with thick soft brown outlines and round cute critters
//   "doodle": pen sketch + crayon hatching on ruled notebook paper
import { VIEW_W, VIEW_H, LEVEL_LEN } from '../../shared/constants.js';
import { LEVEL } from '../../shared/level.js';
import { hash2 } from '../../shared/physics.js';
import { T, B } from '../../shared/entities.js';
export { spawnExplosion, spawnSpark, spawnText, spawnSplat, drawParticles, clearParticles } from './render.js';

const CH = 256;
const chunks = new Map();
let K = 2, curTheme = -1, P = null, STYLE = 'pastel';
export function setStyle(st) { if (st !== STYLE) { STYLE = st; chunks.clear(); curTheme = -1; } }

const PALETTES = {
  pastel: [
    { ground: '#c9dfa6', ground2: '#c2d99c', blobLt: '#d6e8b8', blobDk: '#b8d294', tuft: '#9cb878',
      road: '#f0d7a8', roadEdge: '#b98d68', roadDk: '#e2c494', water: '#a6d8e8', waterLt: '#c8eaf2', bank: '#f4e2bc',
      floor: '#e8d8bc', floorLine: '#cdb898', flowers: ['#ffffff', '#ffe2a0', '#ffc2c8'] },
    { ground: '#f4d39c', ground2: '#f0cc92', blobLt: '#f9e0b2', blobDk: '#e9c286', tuft: '#d6aa70',
      road: '#e9bc84', roadEdge: '#b98d68', roadDk: '#ddb07a', water: '#a6d8e8', waterLt: '#c8eaf2', bank: '#f9e6c2',
      floor: '#ecd3aa', floorLine: '#d2b48a', flowers: ['#f2c49a', '#e8b080', '#fff0d8'] },
    { ground: '#f2f1f4', ground2: '#ecebf1', blobLt: '#ffffff', blobDk: '#e2e0ea', tuft: '#c8c4d6',
      road: '#dfdbe6', roadEdge: '#a99cae', roadDk: '#d4cfdc', water: '#a6cfe8', waterLt: '#cfe6f4', bank: '#ece8f0',
      floor: '#d6d2dc', floorLine: '#bdb6c6', flowers: ['#ffd6e0', '#ffffff', '#d6e6ff'] },
  ],
  doodle: [
    { tint: '#7cc35a', road: '#d9a35a', water: '#4a90e2', floor: '#bdbdbd', tuft: '#5a9e40', flowers: ['#e53935', '#fdd835', '#ec407a'] },
    { tint: '#e8b04a', road: '#c8823a', water: '#4a90e2', floor: '#d6b07a', tuft: '#c08a3a', flowers: ['#8d6e63', '#a1887f', '#ff7043'] },
    { tint: '#90b8e0', road: '#9aa8ba', water: '#3a78c8', floor: '#9aa4b2', tuft: '#7a9cc8', flowers: ['#64b5f6', '#90caf9', '#b39ddb'] },
  ],
};
const INK = { pastel: '#7a5640', doodle: '#2b2b33' };


export function initRender() {}
export function setScale(k) { if (k !== K) { K = k; chunks.clear(); } }
export function resetTerrain() { chunks.clear(); curTheme = -1; }

// ---------- helpers ----------
function rr(c, x, y, w, h, r) {
  r = Math.min(r, w / 2, h / 2);
  c.beginPath();
  c.moveTo(x + r, y); c.arcTo(x + w, y, x + w, y + h, r); c.arcTo(x + w, y + h, x, y + h, r);
  c.arcTo(x, y + h, x, y, r); c.arcTo(x, y, x + w, y, r); c.closePath();
}
// --- style-aware painting: every filled shape also gets the style's outline ---
const hatchCache = new Map();
function hatch(c, col) {
  let cv = hatchCache.get(col);
  if (!cv) {
    cv = document.createElement('canvas'); cv.width = cv.height = 16;
    const x = cv.getContext('2d');
    x.strokeStyle = col; x.lineWidth = 2.2; x.lineCap = 'round';
    for (let k = -16; k < 32; k += 5) { x.beginPath(); x.moveTo(k, 16); x.lineTo(k + 16, 0); x.stroke(); }
    hatchCache.set(col, cv);
  }
  const p = c.createPattern(cv, 'repeat');
  try { p.setTransform(new DOMMatrix([1 / K, 0, 0, 1 / K, 0, 0])); } catch {}
  return p;
}
function paint(c, col, outline = true) {
  const plain = typeof col !== 'string' || col.startsWith('rgb');
  if (STYLE === 'doodle' && !plain && col !== '#fff' && col !== '#ffffff') {
    c.save(); c.globalAlpha = 0.3; c.fillStyle = col; c.fill(); c.restore();   // light crayon wash
    c.fillStyle = hatch(c, col); c.fill();                                     // crayon strokes
  } else { c.fillStyle = col; c.fill(); }
  if (outline && !(typeof col === 'string' && col.startsWith('rgba'))) inkLine(c);
}
function inkLine(c) {
  c.save();
  c.strokeStyle = INK[STYLE]; c.lineJoin = 'round'; c.lineCap = 'round';
  if (STYLE === 'doodle') {
    c.lineWidth = 0.8; c.stroke();
    c.translate(0.45, -0.35); c.globalAlpha = 0.55; c.stroke();   // second, slightly offset pen pass
  } else { c.lineWidth = 1.1; c.stroke(); }
  c.restore();
}
const fillRR = (c, x, y, w, h, r, col) => { rr(c, x, y, w, h, r); paint(c, col); };
const circle = (c, x, y, r, col) => { c.beginPath(); c.arc(x, y, r, 0, Math.PI * 2); paint(c, col); };
const shadow = (c, x, y, rx, ry, a = 0.22) => { c.beginPath(); c.ellipse(x, y, rx, ry, 0, 0, Math.PI * 2); c.fillStyle = STYLE === 'doodle' ? `rgba(60,60,80,${a * 0.6})` : `rgba(150,100,70,${a * 0.9})`; c.fill(); };
// flat colours instead of gradients (both styles are flat-shaded)
const hex = h => [parseInt(h.slice(1, 3), 16), parseInt(h.slice(3, 5), 16), parseInt(h.slice(5, 7), 16)];
function mix(a, b) {
  if (!a.startsWith('#') || !b.startsWith('#') || a.length < 7 || b.length < 7) return a.startsWith('#') ? a : b;
  const A = hex(a), B = hex(b);
  return '#' + A.map((v, i) => Math.round(v * 0.55 + B[i] * 0.45).toString(16).padStart(2, '0')).join('');
}
function vgrad(c, y0, y1, a, b) { return mix(a, b); }
function rgrad(c, x, y, r, a, b) { return mix(a.startsWith('rgb(') ? '#ff6a50' : a, b); }

// ---------- terrain ----------
function tree(c, x, y, kind) {
  if (kind === 'tree') {
    shadow(c, x + 3, y, 11, 4.5);
    fillRR(c, x - 2.5, y - 10, 5, 10, 2, '#8a5a32');
    circle(c, x, y - 17, 11, '#3f9a3e'); circle(c, x - 4, y - 19, 8, '#55b24c'); circle(c, x + 4, y - 15, 7, '#3a8c38');
    circle(c, x - 5, y - 22, 3.5, 'rgba(255,255,255,0.25)');
  } else if (kind === 'bush') {
    shadow(c, x + 2, y, 8, 3);
    circle(c, x - 3, y - 5, 5, '#4ea446'); circle(c, x + 3, y - 5, 5, '#459a3e'); circle(c, x, y - 7, 5.5, '#5cb852');
  } else if (kind === 'cactus') {
    shadow(c, x + 2, y, 6, 2.5);
    fillRR(c, x - 3, y - 22, 6, 22, 3, '#3ea25a');
    fillRR(c, x - 9, y - 16, 4, 9, 2, '#3ea25a'); fillRR(c, x - 9, y - 9, 7, 3.5, 1.7, '#3ea25a');
    fillRR(c, x + 5, y - 19, 4, 9, 2, '#3ea25a'); fillRR(c, x + 2, y - 12, 7, 3.5, 1.7, '#3ea25a');
    fillRR(c, x - 1.5, y - 21, 1.5, 19, 0.7, 'rgba(255,255,255,0.3)');
    circle(c, x, y - 23, 2, '#ff7fa0');
  } else if (kind === 'drybush') {
    shadow(c, x + 2, y, 7, 2.5);
    c.strokeStyle = '#a77a44'; c.lineWidth = 1.2; c.lineCap = 'round';
    for (let i = 0; i < 7; i++) { const a = -Math.PI + i * Math.PI / 6; c.beginPath(); c.moveTo(x, y - 1); c.lineTo(x + Math.cos(a) * 7, y - 2 + Math.sin(a) * 6); c.stroke(); }
  } else if (kind === 'pine') {
    shadow(c, x + 3, y, 9, 3.5);
    fillRR(c, x - 2, y - 7, 4, 7, 1.5, '#7a4e2c');
    for (const [ty, w, h] of [[-12, 10, 10], [-19, 8, 9], [-25, 6, 8]]) {
      c.beginPath(); c.moveTo(x, y + ty - h); c.lineTo(x + w, y + ty + 2); c.lineTo(x - w, y + ty + 2); c.closePath(); c.fillStyle = '#2f7a5c'; c.fill();
      c.beginPath(); c.moveTo(x, y + ty - h); c.lineTo(x + w * 0.5, y + ty - h * 0.45); c.lineTo(x - w * 0.5, y + ty - h * 0.45); c.closePath(); c.fillStyle = '#ffffff'; c.fill();
    }
  } else if (kind === 'snowbush') {
    shadow(c, x + 2, y, 8, 3);
    circle(c, x, y - 4, 6, '#c7d6e8'); circle(c, x - 1, y - 6, 5, '#ffffff');
  }
}

// notebook-paper terrain for the doodle style
function buildDoodleChunk(ci) {
  const th = PALETTES.doodle[LEVEL.theme] || PALETTES.doodle[0];
  const cv = document.createElement('canvas');
  cv.width = VIEW_W * K; cv.height = CH * K;
  const c = cv.getContext('2d');
  c.scale(K, K);
  const y0 = ci * CH;
  c.translate(0, -y0);
  c.fillStyle = '#fbf8ee'; c.fillRect(0, y0, VIEW_W, CH);
  // crayon patches tint the paper with the stage colour
  for (let gy = Math.floor((y0 - 80) / 60); gy <= Math.floor((y0 + CH + 80) / 60); gy++) for (let gx = 0; gx < Math.ceil(VIEW_W / 60); gx++) {
    const h = hash2(gx + 50, gy);
    if (h < 0.35) continue;
    c.beginPath(); c.ellipse(gx * 60 + hash2(gx, gy + 9) * 50, gy * 60 + hash2(gx + 3, gy) * 50, 16 + h * 20, 9 + h * 10, h * 3, 0, Math.PI * 2);
    c.save(); c.globalAlpha = 0.18; c.fillStyle = th.tint; c.fill(); c.restore();
  }
  // ruled lines + margin
  c.strokeStyle = 'rgba(80,140,220,0.32)'; c.lineWidth = 0.6;
  for (let yy = Math.ceil(y0 / 14) * 14; yy < y0 + CH; yy += 14) { c.beginPath(); c.moveTo(0, yy); c.lineTo(VIEW_W, yy); c.stroke(); }
  c.strokeStyle = 'rgba(230,80,80,0.45)'; c.beginPath(); c.moveTo(16, y0); c.lineTo(16, y0 + CH); c.stroke();
  // little grass ticks / pebbles / snowflakes
  for (let i = 0; i < 26; i++) {
    const tx = hash2(i, ci) * VIEW_W, ty = y0 + hash2(ci, i) * CH;
    c.strokeStyle = th.tuft; c.lineWidth = 0.9; c.beginPath(); c.moveTo(tx - 2, ty - 2); c.lineTo(tx, ty + 1); c.lineTo(tx + 2, ty - 2); c.stroke();
    if (LEVEL.theme === 0 && i % 4 === 0) { c.fillStyle = th.flowers[i % 3]; c.beginPath(); c.arc(tx + 6, ty + 2, 1.4, 0, 7); c.fill(); }
  }
  if (y0 < 440) {
    c.beginPath(); c.rect(0, 0, VIEW_W, 420); paint(c, th.floor, false);
    c.strokeStyle = INK.doodle; c.lineWidth = 0.6;
    for (let yy = 0; yy <= 420; yy += 24) { c.beginPath(); c.moveTo(0, yy); c.lineTo(VIEW_W, yy + 0.8); c.stroke(); }
  }
  for (const r of LEVEL.roads) {
    if (r.y1 < y0 - 10 || r.y0 > y0 + CH + 10) continue;
    c.beginPath(); c.rect(r.x, r.y0, r.w, r.y1 - r.y0); paint(c, th.road, false);
    c.strokeStyle = INK.doodle; c.lineWidth = 0.9;
    for (const ex of [r.x, r.x + r.w]) { c.beginPath(); c.moveTo(ex, Math.max(r.y0, y0 - 4)); for (let yy = Math.max(r.y0, y0 - 4); yy < Math.min(r.y1, y0 + CH + 4); yy += 12) c.lineTo(ex + (hash2(ex, yy) - 0.5) * 1.6, yy); c.stroke(); }
  }
  for (const rv of LEVEL.rivers) {
    if (rv.y + rv.h < y0 - 20 || rv.y > y0 + CH + 20) continue;
    const segs = []; let cx = 0;
    for (const g of [...rv.bridges].sort((a, b) => a.x - b.x)) { if (g.x > cx) segs.push([cx, g.x]); cx = g.x + g.w; }
    if (cx < VIEW_W) segs.push([cx, VIEW_W]);
    if (rv.kind === 'water') {
      c.beginPath(); c.rect(0, rv.y, VIEW_W, rv.h); paint(c, th.water);
      c.strokeStyle = '#2a5ea8'; c.lineWidth = 0.9;
      for (let x = 8; x < VIEW_W; x += 26) { const yy = rv.y + 10 + ((x / 26) % 3) * 12; c.beginPath(); c.moveTo(x, yy); c.lineTo(x + 5, yy - 4); c.lineTo(x + 10, yy); c.stroke(); }
      for (const br of rv.bridges) {
        c.beginPath(); c.rect(br.x, rv.y - 8, br.w, rv.h + 16); paint(c, '#a86a30');
        c.strokeStyle = INK.doodle; c.lineWidth = 0.7;
        for (let yy = rv.y - 4; yy < rv.y + rv.h + 8; yy += 6) { c.beginPath(); c.moveTo(br.x, yy); c.lineTo(br.x + br.w, yy + 0.6); c.stroke(); }
      }
    } else {
      for (const [a, b] of segs) {
        c.beginPath(); c.rect(a, rv.y, b - a, rv.h); paint(c, rv.kind === 'ridge' ? '#c8783a' : '#8a96a8');
        c.strokeStyle = INK.doodle; c.lineWidth = 0.7;
        for (let xx = a + 6; xx < b - 2; xx += rv.kind === 'ridge' ? 11 : 16) { c.beginPath(); c.moveTo(xx, rv.y + rv.h - 1); c.lineTo(xx + (rv.kind === 'ridge' ? 4 : 0), rv.y + rv.h * 0.45); c.stroke(); }
      }
    }
  }
  for (const h of LEVEL.helipads) {
    if (h.y < y0 - 40 || h.y > y0 + CH + 40) continue;
    c.beginPath(); c.arc(h.x, h.y, 20, 0, 7); paint(c, '#bdbdbd');
    c.fillStyle = INK.doodle; c.font = 'bold 18px cursive'; c.textAlign = 'center'; c.textBaseline = 'middle'; c.fillText('H', h.x, h.y + 1);
  }
  for (const b of LEVEL.blockers) {
    if (b.kind === 'water' || b.kind === 'ridge' || b.kind === 'wall' || b.y + b.h < y0 - 10 || b.y > y0 + CH + 10) continue;
    if (b.kind === 'sandbag') { c.beginPath(); c.rect(b.x, b.y, b.w, b.h); paint(c, '#e0c080'); c.strokeStyle = INK.doodle; c.lineWidth = 0.6; for (let i = b.x + 6; i < b.x + b.w; i += 7) { c.beginPath(); c.moveTo(i, b.y); c.lineTo(i, b.y + b.h); c.stroke(); } }
    else { c.beginPath(); c.ellipse(b.x + b.w / 2, b.y + b.h / 2, b.w / 2, b.h / 2 + 1, 0, 0, 7); paint(c, '#9e9e9e'); }
  }
  for (const d of LEVEL.deco) { if (d.y < y0 - 40 || d.y > y0 + CH + 40) continue; tree(c, d.x, d.y, d.kind); }
  return cv;
}

function buildChunk(ci) {
  if (STYLE === 'doodle') return buildDoodleChunk(ci);
  const th = PALETTES.pastel[LEVEL.theme] || PALETTES.pastel[0];
  const cv = document.createElement('canvas');
  cv.width = VIEW_W * K; cv.height = CH * K;
  const c = cv.getContext('2d');
  c.scale(K, K);
  const y0 = ci * CH;
  c.translate(0, -y0); // draw in world coordinates
  // ground
  c.fillStyle = th.ground; c.fillRect(0, y0, VIEW_W, CH);
  for (let gy = Math.floor((y0 - 64) / 48); gy <= Math.floor((y0 + CH + 64) / 48); gy++) {
    for (let gx = 0; gx < 6; gx++) {
      const h = hash2(gx + 50, gy), bx = gx * 48 + hash2(gx, gy + 9) * 40, by = gy * 48 + hash2(gx + 3, gy) * 40;
      c.beginPath(); c.ellipse(bx, by, 18 + h * 22, 10 + h * 12, h * 3, 0, Math.PI * 2);
      c.fillStyle = h > 0.5 ? th.blobLt : th.blobDk; c.globalAlpha = 0.55; c.fill(); c.globalAlpha = 1;
      // tufts and flowers
      for (let k = 0; k < 3; k++) {
        const tx = gx * 48 + hash2(gx * 7 + k, gy) * 46, ty = gy * 48 + hash2(gx, gy * 5 + k) * 46;
        c.strokeStyle = th.tuft; c.lineWidth = 1; c.lineCap = 'round';
        c.beginPath(); c.moveTo(tx - 2, ty - 2); c.lineTo(tx, ty + 1); c.lineTo(tx + 2, ty - 2); c.stroke();
        if (LEVEL.theme === 0 && hash2(tx | 0, ty | 0) > 0.8) circle(c, tx + 5, ty + 3, 1.6, th.flowers[k % 3]);
      }
    }
  }
  // boss courtyard floor
  if (y0 < 440) {
    c.fillStyle = th.floor; c.fillRect(0, 0, VIEW_W, 420);
    c.strokeStyle = th.floorLine; c.lineWidth = 0.8;
    for (let yy = 0; yy <= 420; yy += 20) { c.beginPath(); c.moveTo(0, yy); c.lineTo(VIEW_W, yy); c.stroke(); }
    for (let yy = 0; yy < 420; yy += 20) for (let xx = (yy / 20) % 2 ? 0 : 20; xx < VIEW_W; xx += 40) { c.beginPath(); c.moveTo(xx, yy); c.lineTo(xx, yy + 20); c.stroke(); }
    c.fillStyle = 'rgba(0,0,0,0.12)'; c.fillRect(0, 416, VIEW_W, 6);
  }
  // roads
  for (const r of LEVEL.roads) {
    if (r.y1 < y0 - 10 || r.y0 > y0 + CH + 10) continue;
    fillRR(c, r.x - 2, r.y0, r.w + 4, r.y1 - r.y0, 8, th.roadEdge);
    fillRR(c, r.x, r.y0, r.w, r.y1 - r.y0, 7, th.road);
    c.strokeStyle = th.roadDk; c.lineWidth = 2; c.setLineDash([6, 6]);
    for (const ox of [7, r.w - 7]) { c.beginPath(); c.moveTo(r.x + ox, r.y0); c.lineTo(r.x + ox, r.y1); c.stroke(); }
    c.setLineDash([]);
  }
  // barrier bands
  for (const rv of LEVEL.rivers) {
    if (rv.y + rv.h < y0 - 20 || rv.y > y0 + CH + 20) continue;
    const segs = [];
    let cx = 0;
    for (const g of [...rv.bridges].sort((a, b) => a.x - b.x)) { if (g.x > cx) segs.push([cx, g.x]); cx = g.x + g.w; }
    if (cx < VIEW_W) segs.push([cx, VIEW_W]);
    if (rv.kind === 'water') {
      c.fillStyle = th.bank; c.fillRect(0, rv.y - 6, VIEW_W, rv.h + 12);
      c.fillStyle = vgrad(c, rv.y, rv.y + rv.h, th.water, th.waterLt); c.fillRect(0, rv.y, VIEW_W, rv.h);
      c.strokeStyle = 'rgba(255,255,255,0.45)'; c.lineWidth = 1.2; c.lineCap = 'round';
      for (let i = 0; i < 26; i++) {
        const wx = hash2(i, rv.y) * VIEW_W, wy = rv.y + 6 + hash2(rv.y, i) * (rv.h - 12);
        c.beginPath(); c.arc(wx, wy + 3, 4, Math.PI * 1.15, Math.PI * 1.85); c.stroke();
      }
      c.fillStyle = 'rgba(255,255,255,0.7)'; c.fillRect(0, rv.y + rv.h - 2, VIEW_W, 1.5);
      for (const br of rv.bridges) {
        c.fillStyle = 'rgba(0,0,40,0.25)'; c.fillRect(br.x + 3, rv.y, br.w, rv.h + 4);
        fillRR(c, br.x - 2, rv.y - 9, br.w + 4, rv.h + 18, 3, '#8a5a32');
        for (let yy = rv.y - 8; yy < rv.y + rv.h + 8; yy += 5) fillRR(c, br.x, yy, br.w, 4, 1, '#c08850');
        fillRR(c, br.x - 4, rv.y - 10, 3, rv.h + 20, 1.5, '#5e3a1e'); fillRR(c, br.x + br.w + 1, rv.y - 10, 3, rv.h + 20, 1.5, '#5e3a1e');
      }
    } else {
      for (const [a, b] of segs) {
        const ridge = rv.kind === 'ridge', face = ridge ? 12 : 9;
        c.fillStyle = 'rgba(0,0,0,0.18)'; rr(c, a + 2, rv.y + 4, b - a, rv.h, 5); c.fill();
        fillRR(c, a, rv.y, b - a, rv.h, ridge ? 7 : 3, ridge ? '#a8643a' : '#6f7886');
        fillRR(c, a, rv.y, b - a, rv.h - face, ridge ? 7 : 3, ridge ? '#cf8a52' : '#b7c0cc');
        if (ridge) for (let i = a + 4; i < b - 4; i += 9) circle(c, i + hash2(i, rv.y) * 4, rv.y + 6 + hash2(rv.y, i) * (rv.h - face - 10), 2.5, 'rgba(255,230,190,0.35)');
        else {
          c.fillStyle = '#ffffff'; c.fillRect(a + 2, rv.y + 1, b - a - 4, 2);
          for (const ex of [a > 0 ? a : -99, b < VIEW_W ? b - 6 : -99]) {
            if (ex < 0) continue;
            for (let j = 0; j < rv.h; j += 6) { c.fillStyle = (j / 6) % 2 ? '#2a2a2a' : '#ffcc33'; c.fillRect(ex, rv.y + j, 6, Math.min(6, rv.h - j)); }
          }
        }
      }
    }
  }
  // helipads
  for (const h of LEVEL.helipads) {
    if (h.y < y0 - 40 || h.y > y0 + CH + 40) continue;
    shadow(c, h.x + 2, h.y + 3, 24, 22, 0.15);
    circle(c, h.x, h.y, 22, '#9b9a94'); circle(c, h.x, h.y, 20, '#b4b3ac');
    c.strokeStyle = '#ffcc33'; c.lineWidth = 2; c.beginPath(); c.arc(h.x, h.y, 16, 0, Math.PI * 2); c.stroke();
    c.fillStyle = '#ffffff'; c.font = 'bold 18px sans-serif'; c.textAlign = 'center'; c.textBaseline = 'middle'; c.fillText('H', h.x, h.y + 1);
  }
  // static blockers
  for (const b of LEVEL.blockers) {
    if (b.kind === 'water' || b.kind === 'ridge' || b.kind === 'wall' || b.y + b.h < y0 - 10 || b.y > y0 + CH + 10) continue;
    if (b.kind === 'sandbag') {
      c.fillStyle = 'rgba(0,0,0,0.15)'; c.fillRect(b.x + 2, b.y + b.h, b.w, 3);
      for (let i = 0; i < b.w; i += 8) { fillRR(c, b.x + i, b.y - 1, 8, b.h + 2, 3.5, '#b9955c'); fillRR(c, b.x + i + 1, b.y - 1, 6, 3.5, 1.7, '#e3c58a'); }
    } else {
      shadow(c, b.x + b.w / 2 + 3, b.y + b.h + 1, b.w / 2, 4, 0.2);
      c.beginPath(); c.ellipse(b.x + b.w / 2, b.y + b.h / 2 + 1, b.w / 2, b.h / 2 + 1, 0, 0, Math.PI * 2);
      c.fillStyle = rgrad(c, b.x + b.w / 2, b.y + b.h / 2, b.w / 2, '#c5c2cc', '#7c7987'); c.fill();
    }
  }
  // decoration
  for (const d of LEVEL.deco) {
    if (d.y < y0 - 40 || d.y > y0 + CH + 40) continue;
    tree(c, d.x, d.y, d.kind);
  }
  return cv;
}

export function drawTerrain(ctx, camY) {
  if (curTheme !== LEVEL.theme) { chunks.clear(); curTheme = LEVEL.theme; }
  const first = Math.floor(camY / CH), last = Math.floor((camY + VIEW_H) / CH);
  for (let ci = first; ci <= last; ci++) {
    if (ci < 0 || ci * CH > LEVEL_LEN) continue;
    let cv = chunks.get(ci);
    if (!cv) { cv = buildChunk(ci); chunks.set(ci, cv); if (chunks.size > 10) chunks.delete(chunks.keys().next().value); }
    ctx.drawImage(cv, 0, ci * CH - camY, VIEW_W, CH);
  }
}

// ---------- dynamic objects ----------
const hitFlash = (c, x, y, r, hit) => { if (hit) { c.globalAlpha = 0.6; circle(c, x, y, r, '#ffffff'); c.globalAlpha = 1; } };
function barrel(c, x, y, a, len, w, col) {
  c.save(); c.translate(x, y); c.rotate(a);
  fillRR(c, 0, -w / 2 - 0.8, len + 0.8, w + 1.6, w / 2, 'rgba(0,0,0,0.45)');
  fillRR(c, 0, -w / 2, len, w, w / 2, col);
  c.restore();
}

export function drawHelis(ctx, camY, now, padAnim) {
  LEVEL.helipads.forEach((h, i) => {
    const y = h.y - camY;
    if (y < -60 || y > VIEW_H + 50) return;
    const anim = padAnim[i] || 0, lift = anim > 0 ? Math.sin((1 - anim / 2.4) * Math.PI) * 26 : 0;
    const hx = h.x, hy = y - 2 - lift;
    shadow(ctx, hx + 2 + lift * 0.3, y + 6, 10, 5);
    fillRR(ctx, hx - 1.5, hy + 4, 3, 17, 1.5, '#3f7e3a'); fillRR(ctx, hx - 6, hy + 18, 12, 3, 1.5, '#3f7e3a');
    fillRR(ctx, hx - 10, hy - 4, 2, 15, 1, '#555a66'); fillRR(ctx, hx + 8, hy - 4, 2, 15, 1, '#555a66');
    ctx.beginPath(); ctx.ellipse(hx, hy + 2, 7, 10, 0, 0, Math.PI * 2); paint(ctx, rgrad(ctx, hx, hy + 2, 10, '#7cc66a', '#2f7a34'));
    ctx.beginPath(); ctx.ellipse(hx, hy - 4, 5, 4, 0, 0, Math.PI * 2); paint(ctx, '#a6e4ff');
    circle(ctx, hx - 1.5, hy - 5.5, 1.3, '#ffffff');
    const fast = anim > 0, ra = now * (fast ? 0.035 : 0.006);
    circle(ctx, hx, hy - 2, 19, fast ? 'rgba(40,40,48,0.18)' : 'rgba(40,40,48,0.08)');
    ctx.strokeStyle = 'rgba(50,50,60,0.85)'; ctx.lineWidth = 2; ctx.lineCap = 'round';
    for (let k = 0; k < 2; k++) {
      const a = ra + k * Math.PI / 2, ca = Math.cos(a) * 18, sa = Math.sin(a) * 18;
      ctx.beginPath(); ctx.moveTo(hx - ca, hy - 2 - sa); ctx.lineTo(hx + ca, hy - 2 + sa); ctx.stroke();
    }
    circle(ctx, hx, hy - 2, 2, '#555a66');
  });
}

export function drawEnemy(ctx, e, camY, now) {
  const [id, type, ex, ey, a, hpf, hit, shield] = e;
  const x = ex, y = ey - camY;
  if (y < -110 || y > VIEW_H + 60) return;
  switch (type) {
    case T.soldier: {
      const bob = Math.sin(now / 90 + id) * 0.6;
      shadow(ctx, x, y + 5, 4.5, 2);
      if (STYLE === 'doodle') { stickman(ctx, x, y + bob, a, hit ? '#ffffff' : '#e53935', true, now, id); break; }
      // pastel: chubby little bear soldier with a red helmet and a toy rifle
      ctx.save(); ctx.translate(x, y + bob); ctx.rotate(a);
      fillRR(ctx, 2, -1, 7, 2, 1, '#8a7a70');
      ctx.restore();
      circle(ctx, x, y + 1.5 + bob, 4.4, hit ? '#fff' : '#a99ad0');
      circle(ctx, x - 3, y - 5.2 + bob, 1.6, hit ? '#fff' : '#c79a72');
      circle(ctx, x + 3, y - 5.2 + bob, 1.6, hit ? '#fff' : '#c79a72');
      circle(ctx, x, y - 2.5 + bob, 3.8, hit ? '#fff' : '#d9ae86');
      ctx.beginPath(); ctx.arc(x, y - 3.2 + bob, 4, Math.PI * 1.05, Math.PI * 1.95); paint(ctx, hit ? '#fff' : '#ec7a6a');
      ctx.fillStyle = INK.pastel; ctx.fillRect(x - 1.8, y - 2.2 + bob, 0.9, 0.9); ctx.fillRect(x + 0.9, y - 2.2 + bob, 0.9, 0.9);
      break;
    }
    case T.bossTurret:
      if (LEVEL.theme === 1) {
        circle(ctx, x, y, 9, '#4d4f5c'); circle(ctx, x, y, 7, rgrad(ctx, x, y, 7, '#9a9cac', '#5a5c6a'));
        barrel(ctx, x, y, a, 14, 4, '#3b3d48');
        circle(ctx, x, y, 2.5, '#ff5340'); hitFlash(ctx, x, y, 9, hit);
        break;
      }
    // falls through
    case T.turret: {
      shadow(ctx, x + 2, y + 7, 12, 4);
      circle(ctx, x, y, 11, '#8e7448');
      for (let i = 0; i < 10; i++) {
        const t = i / 10 * Math.PI * 2;
        ctx.save(); ctx.translate(x + Math.cos(t) * 8.5, y + Math.sin(t) * 8.5); ctx.rotate(t + Math.PI / 2);
        fillRR(ctx, -3.5, -2.2, 7, 4.4, 2, '#d4b47a'); ctx.restore();
      }
      circle(ctx, x, y, 5.5, '#4a4a52');
      barrel(ctx, x, y, a, 12, 3.4, type === T.bossTurret ? '#b5483a' : '#6a6c78');
      circle(ctx, x, y, 3.2, type === T.bossTurret ? '#e05a46' : '#9ea0ae');
      hitFlash(ctx, x, y, 11, hit);
      break;
    }
    case T.tank: {
      shadow(ctx, x + 2, y + 11, 13, 4);
      for (const tx of [-11, 6]) {
        fillRR(ctx, x + tx, y - 11, 5, 22, 2, '#2e2f36');
        ctx.fillStyle = '#5a5c66';
        for (let k = -9 + ((now / 80) | 0) % 3; k < 10; k += 3) ctx.fillRect(x + tx + 0.8, y + k, 3.4, 1);
      }
      rr(ctx, x - 7, y - 10, 14, 20, 3); paint(ctx, vgrad(ctx, y - 10, y + 10, '#d0704a', '#8c3c28'));
      barrel(ctx, x, y, a, 15, 3.4, '#6e2c1c');
      circle(ctx, x, y, 5.5, rgrad(ctx, x, y, 5.5, '#e48a64', '#94402a'));
      hitFlash(ctx, x, y, 12, hit);
      break;
    }
    case T.prison: {
      shadow(ctx, x + 2, y + 14, 18, 4);
      fillRR(ctx, x - 15, y - 4, 30, 17, 2, '#9a6a3a');
      ctx.fillStyle = 'rgba(0,0,0,0.12)'; for (let k = 0; k < 4; k++) ctx.fillRect(x - 15, y - 1 + k * 4, 30, 1);
      rr(ctx, x - 18, y - 15, 36, 13, 3); paint(ctx, vgrad(ctx, y - 15, y - 2, '#f07050', '#b23a2a'));
      fillRR(ctx, x - 6, y + 1, 12, 12, 1.5, '#2a2420');
      ctx.fillStyle = '#c8c8d2'; for (let k = -4.5; k <= 4.5; k += 3) ctx.fillRect(x + k, y + 1, 1, 12);
      if (((now / 280 + id) | 0) % 2) { circle(ctx, x - 2, y + 6, 1.4, '#f2c49a'); circle(ctx, x + 2.5, y + 5, 1.4, '#f2c49a'); }
      fillRR(ctx, x - 14, y + 1, 7, 5, 1, '#fff2c0');
      hitFlash(ctx, x, y, 17, hit);
      break;
    }
    case T.boss: {
      const snow = LEVEL.theme === 2;
      ctx.fillStyle = 'rgba(0,0,0,0.22)'; rr(ctx, x - 90, y - 40, 186, 96, 10); ctx.fill();
      rr(ctx, x - 92, y - 46, 184, 70, 10); paint(ctx, vgrad(ctx, y - 46, y + 24, snow ? '#d5dbe4' : '#c2bbae', snow ? '#a3abb8' : '#968e80'));
      rr(ctx, x - 92, y + 14, 184, 36, 8); paint(ctx, snow ? '#737c8a' : '#6c6458');
      for (let k = -88; k < 88; k += 14) fillRR(ctx, x + k, y - 51, 9, 7, 2, snow ? '#ffffff' : '#d8d1c4');
      for (const tx of [-80, 80]) { circle(ctx, x + tx, y - 22, 15, snow ? '#c3cad6' : '#b0a898'); circle(ctx, x + tx, y - 24, 12, snow ? '#e9eef5' : '#cfc7b8'); fillRR(ctx, x + tx - 2, y - 32, 4, 12, 2, '#d23c30'); }
      fillRR(ctx, x - 18, y + 20, 36, 30, 6, '#3a2c20');
      ctx.fillStyle = '#8a5a32'; for (let k = -15; k < 16; k += 6) ctx.fillRect(x + k, y + 23, 3.5, 27);
      const pulse = (Math.sin(now / 140) + 1) / 2;
      circle(ctx, x, y - 12, 16, '#3a3632');
      circle(ctx, x, y - 12, 11, rgrad(ctx, x, y - 12, 11, `rgb(255,${150 + pulse * 80 | 0},120)`, '#c02a1e'));
      if (shield) { ctx.strokeStyle = `rgba(120,200,255,${0.45 + pulse * 0.45})`; ctx.lineWidth = 2.5; ctx.beginPath(); ctx.arc(x, y - 12, 18 + pulse * 2, 0, Math.PI * 2); ctx.stroke(); }
      if (hit) { ctx.globalAlpha = 0.35; fillRR(ctx, x - 92, y - 46, 184, 96, 10, '#fff'); ctx.globalAlpha = 1; }
      break;
    }
    case T.boss2: {
      ctx.fillStyle = 'rgba(0,0,0,0.22)'; rr(ctx, x - 58, y - 26, 122, 62, 8); ctx.fill();
      for (const tx of [-61, 43]) {
        fillRR(ctx, x + tx, y - 30, 18, 60, 5, '#2e2f36');
        ctx.fillStyle = '#5a5c66'; for (let k = -27 + ((now / 70) | 0) % 4; k < 28; k += 4) ctx.fillRect(x + tx + 2, y + k, 14, 1.5);
      }
      rr(ctx, x - 44, y - 30, 88, 54, 8); paint(ctx, vgrad(ctx, y - 30, y + 24, '#d2a462', '#8a6030'));
      fillRR(ctx, x - 44, y + 18, 88, 12, 5, '#5a3c1c');
      for (const px of [-14, -3, 8]) fillRR(ctx, x + px, y + 21, 6, 6, 1.5, '#1e1a16');
      for (let k = -40; k < 40; k += 8) { ctx.fillStyle = (k / 8) % 2 ? '#2a2a2a' : '#ffcc33'; ctx.fillRect(x + k, y - 24, 8, 3); }
      const pulse = (Math.sin(now / 140) + 1) / 2;
      circle(ctx, x, y - 6, 9, '#3a3632'); circle(ctx, x, y - 6, 6.5, rgrad(ctx, x, y - 6, 6.5, `rgb(255,${150 + pulse * 80 | 0},120)`, '#c02a1e'));
      if (shield) { ctx.strokeStyle = `rgba(120,200,255,${0.45 + pulse * 0.45})`; ctx.lineWidth = 2; ctx.beginPath(); ctx.arc(x, y - 6, 12 + pulse * 2, 0, Math.PI * 2); ctx.stroke(); }
      if (hit) { ctx.globalAlpha = 0.35; fillRR(ctx, x - 60, y - 30, 120, 60, 8, '#fff'); ctx.globalAlpha = 1; }
      break;
    }
  }
}

// stick figure for the doodle style
function stickman(c, x, y, a, col, gun, now, id) {
  const wave = ((now / 140 + id) | 0) % 2;
  c.save(); c.strokeStyle = INK.doodle; c.lineWidth = 0.9; c.lineCap = 'round';
  c.beginPath(); c.moveTo(x, y - 2); c.lineTo(x, y + 3);
  c.moveTo(x, y + 3); c.lineTo(x - 2.5, y + 7); c.moveTo(x, y + 3); c.lineTo(x + 2.5, y + 7);
  if (gun) { c.moveTo(x - 3, y); c.lineTo(x + 3, y); }
  else { c.moveTo(x, y); c.lineTo(x - 4, wave ? y - 5 : y - 2); c.moveTo(x, y); c.lineTo(x + 4, wave ? y - 2 : y - 5); }
  c.stroke();
  if (gun) { c.lineWidth = 1.6; c.beginPath(); c.moveTo(x + 2, y); c.lineTo(x + 2 + Math.cos(a) * 6, y + Math.sin(a) * 6); c.stroke(); }
  c.restore();
  circle(c, x, y - 4.5, 2.6, col);
}
export function drawPow(ctx, w, camY, now) {
  const [id, x, wy, flash] = w;
  const y = wy - camY, wave = ((now / 140 + id) | 0) % 2;
  const lit = flash && ((now / 120) | 0) % 2;
  shadow(ctx, x, y + 5, 4, 2);
  if (STYLE === 'doodle') { stickman(ctx, x, y, 0, lit ? '#fdd835' : '#ffffff', false, now, id); return; }
  // pastel: round bunny hostage waving its paws
  ctx.save(); ctx.strokeStyle = INK.pastel; ctx.lineWidth = 1.1; ctx.lineCap = 'round';
  ctx.beginPath(); ctx.moveTo(x - 3, y); ctx.lineTo(x - 5.5, wave ? y - 5 : y - 2); ctx.moveTo(x + 3, y); ctx.lineTo(x + 5.5, wave ? y - 2 : y - 5); ctx.stroke(); ctx.restore();
  circle(ctx, x, y + 1, 3.8, lit ? '#ffe28a' : '#ffffff');
  fillRR(ctx, x - 2.6, y - 11, 2, 6, 1, '#fff4f4'); fillRR(ctx, x + 0.6, y - 11, 2, 6, 1, '#fff4f4');
  circle(ctx, x, y - 3.5, 3.4, '#fff8f4');
  ctx.fillStyle = INK.pastel; ctx.fillRect(x - 1.6, y - 3.8, 0.9, 0.9); ctx.fillRect(x + 0.8, y - 3.8, 0.9, 0.9);
  ctx.fillStyle = '#ffb3b8'; ctx.fillRect(x - 2.6, y - 2.6, 1, 0.8); ctx.fillRect(x + 1.7, y - 2.6, 1, 0.8);
}

const ITEM_STYLE = [['#ff8a3c', '#d4561c', 'R'], ['#4aa8ff', '#1f6cd4', 'P'], ['#ff5a78', '#cc2848', '♥'], ['#9a6aff', '#6436cc', 'B'], ['#ffd23c', '#d49a10', 'W']];
function paintItem(c, x, y, type, s = 1) {
  const [a, b, ch] = ITEM_STYLE[type] || ITEM_STYLE[0];
  rr(c, x - 6 * s, y - 6 * s, 12 * s, 12 * s, 3.5 * s); paint(c, vgrad(c, y - 6 * s, y + 6 * s, a, b));
  c.strokeStyle = 'rgba(255,255,255,0.8)'; c.lineWidth = 1 * s; c.stroke();
  c.fillStyle = '#ffffff'; c.font = `bold ${8 * s}px ${STYLE === 'doodle' ? 'cursive' : 'sans-serif'}`; c.textAlign = 'center'; c.textBaseline = 'middle';
  c.fillText(ch, x, y + 0.5 * s);
}
export function drawItem(ctx, it, camY, now) {
  const [id, type, x, y, blink] = it;
  if (blink && ((now / 100) | 0) % 2) return;
  const bob = Math.sin(now / 200 + id) * 1.5, sy = y - camY;
  shadow(ctx, x, sy + 7, 5, 2);
  paintItem(ctx, x, sy - 2 + bob, type);
}
const iconCache = {};
export function itemIcon(type) {
  if (!iconCache[type]) {
    const cv = document.createElement('canvas'); cv.width = 56; cv.height = 56;
    paintItem(cv.getContext('2d'), 28, 28, type, 4);
    iconCache[type] = cv;
  }
  return iconCache[type];
}

const JEEP_COL = [['#8fe070', '#4fb83e', '#2f8a2a'], ['#8cc0ff', '#4a8ef0', '#2a5cb8']];
export function drawJeep(ctx, slot, x, y, a, camY, flags) {
  const sy = y - camY;
  shadow(ctx, x + 3, sy + 5, 12, 8);
  const blink = flags.invuln && ((performance.now() / 90) | 0) % 2;
  const [lt, mid, dk] = JEEP_COL[slot];
  ctx.save(); ctx.translate(x, sy); ctx.rotate(a + Math.PI / 2); ctx.scale(1.4, 1.4); // player jeep drawn 40% larger
  if (blink) ctx.globalAlpha = 0.45;
  for (const [wx, wy] of [[-8, -7], [4, -7], [-8, 3], [4, 3]]) fillRR(ctx, wx, wy, 4, 5.5, 1.5, '#26272e');
  rr(ctx, -6, -9, 12, 18, 3.5); paint(ctx, vgrad(ctx, -9, 9, lt, dk));
  fillRR(ctx, -4.5, -8, 9, 4, 1.8, 'rgba(255,255,255,0.3)');
  fillRR(ctx, -5, -3.5, 10, 3, 1.2, '#a6e4ff');
  fillRR(ctx, -4, 1, 3, 3.5, 1, '#9a5a30'); fillRR(ctx, 1, 1, 3, 3.5, 1, '#9a5a30');
  if (STYLE === 'pastel') { circle(ctx, -2.8, 0.2, 1, '#f2d8c0'); circle(ctx, -0.6, 0.2, 1, '#f2d8c0'); circle(ctx, -1.7, 2.2, 2.2, '#fff4ea'); }
  fillRR(ctx, -1.2, -14, 2.4, 10, 1.2, '#3a3c46');
  circle(ctx, 0, -3, 2, '#5a5c68');
  ctx.restore();
  ctx.globalAlpha = 1;
  if (flags.shield) {
    const t = performance.now() / 120;
    ctx.beginPath(); ctx.arc(x, sy, 17 + Math.sin(t) * 1.2, 0, Math.PI * 2);
    ctx.fillStyle = 'rgba(140,210,255,0.16)'; ctx.fill();
    ctx.strokeStyle = flags.shield <= 2 && ((t | 0) % 2) ? 'rgba(140,210,255,0.3)' : 'rgba(140,210,255,0.9)'; ctx.lineWidth = 1.5; ctx.stroke();
  }
  if (flags.carry > 0) {
    fillRR(ctx, x - 7, sy - 27, 14, 9, 3, '#ffffff');
    ctx.fillStyle = '#2a2a2a'; ctx.font = 'bold 7px sans-serif'; ctx.textAlign = 'center'; ctx.textBaseline = 'middle';
    ctx.fillText(flags.carry, x, sy - 22.3);
  }
  if (flags.self) fillRR(ctx, x - 3, sy + 16, 6, 2.4, 1.2, slot === 0 ? '#8fe070' : '#8cc0ff');
}

export function drawBullet(ctx, b, camY) {
  const [, kind, x, by, z, a = 0] = b;
  const y = by - camY;
  const glow = (r, col, core) => { circle(ctx, x, y, r * 1.9, col.replace('1)', '0.25)')); circle(ctx, x, y, r, core); };
  switch (kind) {
    case B.mg: glow(1.6, 'rgba(255,240,120,1)', '#fff6b0'); break;
    case B.big: glow(2.6, 'rgba(255,170,60,1)', '#ffd27a'); break;
    case B.missile: case B.homing: {
      ctx.save(); ctx.translate(x, y); ctx.rotate(a);
      circle(ctx, -6, 0, 2.5, 'rgba(255,190,90,0.45)');
      fillRR(ctx, -4, -1.6, 8, 3.2, 1.6, '#f4f4f4'); fillRR(ctx, 2, -1.6, 2.5, 3.2, 1.5, '#ff4a38');
      ctx.restore(); break;
    }
    case B.laser: {
      const ca = Math.cos(a), sa = Math.sin(a);
      ctx.lineCap = 'round';
      ctx.strokeStyle = 'rgba(80,220,255,0.35)'; ctx.lineWidth = 6; ctx.beginPath(); ctx.moveTo(x - ca * 18, y - sa * 18); ctx.lineTo(x, y); ctx.stroke();
      ctx.strokeStyle = '#e4fcff'; ctx.lineWidth = 2; ctx.beginPath(); ctx.moveTo(x - ca * 16, y - sa * 16); ctx.lineTo(x, y); ctx.stroke();
      break;
    }
    case B.grenade: circle(ctx, x, y - z, 2.5, '#4c6c2c'); break;
    case B.ebullet: glow(2.4, 'rgba(255,70,50,1)', '#ff5a44'); circle(ctx, x - 0.6, y - 0.6, 0.9, '#fff'); break;
    case B.eshell: glow(3.6, 'rgba(255,120,30,1)', '#ff8a2a'); circle(ctx, x + 0.6, y + 0.6, 2, '#e8402a'); circle(ctx, x - 1, y - 1, 1, '#fff'); break;
  }
}

const BAR = { [T.soldier]: [10, 13], [T.turret]: [18, 16], [T.bossTurret]: [18, 16], [T.tank]: [20, 18], [T.prison]: [26, 20] };
export function drawHpBar(ctx, e, camY) {
  const spec = BAR[e[1]];
  if (!spec) return;
  const [w, up] = spec, f = Math.max(0, Math.min(1, e[5]));
  const x = e[2] - w / 2, y = e[3] - camY - up;
  if (y < -4 || y > VIEW_H) return;
  fillRR(ctx, x - 0.8, y - 0.8, w + 1.6, 3.6, 1.8, 'rgba(0,0,0,0.55)');
  fillRR(ctx, x, y, Math.max(2, w * f), 2, 1, f > 0.55 ? '#5be04a' : f > 0.28 ? '#ffd23c' : '#ff4a38');
}
