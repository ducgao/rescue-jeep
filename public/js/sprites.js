// 16-bit style sprites (SNES-era cartoon look): 3-tone shading, dark outline, 3/4 top-down.
export const OUT = '#1c140c';

export function canvas(w, h) {
  const c = document.createElement('canvas');
  c.width = w; c.height = h;
  const x = c.getContext('2d');
  x.imageSmoothingEnabled = false;
  return [c, x];
}

export function grid(rows, pal) {
  const h = rows.length, w = rows[0].length;
  const [c, x] = canvas(w, h);
  for (let j = 0; j < h; j++) for (let i = 0; i < w; i++) {
    const ch = rows[j][i];
    if (ch === '.' || !pal[ch]) continue;
    x.fillStyle = pal[ch]; x.fillRect(i, j, 1, 1);
  }
  return c;
}

// 1px outline around opaque pixels (4-neighbour dilation)
export function outline(src, col = OUT) {
  const [sil, sx] = canvas(src.width, src.height);
  sx.drawImage(src, 0, 0);
  sx.globalCompositeOperation = 'source-in';
  sx.fillStyle = col; sx.fillRect(0, 0, src.width, src.height);
  const [c, x] = canvas(src.width + 2, src.height + 2);
  for (const [dx, dy] of [[0, 1], [2, 1], [1, 0], [1, 2]]) x.drawImage(sil, dx, dy);
  x.drawImage(src, 1, 1);
  return c;
}

// pre-rotated + outlined copies (outline after rotation keeps it crisp)
export function rotSet(src, n = 16) {
  const d = Math.ceil(Math.hypot(src.width, src.height)) + 1;
  const out = [];
  for (let i = 0; i < n; i++) {
    const [c, x] = canvas(d, d);
    x.translate(d / 2, d / 2); x.rotate(i * Math.PI * 2 / n);
    x.drawImage(src, -Math.floor(src.width / 2), -Math.floor(src.height / 2));
    // binarise alpha so the outline stays 1px
    const img = x.getImageData(0, 0, d, d), p = img.data;
    for (let k = 3; k < p.length; k += 4) p[k] = p[k] > 110 ? 255 : 0;
    x.putImageData(img, 0, 0);
    out.push(outline(c));
  }
  return out;
}

// ---------- characters ----------
const JEEP = [
  '......dbbbbbbbbd......',
  '....kkdhhhhhhhhdkk....',
  '...kkkbhhhhhhhhbkkk...',
  '...kkkbhhhhhhhhbkkk...',
  '...kkkbbbbbbbbbbkkk...',
  '....kkdbbbMMbbbdkk....',
  '......dbbbMMbbbd......',
  '......dwwwMMwwwd......',
  '......dwggMMwwwd......',
  '......dwwwMMwwwd......',
  '......rrrrMMrrrr......',
  '......bsssmmsssb......',
  '......bsssmmsssb......',
  '......bssssssssb......',
  '......bbbbbbbbbb......',
  '......bddddddddb......',
  '...kkkbbbbbbbbbbkkk...',
  '...kkkbddddddddbkkk...',
  '...kkkbbbbbbbbbbkkk...',
  '....kkbbbbbbbbbbkk....',
  '......dddddddddd......',
  '.......m......m.......',
];
const jeepPal = (h, b, d) => ({ h, b, d, k: '#2c2c34', w: '#78c8f0', g: '#e8fcff', r: '#5c5c64', s: '#a85a2c', m: '#3c3c44', M: '#7c7c88' });

const SOLDIER = [
  ['...hhh...', '..hHHHh..', '.hhhhhhh.', '.ssesess.', '..sssss..', '.uuUuuuu.', 'suuUuuuus', 's.uuuuu.s', '..bbbbb..', '..uu.uu..', '..kk.kk..'],
  ['...hhh...', '..hHHHh..', '.hhhhhhh.', '.ssesess.', '..sssss..', '.uuUuuuu.', 'suuUuuuus', 's.uuuuu.s', '..bbbbb..', '.uu...uu.', '.kk...kk.'],
];
const SOLDIER_PAL = { h: '#c83828', H: '#f87858', s: '#f8c088', e: '#201810', u: '#6c64a8', U: '#9c94d8', b: '#3c2c50', k: '#302020' };

const POW = [
  ['..bbbbb..', '.bbbbbbb.', '.sssssss.', '.ssesess.', '..sssss..', 's.wwwww.s', 'swwwwwwws', '..wwwww..', '..ppppp..', '..pp.pp..', '..kk.kk..'],
  ['s.bbbbb.s', 's.bbbbb.s', 's.sssss.s', 's.sesess.', 's.sssss.s', 'swwwwwwws', '.wwwwwww.', '..wwwww..', '..ppppp..', '.pp...pp.', '.kk...kk.'],
];
const POW_PAL = { b: '#6c3c1c', s: '#f8c088', e: '#201810', w: '#f8f8f0', p: '#4c70c8', k: '#302020' };

// ---------- props ----------
function makeTree(big) {
  const W = big ? 26 : 16, H = big ? 30 : 14;
  const [c, x] = canvas(W, H);
  if (big) {
    x.fillStyle = '#7c4a24'; x.fillRect(11, 19, 5, 10);
    x.fillStyle = '#a8683a'; x.fillRect(11, 19, 2, 10);
    x.fillStyle = '#4c2c14'; x.fillRect(15, 19, 1, 10);
  }
  const blob = (cx, cy, r, col) => { x.fillStyle = col; x.beginPath(); x.arc(cx, cy, r, 0, 7); x.fill(); };
  const cy = big ? 12 : 8, r = big ? 11 : 7, cx = W / 2;
  blob(cx, cy + 1, r, '#22702c');
  blob(cx - 3, cy - 1, r - 2, '#38963a');
  blob(cx + 3, cy, r - 3, '#38963a');
  blob(cx - 3, cy - 3, r - 5, '#62c04c');
  blob(cx - 5, cy - 5, big ? 3 : 2, '#a4e478');
  if (big) { x.fillStyle = '#22702c'; x.fillRect(cx + 2, cy + 4, 3, 2); x.fillRect(cx - 7, cy + 5, 2, 2); }
  return outline(threshold(c));
}
function threshold(c) {
  const x = c.getContext('2d'), img = x.getImageData(0, 0, c.width, c.height), p = img.data;
  for (let k = 3; k < p.length; k += 4) p[k] = p[k] > 100 ? 255 : 0;
  x.putImageData(img, 0, 0); return c;
}

function makeBunker() {
  // sandbag ring seen from 3/4 view
  const [c, x] = canvas(24, 22);
  x.fillStyle = '#5c4a2c'; x.beginPath(); x.ellipse(12, 12, 11, 9, 0, 0, 7); x.fill();
  for (let i = 0; i < 10; i++) {
    const a = i / 10 * Math.PI * 2, bx = 12 + Math.cos(a) * 9, by = 12 + Math.sin(a) * 7;
    x.fillStyle = '#b8945c'; x.fillRect(Math.round(bx) - 3, Math.round(by) - 2, 6, 5);
    x.fillStyle = '#e8cc8c'; x.fillRect(Math.round(bx) - 3, Math.round(by) - 2, 5, 2);
    x.fillStyle = '#86683c'; x.fillRect(Math.round(bx) - 3, Math.round(by) + 2, 6, 1);
  }
  x.fillStyle = '#3c3c44'; x.beginPath(); x.arc(12, 11, 5, 0, 7); x.fill();
  x.fillStyle = '#6c6c78'; x.beginPath(); x.arc(11, 10, 3, 0, 7); x.fill();
  return outline(threshold(c));
}

function makeTankBody() {
  const [c, x] = canvas(24, 24);
  // treads
  for (const tx of [0, 18]) {
    x.fillStyle = '#34343c'; x.fillRect(tx, 1, 6, 22);
    x.fillStyle = '#5c5c68'; for (let y = 2; y < 23; y += 3) x.fillRect(tx + 1, y, 4, 1);
  }
  // hull
  x.fillStyle = '#8c3c2c'; x.fillRect(5, 2, 14, 20);
  x.fillStyle = '#c85c3c'; x.fillRect(5, 2, 14, 4); x.fillRect(5, 2, 3, 20);
  x.fillStyle = '#5c2418'; x.fillRect(5, 19, 14, 3); x.fillRect(17, 2, 2, 20);
  x.fillStyle = '#f8c84c'; x.fillRect(11, 16, 2, 2);
  return outline(c);
}
function makeTurretTop() {
  const [c, x] = canvas(12, 12);
  x.fillStyle = '#6c2c20'; x.beginPath(); x.arc(6, 6, 5.5, 0, 7); x.fill();
  x.fillStyle = '#b4503a'; x.beginPath(); x.arc(5, 5, 3.5, 0, 7); x.fill();
  x.fillStyle = '#e88c6c'; x.fillRect(3, 3, 2, 2);
  return outline(threshold(c));
}

function makePrison() {
  // wooden hut: roof (top), front wall visible below it
  const [c, x] = canvas(34, 30);
  // roof
  x.fillStyle = '#a8382c'; x.fillRect(0, 0, 34, 14);
  for (let i = 0; i < 34; i += 4) { x.fillStyle = '#d85c44'; x.fillRect(i, 0, 2, 13); }
  x.fillStyle = '#f88c6c'; x.fillRect(0, 0, 34, 2);
  x.fillStyle = '#6c1c14'; x.fillRect(0, 12, 34, 2);
  // wall
  x.fillStyle = '#8c5c30'; x.fillRect(2, 14, 30, 16);
  for (let y = 15; y < 30; y += 4) { x.fillStyle = '#b07c44'; x.fillRect(2, y, 30, 2); }
  x.fillStyle = '#5c3818'; x.fillRect(2, 14, 30, 1);
  // barred door
  x.fillStyle = '#1c140c'; x.fillRect(11, 17, 12, 13);
  x.fillStyle = '#a8a8b0'; for (let i = 12; i < 23; i += 3) x.fillRect(i, 17, 1, 13);
  x.fillStyle = '#d8d8e0'; x.fillRect(11, 17, 12, 1); x.fillRect(11, 23, 12, 1);
  // "HELP" sign
  x.fillStyle = '#f8e0a0'; x.fillRect(3, 17, 7, 5); x.fillStyle = '#c83828'; x.fillRect(4, 19, 5, 1);
  return outline(c);
}

function makeFortress() {
  const W = 186, H = 96;
  const [c, x] = canvas(W, H);
  const topH = 64;
  // top surface (stone paving)
  x.fillStyle = '#9c9488'; x.fillRect(0, 6, W, topH - 6);
  for (let yy = 6; yy < topH; yy += 8) for (let xx = (yy / 8) % 2 ? 0 : 6; xx < W; xx += 12) {
    x.fillStyle = '#b8b0a4'; x.fillRect(xx, yy, 11, 1);
    x.fillStyle = '#7c746a'; x.fillRect(xx + 11, yy, 1, 8);
  }
  // battlements along the back
  for (let xx = 0; xx < W; xx += 12) {
    x.fillStyle = '#c4bcb0'; x.fillRect(xx, 0, 8, 4);
    x.fillStyle = '#847c70'; x.fillRect(xx, 4, 8, 3);
  }
  // front wall (visible face)
  x.fillStyle = '#6c6458'; x.fillRect(0, topH, W, H - topH);
  for (let yy = topH; yy < H; yy += 6) for (let xx = ((yy - topH) / 6) % 2 ? 0 : 8; xx < W; xx += 16) {
    x.fillStyle = '#847c70'; x.fillRect(xx, yy, 15, 1);
    x.fillStyle = '#4c463c'; x.fillRect(xx + 15, yy, 1, 6);
  }
  x.fillStyle = '#d4ccc0'; x.fillRect(0, topH, W, 1);
  // gate
  x.fillStyle = '#2c241c'; x.fillRect(W / 2 - 18, topH + 4, 36, H - topH - 4);
  x.fillStyle = '#7c4a24'; for (let xx = W / 2 - 16; xx < W / 2 + 18; xx += 6) x.fillRect(xx, topH + 6, 4, H - topH - 6);
  x.fillStyle = '#a8a8b0'; x.fillRect(W / 2 - 18, topH + 12, 36, 2); x.fillRect(W / 2 - 18, topH + 22, 36, 2);
  // corner towers
  for (const tx of [0, W - 22]) {
    x.fillStyle = '#b0a89c'; x.fillRect(tx, 0, 22, topH);
    x.fillStyle = '#d4ccc0'; x.fillRect(tx, 0, 22, 2); x.fillRect(tx, 0, 2, topH);
    x.fillStyle = '#5c564c'; x.fillRect(tx, topH, 22, H - topH);
    x.fillStyle = '#c83828'; x.fillRect(tx + 9, 18, 4, 14);
  }
  // core socket
  x.fillStyle = '#3c3830'; x.beginPath(); x.arc(W / 2, 34, 19, 0, 7); x.fill();
  x.fillStyle = '#5c564c'; x.beginPath(); x.arc(W / 2, 33, 16, 0, 7); x.fill();
  return outline(threshold(c));
}

function makeHeli() {
  const [c, x] = canvas(22, 34);
  // tail boom
  x.fillStyle = '#3c7c34'; x.fillRect(9, 16, 4, 16);
  x.fillStyle = '#5ca44c'; x.fillRect(9, 16, 2, 16);
  x.fillStyle = '#3c7c34'; x.fillRect(5, 29, 12, 3);
  // skids
  x.fillStyle = '#3c3c44'; x.fillRect(1, 4, 2, 16); x.fillRect(19, 4, 2, 16);
  x.fillRect(3, 7, 2, 1); x.fillRect(3, 16, 2, 1); x.fillRect(17, 7, 2, 1); x.fillRect(17, 16, 2, 1);
  // body
  x.fillStyle = '#2c6c2c'; x.beginPath(); x.ellipse(11, 11, 7, 10, 0, 0, 7); x.fill();
  x.fillStyle = '#4c9c44'; x.beginPath(); x.ellipse(10, 11, 5, 8, 0, 0, 7); x.fill();
  x.fillStyle = '#78c8f0'; x.beginPath(); x.ellipse(11, 5, 5, 4, 0, 0, 7); x.fill();
  x.fillStyle = '#e8fcff'; x.fillRect(8, 3, 2, 2);
  x.fillStyle = '#f8f8f0'; x.fillRect(9, 13, 4, 4); x.fillStyle = '#c83828'; x.fillRect(10, 13, 2, 4); x.fillRect(9, 14, 4, 2);
  return outline(threshold(c));
}

function makeRock(w, h) {
  const [c, x] = canvas(w, h + 4);
  x.fillStyle = '#5c5864'; x.beginPath(); x.ellipse(w / 2, h / 2 + 3, w / 2, h / 2, 0, 0, 7); x.fill();
  x.fillStyle = '#8c8898'; x.beginPath(); x.ellipse(w / 2 - 1, h / 2, w / 2 - 1, h / 2 - 1, 0, 0, 7); x.fill();
  x.fillStyle = '#b8b4c4'; x.beginPath(); x.ellipse(w / 2 - w / 6, h / 2 - h / 5, w / 5, h / 6, 0, 0, 7); x.fill();
  return outline(threshold(c));
}


// ---------- stage 2/3 props ----------
function makeCactus() {
  const [c, x] = canvas(16, 24);
  const g = '#3c9c4c', l = '#78d070', d = '#246c34';
  x.fillStyle = g; x.fillRect(6, 2, 5, 21); x.fillRect(1, 8, 3, 8); x.fillRect(12, 5, 3, 9);
  x.fillRect(3, 13, 3, 3); x.fillRect(10, 11, 3, 3);
  x.fillStyle = l; x.fillRect(7, 3, 1, 19); x.fillRect(2, 9, 1, 6); x.fillRect(13, 6, 1, 7);
  x.fillStyle = d; x.fillRect(10, 3, 1, 20);
  x.fillStyle = '#f8f0c0'; x.fillRect(8, 6, 1, 1); x.fillRect(8, 12, 1, 1); x.fillRect(9, 17, 1, 1);
  x.fillStyle = '#f87890'; x.fillRect(7, 1, 3, 2);
  return outline(c);
}
function makeDryBush() {
  const [c, x] = canvas(14, 10);
  x.fillStyle = '#8c6430'; x.beginPath(); x.ellipse(7, 6, 6, 4, 0, 0, 7); x.fill();
  x.strokeStyle = '#c8964c'; x.lineWidth = 1;
  for (let i = 0; i < 5; i++) { x.beginPath(); x.moveTo(7, 7); x.lineTo(2 + i * 2.5, 2 + (i % 2) * 2); x.stroke(); }
  return outline(threshold(c));
}
function makePine() {
  const [c, x] = canvas(20, 30);
  x.fillStyle = '#6c4424'; x.fillRect(8, 23, 4, 7);
  const tier = (y, w, h) => {
    x.fillStyle = '#1c5c44'; x.beginPath(); x.moveTo(10, y); x.lineTo(10 + w, y + h); x.lineTo(10 - w, y + h); x.fill();
    x.fillStyle = '#2c7c5c'; x.beginPath(); x.moveTo(10, y + 1); x.lineTo(10 + w - 3, y + h - 1); x.lineTo(10 - w + 1, y + h - 1); x.fill();
    x.fillStyle = '#ffffff'; x.beginPath(); x.moveTo(10, y); x.lineTo(10 + w * 0.5, y + h * 0.5); x.lineTo(10 - w * 0.5, y + h * 0.5); x.fill();
    x.fillStyle = '#d8e8f8'; x.fillRect(10 - w + 2, y + h - 2, w * 2 - 4, 2);
  };
  tier(13, 9, 11); tier(7, 7, 9); tier(1, 5, 8);
  return outline(threshold(c));
}
function makeSnowBush() {
  const [c, x] = canvas(16, 10);
  x.fillStyle = '#a8bcd8'; x.beginPath(); x.ellipse(8, 6, 7, 4, 0, 0, 7); x.fill();
  x.fillStyle = '#f8fcff'; x.beginPath(); x.ellipse(7, 4, 6, 3, 0, 0, 7); x.fill();
  x.fillStyle = '#2c7c5c'; x.fillRect(3, 6, 2, 2); x.fillRect(11, 6, 2, 1);
  return outline(threshold(c));
}

function snowCapped(src) {
  const [c, x] = canvas(src.width, src.height);
  x.drawImage(src, 0, 0);
  x.fillStyle = '#ffffff';
  for (let i = 1; i < src.width - 1; i += 12) { x.fillRect(i, 1, 8, 2); }
  x.fillRect(1, 1, 22, 3); x.fillRect(src.width - 23, 1, 22, 3);
  x.fillStyle = 'rgba(220,236,255,0.55)';
  for (let i = 0; i < 40; i++) x.fillRect((i * 37) % src.width, 10 + (i * 23) % 50, 3, 1);
  return c;
}

function makeWarMachine() {
  const W = 122, H = 62;
  const [c, x] = canvas(W, H);
  // treads
  for (const tx of [0, W - 18]) {
    x.fillStyle = '#2c2c34'; x.fillRect(tx, 2, 18, H - 4);
    x.fillStyle = '#5c5c68'; for (let y = 4; y < H - 4; y += 4) x.fillRect(tx + 2, y, 14, 2);
    x.fillStyle = '#7c7c88'; x.fillRect(tx + 2, 2, 14, 1);
  }
  // hull
  x.fillStyle = '#8c6430'; x.fillRect(16, 0, W - 32, H - 8);
  x.fillStyle = '#c0904c'; x.fillRect(16, 0, W - 32, 6); x.fillRect(16, 0, 4, H - 8);
  x.fillStyle = '#5c3c18'; x.fillRect(16, H - 14, W - 32, 6);
  // armour plates + rivets
  x.fillStyle = '#a07840'; x.fillRect(26, 12, W - 52, 26);
  x.fillStyle = '#5c3c18'; for (let i = 28; i < W - 28; i += 8) { x.fillRect(i, 14, 2, 2); x.fillRect(i, 34, 2, 2); }
  // front face with cannon ports
  x.fillStyle = '#4c3014'; x.fillRect(16, H - 8, W - 32, 8);
  for (const px of [W / 2 - 14, W / 2 - 3, W / 2 + 8]) { x.fillStyle = '#1c140c'; x.fillRect(px, H - 7, 6, 6); x.fillStyle = '#5c5c68'; x.fillRect(px + 1, H - 6, 4, 2); }
  // warning stripes
  for (let i = 20; i < W - 20; i += 8) { x.fillStyle = '#f8c830'; x.fillRect(i, 7, 4, 3); x.fillStyle = '#1c140c'; x.fillRect(i + 4, 7, 4, 3); }
  return outline(c);
}
function makeBossGun() {
  const [c, x] = canvas(18, 18);
  x.fillStyle = '#4c4c58'; x.beginPath(); x.arc(9, 9, 8, 0, 7); x.fill();
  x.fillStyle = '#7c7c8c'; x.beginPath(); x.arc(8, 8, 5.5, 0, 7); x.fill();
  x.fillStyle = '#b0b0c0'; x.fillRect(5, 5, 3, 2);
  return outline(threshold(c));
}

// 3x5 pixel glyphs for item capsules
const GLYPH = {
  R: ['110', '101', '110', '101', '101'], P: ['111', '101', '111', '100', '100'],
  B: ['110', '101', '110', '101', '110'], W: ['101', '101', '101', '111', '101'],
  H: ['000', '101', '111', '111', '010'],
};
function makeItem(bg, hi, glyph) {
  const [c, x] = canvas(12, 12);
  x.fillStyle = bg; x.fillRect(0, 1, 12, 10); x.fillRect(1, 0, 10, 12);
  x.fillStyle = hi; x.fillRect(1, 1, 10, 2);
  x.fillStyle = 'rgba(0,0,0,0.25)'; x.fillRect(1, 9, 10, 2);
  const g = GLYPH[glyph];
  x.fillStyle = '#ffffff';
  for (let j = 0; j < 5; j++) for (let i = 0; i < 3; i++) if (g[j][i] === '1') { x.fillRect(3 + i * 2, 1 + j * 2, 2, 2); }
  return outline(c);
}

export function buildSprites() {
  const jeepBase = [jeepPal('#a8e870', '#58b840', '#2c7c24'), jeepPal('#a0d0ff', '#4890f0', '#2050a8')];
  const S = {
    jeep: jeepBase.map(p => rotSet(grid(JEEP, p))),
    jeepWhite: rotSet(grid(JEEP, Object.fromEntries(Object.keys(jeepPal('', '', '')).map(k => [k, '#ffffff'])))),
    soldier: SOLDIER.map(f => outline(grid(f, SOLDIER_PAL))),
    soldierHit: SOLDIER.map(f => outline(grid(f, Object.fromEntries(Object.keys(SOLDIER_PAL).map(k => [k, '#ffffff']))), '#ffffff')),
    pow: POW.map(f => outline(grid(f, POW_PAL))),
    powFlash: POW.map(f => outline(grid(f, { ...POW_PAL, w: '#ffe14a', b: '#ff9a2a' }))),
    tree: makeTree(true), bush: makeTree(false),
    bunker: makeBunker(), tankBody: makeTankBody(), tankTop: makeTurretTop(),
    prison: makePrison(), fortress: makeFortress(), heli: makeHeli(),
    rock: makeRock,
    cactus: makeCactus(), drybush: makeDryBush(), pine: makePine(), snowbush: makeSnowBush(),
    warMachine: makeWarMachine(), bossGun: makeBossGun(),
    // item order matches ITEM: spread, shield, life, bomb, wup
    items: [makeItem('#e8702c', '#f8a860', 'R'), makeItem('#2c8ce8', '#78c0ff', 'P'), makeItem('#d83048', '#f87890', 'H'),
      makeItem('#7c44c8', '#b088f0', 'B'), makeItem('#d8a81c', '#f8e060', 'W')],
  };
  S.fortressSnow = snowCapped(S.fortress);
  return S;
}
