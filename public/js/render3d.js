// "3D" theme: real-time low-poly 3D with three.js — sun light, soft shadows, toon shading.
// The orthographic camera is tilted (ELEV) and its frustum is squashed so that ground points land on
// exactly the same screen pixels as the 2D themes: HUD, particles and health bars still line up.
import * as THREE from 'three';
import { VIEW_W, VIEW_H, LEVEL_LEN } from '../../shared/constants.js';
import { LEVEL } from '../../shared/level.js';
import { hash2 } from '../../shared/physics.js';
import { T, B } from '../../shared/entities.js';

const ELEV = 46 * Math.PI / 180, SIN = Math.sin(ELEV), COS = Math.cos(ELEV);
let renderer = null, scene, camera, sun, hemi, levelGroup = null, levelKey = '', K = 2;
export let canvas = null;

// ---------- materials / geometry caches ----------
let GRAD = null;
const matCache = new Map(), geoCache = new Map();
function gradient() {
  if (!GRAD) {
    GRAD = new THREE.DataTexture(new Uint8Array([90, 160, 225]), 3, 1, THREE.RedFormat);
    GRAD.minFilter = GRAD.magFilter = THREE.NearestFilter; GRAD.needsUpdate = true;
  }
  return GRAD;
}
function M(color, opts = {}) {
  const key = color + JSON.stringify(opts);
  let m = matCache.get(key);
  if (!m) { m = new THREE.MeshToonMaterial({ color, gradientMap: gradient(), ...opts }); matCache.set(key, m); }
  return m;
}
const own = (color, opts = {}) => new THREE.MeshToonMaterial({ color, gradientMap: gradient(), ...opts }); // per-entity (hit flash)
const basic = (color, opts = {}) => { const k = 'b' + color + JSON.stringify(opts); let m = matCache.get(k); if (!m) { m = new THREE.MeshBasicMaterial({ color, ...opts }); matCache.set(k, m); } return m; };
function G(kind, ...a) {
  const key = kind + a.join(',');
  let g = geoCache.get(key);
  if (!g) {
    g = kind === 'box' ? new THREE.BoxGeometry(...a) : kind === 'cyl' ? new THREE.CylinderGeometry(...a) : kind === 'sph' ? new THREE.SphereGeometry(...a)
      : kind === 'ico' ? new THREE.IcosahedronGeometry(...a) : kind === 'cone' ? new THREE.ConeGeometry(...a) : kind === 'tor' ? new THREE.TorusGeometry(...a)
      : kind === 'plane' ? new THREE.PlaneGeometry(...a) : kind === 'circ' ? new THREE.CircleGeometry(...a) : new THREE.DodecahedronGeometry(...a);
    geoCache.set(key, g);
  }
  return g;
}
function mesh(geo, mat, x = 0, y = 0, z = 0, shadow = true) {
  const m = new THREE.Mesh(geo, mat);
  m.position.set(x, y, z); m.castShadow = shadow; m.receiveShadow = true;
  return m;
}

// ---------- setup ----------
export function init() {
  if (renderer) return true;
  try {
    canvas = document.createElement('canvas');
    renderer = new THREE.WebGLRenderer({ canvas, antialias: true, powerPreference: 'high-performance' });
  } catch (e) { renderer = null; return false; }
  renderer.shadowMap.enabled = true;
  renderer.shadowMap.type = THREE.PCFSoftShadowMap;
  scene = new THREE.Scene();
  scene.background = new THREE.Color('#1a1d14');
  camera = new THREE.OrthographicCamera(-VIEW_W / 2, VIEW_W / 2, VIEW_H * SIN / 2, -VIEW_H * SIN / 2, 1, 4000);
  hemi = new THREE.HemisphereLight('#fff4e0', '#6a5a48', 0.42);
  scene.add(hemi);
  sun = new THREE.DirectionalLight('#ffe8c8', 0.72);
  sun.castShadow = true;
  sun.shadow.mapSize.set(1024, 1024);
  Object.assign(sun.shadow.camera, { left: -260, right: 260, top: 260, bottom: -260, near: 10, far: 1400 });
  sun.shadow.bias = -0.0015; sun.shadow.normalBias = 0.6;
  scene.add(sun, sun.target);
  setScale(K);
  return true;
}
export function setScale(k) {
  K = Math.min(k, 2.5);
  if (renderer) renderer.setSize(Math.round(VIEW_W * K), Math.round(VIEW_H * K), false);
}
export function resetTerrain() { levelKey = ''; }

// ---------- level (static) ----------
const THEME = [
  { ground: '#a8b86a', ground2: '#c8a878', grass: '#4fae44', grass2: '#33903a', road: '#c8a070', rock: '#d2bcae', rockDk: '#b8a092', water: '#3a8ed0', bank: '#dcc496', fence: '#a8804e' },
  { ground: '#dcb47e', ground2: '#c89a64', grass: '#6a9a40', grass2: '#4f7f34', road: '#c8945a', rock: '#e2c2a8', rockDk: '#c09068', water: '#3a92c4', bank: '#ead2a2', fence: '#9a6e40' },
  { ground: '#e2e8f0', ground2: '#cdd6e2', grass: '#3f8a6a', grass2: '#2c6c54', road: '#b8c2d0', rock: '#b0bccc', rockDk: '#94a2b6', water: '#2f68b0', bank: '#d6e0ea', fence: '#7a6a5a' },
];
function inst(group, geo, mat, list, colors) {
  if (!list.length) return;
  const im = new THREE.InstancedMesh(geo, mat, list.length);
  const o = new THREE.Object3D();
  list.forEach((t, i) => {
    o.position.set(t.x, t.y || 0, t.z); o.rotation.set(t.rx || 0, t.ry || 0, t.rz || 0);
    o.scale.set(t.sx || 1, t.sy || t.sx || 1, t.sz || t.sx || 1); o.updateMatrix(); im.setMatrixAt(i, o.matrix);
    if (colors) im.setColorAt(i, new THREE.Color(colors[i]));
  });
  im.castShadow = true; im.receiveShadow = true;
  group.add(im);
}
function buildLevel() {
  if (levelGroup) { scene.remove(levelGroup); levelGroup.traverse(o => { if (o.isInstancedMesh) o.dispose(); }); }
  const g = levelGroup = new THREE.Group();
  const th = THEME[LEVEL.theme] || THEME[0];
  // ground + boss courtyard
  const ground = mesh(G('plane', VIEW_W + 400, LEVEL_LEN + 600), M(th.ground), VIEW_W / 2, 0, LEVEL_LEN / 2, false);
  ground.rotation.x = -Math.PI / 2; g.add(ground);
  const yard = mesh(G('plane', VIEW_W, 430), M(th.ground2), VIEW_W / 2, 0.15, 215, false); yard.rotation.x = -Math.PI / 2; g.add(yard);
  // soft colour patches and grass clumps on the ground
  const patches = [], pc = [], tufts = [];
  for (let i = 0; i < 900; i++) {
    const x = hash2(i, 1) * VIEW_W, z = 430 + hash2(1, i) * (LEVEL_LEN - 400), h = hash2(i, i);
    patches.push({ x, y: 0.1, z, rx: -Math.PI / 2, sx: 10 + h * 22, sy: 6 + h * 12, sz: 1, rz: h * 6 });
    pc.push(h > 0.5 ? th.ground2 : th.bank);
    if (i % 2) tufts.push({ x: hash2(i, 7) * VIEW_W, y: 1, z: 430 + hash2(7, i) * (LEVEL_LEN - 400), sx: 1.4 + h, sy: 1 + h * 0.6, ry: h * 3 });
  }
  inst(g, G('circ', 1, 12), new THREE.MeshToonMaterial({ gradientMap: gradient(), transparent: true, opacity: 0.5, depthWrite: false }), patches, pc);
  inst(g, G('ico', 2.2, 0), M(th.grass2, { flatShading: true }), tufts);
  // roads
  for (const r of LEVEL.roads) {
    const m = mesh(G('box', r.w, 0.6, r.y1 - r.y0), M(th.road), r.x + r.w / 2, 0.3, (r.y0 + r.y1) / 2, false); g.add(m);
  }
  // barrier bands: water (with bridges), rock ridges, concrete walls
  const rocks = [];
  for (const rv of LEVEL.rivers) {
    const segs = []; let cx = 0;
    for (const gp of [...rv.bridges].sort((a, b) => a.x - b.x)) { if (gp.x > cx) segs.push([cx, gp.x]); cx = gp.x + gp.w; }
    if (cx < VIEW_W) segs.push([cx, VIEW_W]);
    if (rv.kind === 'water') {
      g.add(mesh(G('box', VIEW_W + 400, 0.8, rv.h + 12), M(th.bank), VIEW_W / 2, 0.35, rv.y + rv.h / 2, false));
      const w = mesh(G('box', VIEW_W + 400, 0.6, rv.h), M(th.water), VIEW_W / 2, 0.9, rv.y + rv.h / 2, false); g.add(w);
      for (const br of rv.bridges) {
        g.add(mesh(G('box', br.w, 3, rv.h + 18), M('#9a6a3e'), br.x + br.w / 2, 1.8, rv.y + rv.h / 2));
        for (const ex of [br.x - 1, br.x + br.w + 1]) g.add(mesh(G('box', 2, 5, rv.h + 18), M('#6e4626'), ex, 3.5, rv.y + rv.h / 2));
      }
      for (let i = 0; i < 18; i++) rocks.push({ x: hash2(i, rv.y) * VIEW_W, y: 1, z: rv.y + (i % 2 ? -4 : rv.h + 4), sx: 2 + hash2(rv.y, i) * 3, ry: i });
    } else {
      for (const [a, b] of segs) {
        if (rv.kind === 'ridge') {
          g.add(mesh(G('box', b - a, 12, rv.h), M(th.rock), (a + b) / 2, 6, rv.y + rv.h / 2));
          for (let x = a + 6; x < b - 4; x += 9) rocks.push({ x, y: 10 + hash2(x, rv.y) * 4, z: rv.y + rv.h * (0.3 + hash2(rv.y, x) * 0.4), sx: 6 + hash2(x, 3) * 4, sy: 5 + hash2(3, x) * 5, ry: x });
        } else {
          g.add(mesh(G('box', b - a, 14, rv.h), M('#a8b0bc'), (a + b) / 2, 7, rv.y + rv.h / 2));
          g.add(mesh(G('box', b - a, 1.5, rv.h + 2), M('#dce2ea'), (a + b) / 2, 14.5, rv.y + rv.h / 2));
          for (const ex of [a > 0 ? a + 3 : -99, b < VIEW_W ? b - 3 : -99]) if (ex > 0) g.add(mesh(G('box', 6, 16, rv.h + 2), M('#ffcc33'), ex, 8, rv.y + rv.h / 2));
        }
      }
    }
  }
  // helipads
  for (const h of LEVEL.helipads) {
    g.add(mesh(G('cyl', 22, 23, 1.6, 24), M('#a8a49a'), h.x, 0.8, h.y, false));
    const ring = mesh(G('tor', 17, 1.1, 6, 32), M('#ffcc33'), h.x, 1.7, h.y, false); ring.rotation.x = Math.PI / 2; g.add(ring);
    for (const [dx, w, d] of [[-6, 3, 16], [6, 3, 16], [0, 9, 3]]) g.add(mesh(G('box', w, 0.6, d), M('#ffffff'), h.x + dx, 1.9, h.y, false));
  }
  // sandbags & boulders
  const bags = [];
  for (const b of LEVEL.blockers) {
    if (b.kind === 'sandbag') for (let x = b.x + 4; x < b.x + b.w; x += 7) for (let r = 0; r < 2; r++) bags.push({ x: x + r * 3, y: 2.5 + r * 4, z: b.y + b.h / 2, sx: 3.6, sy: 2.2, sz: 3.2 });
    else if (b.kind === 'rock') rocks.push({ x: b.x + b.w / 2, y: 4, z: b.y + b.h / 2, sx: b.w / 2, sy: 9, sz: b.h / 2 + 2, ry: b.x });
  }
  inst(g, G('sph', 1, 8, 6), M('#d8bc84'), bags);
  inst(g, G('dod', 1, 0), M(th.rock, { flatShading: true }), rocks);
  // trees, bushes, cacti, pines — instanced
  const trunks = [], crowns = [], crownC = [], bushes = [], cacti = [], arms = [], pines = [], snowcaps = [];
  for (const d of LEVEL.deco) {
    const h = hash2(d.x | 0, d.y | 0);
    if (d.kind === 'tree') {
      trunks.push({ x: d.x, y: 5, z: d.y, sx: 1, sy: 1 });
      crowns.push({ x: d.x, y: 15 + h * 3, z: d.y, sx: 9 + h * 3, sy: 8 + h * 3, ry: h * 6 }); crownC.push(h > 0.5 ? th.grass : th.grass2);
      crowns.push({ x: d.x + 4, y: 20 + h * 2, z: d.y - 2, sx: 6, sy: 5.5, ry: h }); crownC.push(th.grass);
    } else if (d.kind === 'bush' || d.kind === 'snowbush' || d.kind === 'drybush') {
      bushes.push({ x: d.x, y: 3, z: d.y, sx: 5 + h * 3, sy: 4 + h * 2, ry: h * 6 });
    } else if (d.kind === 'cactus') {
      cacti.push({ x: d.x, y: 9, z: d.y, sx: 2.6, sy: 9, sz: 2.6 });
      arms.push({ x: d.x - 4, y: 11, z: d.y, sx: 1.6, sy: 4, sz: 1.6 }); arms.push({ x: d.x + 4, y: 13, z: d.y, sx: 1.6, sy: 4, sz: 1.6 });
    } else if (d.kind === 'pine') {
      trunks.push({ x: d.x, y: 4, z: d.y, sx: 0.8, sy: 0.8 });
      for (let k = 0; k < 3; k++) { pines.push({ x: d.x, y: 9 + k * 6, z: d.y, sx: 9 - k * 2.4, sy: 8, sz: 9 - k * 2.4 }); snowcaps.push({ x: d.x, y: 12 + k * 6, z: d.y, sx: 4.5 - k * 1.2, sy: 3, sz: 4.5 - k * 1.2 }); }
    }
  }
  inst(g, G('cyl', 1.6, 2.2, 10, 6), M('#8a5a32'), trunks);
  inst(g, G('ico', 1, 1), new THREE.MeshToonMaterial({ gradientMap: gradient(), flatShading: true }), crowns, crownC);
  inst(g, G('ico', 1, 0), M(LEVEL.theme === 2 ? '#f4f8fc' : LEVEL.theme === 1 ? '#a88a5a' : th.grass2, { flatShading: true }), bushes);
  inst(g, G('cyl', 1, 1, 2, 7), M('#4aa85a'), cacti.concat(arms));
  inst(g, G('cone', 1, 1, 7), M(th.grass2, { flatShading: true }), pines);
  inst(g, G('cone', 1, 1, 7), M('#ffffff', { flatShading: true }), snowcaps);
  // wooden fences along both edges of the playfield
  const posts = [], rails = [];
  for (let z = 440; z < LEVEL_LEN; z += 14) for (const x of [2, VIEW_W - 2]) {
    if (LEVEL.rivers.some(r => z > r.y - 8 && z < r.y + r.h + 8)) continue;
    posts.push({ x, y: 4, z, sx: 1, sy: 1, sz: 1 }); rails.push({ x, y: 6, z: z + 7, sx: 1, sy: 1, sz: 1 });
  }
  inst(g, G('box', 2.2, 8, 2.2), M(th.fence), posts);
  inst(g, G('box', 1.2, 1.4, 14), M(th.fence), rails);
  scene.add(g);
}

// ---------- dynamic models (built facing +z, rotated by heading) ----------
function person(shirt, pants, hat, armsUp) {
  const g = new THREE.Group(), body = own(shirt);
  g.add(mesh(G('box', 1.8, 4, 2), M(pants), -1.2, 2, 0), mesh(G('box', 1.8, 4, 2), M(pants), 1.2, 2, 0));
  g.add(mesh(G('box', 5, 5, 3.2), body, 0, 6.5, 0));
  for (const s of [-1, 1]) { const arm = mesh(G('box', 1.4, 4.5, 1.4), body, s * 3.2, armsUp ? 9.5 : 6.3, 0); if (armsUp) arm.rotation.z = s * 0.5; g.add(arm); }
  g.add(mesh(G('sph', 2.4, 10, 8), M('#f0c49a'), 0, 10.8, 0));
  if (hat) { const h = mesh(G('sph', 2.7, 10, 6, 0, Math.PI * 2, 0, Math.PI / 2), M(hat), 0, 11.2, 0); g.add(h); }
  return { g, mats: [body] };
}
function makeJeep(slot) {
  const g = new THREE.Group(), col = slot === 0 ? '#5cbf4a' : '#4a8ef0', body = own(col);
  g.add(mesh(G('box', 12, 5, 18), body, 0, 5.5, 0));
  g.add(mesh(G('box', 11, 2.2, 6), own(slot === 0 ? '#86dc6c' : '#80b8ff'), 0, 8.6, 5.5));
  const glass = mesh(G('box', 11, 4, 0.8), M('#a8e4ff', { emissive: '#3a7aa0', emissiveIntensity: 0.3 }), 0, 9.8, 2.2); g.add(glass);
  g.add(mesh(G('box', 4, 2.5, 3.5), M('#9a5a30'), -2.5, 9, -2), mesh(G('box', 4, 2.5, 3.5), M('#9a5a30'), 2.5, 9, -2));
  g.add(mesh(G('box', 12.5, 1, 1), M('#3a3c46'), 0, 13, -4.8));
  for (const s of [-1, 1]) g.add(mesh(G('box', 1, 5, 1), M('#3a3c46'), s * 5.8, 10.5, -4.8));
  const gun = mesh(G('cyl', 0.9, 0.9, 10, 6), M('#2e3038'), 0, 11.2, 5); gun.rotation.x = Math.PI / 2; g.add(gun);
  g.add(mesh(G('cyl', 1.6, 1.6, 2.5, 8), M('#4a4c58'), 0, 10.6, 0.5));
  for (const [x, z] of [[-6.6, 6], [6.6, 6], [-6.6, -6], [6.6, -6]]) { const w = mesh(G('cyl', 3.1, 3.1, 2.6, 10), M('#24252c'), x, 3.1, z); w.rotation.z = Math.PI / 2; g.add(w); }
  const driver = person('#c8a060', '#5a4a30', '#3f6a2a'); driver.g.scale.setScalar(0.55); driver.g.position.set(-2.5, 6.5, -2); g.add(driver.g);
  const shield = new THREE.Mesh(G('sph', 17, 16, 12), new THREE.MeshBasicMaterial({ color: '#8cd2ff', transparent: true, opacity: 0.22, depthWrite: false }));
  shield.position.y = 7; shield.visible = false; g.add(shield);
  return { g, mats: [body], shield };
}
function makeTurret(boss) {
  const g = new THREE.Group(), base = own(boss ? '#8a6a5a' : '#c8a868');
  const ring = mesh(G('tor', 8.5, 3, 8, 14), base, 0, 3, 0); ring.rotation.x = Math.PI / 2; g.add(ring);
  g.add(mesh(G('sph', 5.5, 12, 8, 0, Math.PI * 2, 0, Math.PI / 2), own('#6a6c78'), 0, 3, 0));
  const pivot = new THREE.Group(); pivot.position.y = 5.5;
  const barrel = mesh(G('cyl', 1.4, 1.6, 13, 8), M(boss ? '#a83a2a' : '#3a3c46'), 0, 0, 7); barrel.rotation.x = Math.PI / 2; pivot.add(barrel);
  g.add(pivot);
  return { g, mats: [base], pivot };
}
function makeTank() {
  const g = new THREE.Group(), hull = own('#b85a3a');
  for (const s of [-1, 1]) g.add(mesh(G('box', 4.5, 5, 22), M('#2a2b32'), s * 8.2, 2.6, 0));
  g.add(mesh(G('box', 12, 5, 20), hull, 0, 5, 0));
  const pivot = new THREE.Group(); pivot.position.y = 9;
  pivot.add(mesh(G('cyl', 5.5, 6, 3.6, 10), own('#d0704a'), 0, 0, 0));
  const barrel = mesh(G('cyl', 1.3, 1.5, 14, 8), M('#5a2418'), 0, 0.4, 8); barrel.rotation.x = Math.PI / 2; pivot.add(barrel);
  g.add(pivot);
  return { g, mats: [hull], pivot };
}
function makePrison() {
  const g = new THREE.Group(), walls = own('#a8743e');
  g.add(mesh(G('box', 30, 12, 22), walls, 0, 6, 0));
  const roof = mesh(G('cone', 22, 10, 4), own('#d8483a'), 0, 17, 0); roof.rotation.y = Math.PI / 4; roof.scale.set(1, 1, 0.78); g.add(roof);
  g.add(mesh(G('box', 11, 9, 0.6), M('#2a2420'), 0, 4.5, 11.2));
  for (let i = -4; i <= 4; i += 2) g.add(mesh(G('cyl', 0.35, 0.35, 9, 4), M('#c8c8d2'), i, 4.5, 11.6));
  g.add(mesh(G('box', 7, 4, 0.6), M('#fff2c0'), -10, 8, 11.3));
  return { g, mats: [walls] };
}
function makeFortress(snow) {
  const g = new THREE.Group(), stone = own(snow ? '#c8d0dc' : '#c8bfae');
  g.add(mesh(G('box', 184, 24, 84), stone, 0, 12, 0));
  for (let x = -86; x <= 86; x += 14) g.add(mesh(G('box', 9, 6, 6), M(snow ? '#ffffff' : '#ddd4c4'), x, 27, -39));
  for (const x of [-80, 80]) {
    g.add(mesh(G('cyl', 15, 16, 36, 10), M(snow ? '#dde4ec' : '#d8cfbe'), x, 18, -20));
    g.add(mesh(G('cone', 17, 12, 10), M('#c83a2e'), x, 42, -20));
  }
  g.add(mesh(G('box', 36, 18, 2), M('#3a2c20'), 0, 9, 42));
  for (let x = -15; x <= 15; x += 6) g.add(mesh(G('box', 3.5, 17, 1), M('#8a5a32'), x, 9, 43));
  const core = mesh(G('sph', 10, 16, 12), new THREE.MeshToonMaterial({ color: '#ff5a40', emissive: '#ff2010', emissiveIntensity: 0.6, gradientMap: gradient() }), 0, 30, -12);
  g.add(core);
  const shield = new THREE.Mesh(G('sph', 17, 16, 12), new THREE.MeshBasicMaterial({ color: '#8cd2ff', transparent: true, opacity: 0.3, depthWrite: false }));
  shield.position.set(0, 30, -12); g.add(shield);
  return { g, mats: [stone], core, shield };
}
function makeWarMachine() {
  const g = new THREE.Group(), hull = own('#c8944c');
  for (const s of [-1, 1]) g.add(mesh(G('box', 18, 12, 60), M('#2a2b32'), s * 52, 6, 0));
  g.add(mesh(G('box', 88, 16, 54), hull, 0, 10, 0));
  for (let x = -40; x < 40; x += 16) g.add(mesh(G('box', 8, 1, 3), M('#ffcc33'), x + 4, 18.6, -22));
  for (const x of [-12, 0, 12]) g.add(mesh(G('box', 6, 6, 2), M('#1e1a16'), x, 8, 27.5));
  const core = mesh(G('sph', 7, 14, 10), new THREE.MeshToonMaterial({ color: '#ff5a40', emissive: '#ff2010', emissiveIntensity: 0.6, gradientMap: gradient() }), 0, 20, -4);
  g.add(core);
  const shield = new THREE.Mesh(G('sph', 12, 16, 12), new THREE.MeshBasicMaterial({ color: '#8cd2ff', transparent: true, opacity: 0.3, depthWrite: false }));
  shield.position.set(0, 20, -4); g.add(shield);
  return { g, mats: [hull], core, shield };
}
function makeHeli() {
  const g = new THREE.Group(), body = own('#4e8a40');
  const b = mesh(G('sph', 7, 14, 10), body, 0, 10, 0); b.scale.set(1, 0.85, 1.35); g.add(b);
  const glass = mesh(G('sph', 4.6, 12, 8), M('#a8e4ff', { emissive: '#3a7aa0', emissiveIntensity: 0.3 }), 0, 11.5, -6); g.add(glass);
  g.add(mesh(G('box', 2.6, 2.6, 16), body, 0, 11, 15), mesh(G('box', 1, 7, 4), body, 0, 13, 22));
  for (const s of [-1, 1]) g.add(mesh(G('box', 1.2, 1.2, 18), M('#4a4c58'), s * 6, 2, 0));
  const rotor = new THREE.Group(); rotor.position.y = 18;
  rotor.add(mesh(G('box', 40, 0.6, 2.2), M('#3a3c46'), 0, 0, 0, false), mesh(G('box', 2.2, 0.6, 40), M('#3a3c46'), 0, 0, 0, false));
  g.add(rotor);
  return { g, mats: [body], rotor };
}
const ITEM_COL = ['#ff8a3c', '#4aa8ff', '#ff5a78', '#9a6aff', '#ffd23c'];
function makeItem(type) {
  const g = new THREE.Group();
  g.add(mesh(G('box', 9, 9, 9), new THREE.MeshToonMaterial({ color: ITEM_COL[type] || ITEM_COL[0], emissive: ITEM_COL[type] || ITEM_COL[0], emissiveIntensity: 0.35, gradientMap: gradient() }), 0, 0, 0));
  g.add(mesh(G('box', 9.6, 2, 9.6), M('#ffffff'), 0, 0, 0, false));
  return { g, mats: [] };
}
function makeBullet(kind) {
  const g = new THREE.Group();
  const add = (geo, col, rx = 0) => { const m = new THREE.Mesh(geo, basic(col)); m.rotation.x = rx; g.add(m); return m; };
  switch (kind) {
    case B.mg: add(G('sph', 1.6, 6, 4), '#fff27a'); break;
    case B.big: add(G('sph', 2.6, 8, 6), '#ffb040'); break;
    case B.ebullet: add(G('sph', 2.4, 8, 6), '#ff4a38'); break;
    case B.eshell: add(G('sph', 3.4, 8, 6), '#ff8a2a'); break;
    case B.missile: case B.homing: add(G('cyl', 1.4, 1.4, 8, 6), '#f4f4f4', Math.PI / 2); break;
    case B.laser: add(G('box', 2, 2, 18), '#9cf4ff'); break;
    default: add(G('sph', 2.5, 6, 4), '#4c6c2c');
  }
  g.traverse(o => { o.castShadow = false; });
  return { g, mats: [] };
}

// ---------- per-frame sync ----------
const pools = { e: new Map(), b: new Map(), w: new Map(), i: new Map(), p: new Map(), h: new Map() };
function sync(pool, list, key, make, update) {
  const seen = new Set();
  for (const it of list) {
    const k = key(it);
    let o = pool.get(k);
    if (!o) { o = make(it); scene.add(o.g); pool.set(k, o); }
    update(o, it); seen.add(k);
  }
  for (const [k, o] of pool) if (!seen.has(k)) { scene.remove(o.g); o.mats && o.mats.forEach(m => m.dispose()); pool.delete(k); }
}
const yaw = a => Math.PI / 2 - a;            // world heading (x,y-down) -> rotation.y for a +z-facing model
const flash = (o, hit) => { for (const m of o.mats) m.emissive.setHex(hit ? 0x777777 : 0x000000); };

export function render(view) {
  if (!renderer) return null;
  const key = LEVEL.theme + ':' + LEVEL.helipads.length + ':' + LEVEL.spawns.length + ':' + LEVEL.deco.length;
  if (key !== levelKey) { levelKey = key; for (const p of Object.values(pools)) sync(p, [], () => 0); buildLevel(); }
  const cam = view.cam, now = view.now;
  // camera & sun follow the view
  const tx = VIEW_W / 2, tz = cam + VIEW_H / 2;
  camera.position.set(tx, SIN * 1500, tz + COS * 1500);
  camera.lookAt(tx, 0, tz);
  sun.position.set(tx - 180, 420, tz + 260); sun.target.position.set(tx, 0, tz); sun.target.updateMatrixWorld();

  const S = view.S || { e: [], b: [], w: [], i: [], players: [] };
  sync(pools.e, S.e, e => e[0] + ':' + e[1], e => {
    switch (e[1]) {
      case T.soldier: { const o = person('#7a70b8', '#3c2c50', '#d83a2e', false); o.g.scale.setScalar(1.4); return o; }
      case T.turret: return makeTurret(false);
      case T.bossTurret: return makeTurret(true);
      case T.tank: return makeTank();
      case T.prison: return makePrison();
      // squashed vertically so the tall fortress stays on screen at the top of the boss arena
      case T.boss: { const o = makeFortress(LEVEL.theme === 2); o.g.scale.y = 0.5; return o; }
      case T.boss2: { const o = makeWarMachine(); o.g.scale.y = 0.75; return o; }
    }
    return person('#888', '#444', null);
  }, (o, e) => {
    const [, type, x, y, a, , hit, shield] = e;
    o.g.position.set(x, 0, y);
    if (type === T.soldier) { o.g.rotation.y = yaw(a); o.g.position.y = Math.abs(Math.sin(now / 90 + e[0])) * 0.8; }
    else if (o.pivot) o.pivot.rotation.y = yaw(a);
    if (o.shield) o.shield.visible = !!shield;
    if (o.core) o.core.material.emissiveIntensity = 0.4 + 0.4 * Math.sin(now / 140);
    flash(o, hit);
  });
  sync(pools.w, S.w, w => w[0], () => { const o = person('#ffffff', '#4c70c8', '#6a3c1c', true); o.g.scale.setScalar(1.35); return o; }, (o, w) => {
    o.g.position.set(w[1], Math.abs(Math.sin(now / 120 + w[0])) * 1.5, w[2]);
    if (w[3]) for (const m of o.mats) m.emissive.setHex(((now / 120) | 0) % 2 ? 0x886600 : 0);
  });
  sync(pools.i, S.i, it => it[0] + ':' + it[1], it => makeItem(it[1]), (o, it) => {
    o.g.position.set(it[2], 7 + Math.sin(now / 200 + it[0]) * 1.5, it[3]); o.g.rotation.y = now / 600;
    o.g.visible = !(it[4] && ((now / 100) | 0) % 2);
  });
  sync(pools.b, S.b, b => b[0], b => makeBullet(b[1]), (o, b) => {
    o.g.position.set(b[2], 6 + (b[4] || 0), b[3]); o.g.rotation.y = yaw(b[5] || 0);
  });
  sync(pools.p, S.players.filter(p => p[3]), p => p.slot, p => makeJeep(p.slot), (o, p) => {
    o.g.position.set(p.x, 0, p.y); o.g.rotation.y = yaw(p.a);
    o.g.visible = !(p[4] && ((now / 90) | 0) % 2);
    o.shield.visible = !!p[11];
  });
  sync(pools.h, LEVEL.helipads.map((h, i) => ({ h, i })), x => x.i, () => makeHeli(), (o, { h, i }) => {
    const anim = (view.padAnim || {})[i] || 0, lift = anim > 0 ? Math.sin((1 - anim / 2.4) * Math.PI) * 40 : 0;
    o.g.position.set(h.x, 1.6 + lift, h.y);
    o.rotor.rotation.y = now * (anim > 0 ? 0.03 : 0.006);
  });
  renderer.render(scene, camera);
  return canvas;
}

// 2D overlay bits that read better flat: carried-POW badge and "this is you" marker
export function drawOverlay(ctx, S, cam, you) {
  for (const p of S.players) {
    if (!p[3]) continue;
    const x = p.x, y = p.y - cam;
    if (p[7] > 0) {
      ctx.fillStyle = '#ffffff'; ctx.beginPath(); ctx.roundRect ? ctx.roundRect(x - 7, y - 30, 14, 9, 3) : ctx.rect(x - 7, y - 30, 14, 9); ctx.fill();
      ctx.fillStyle = '#2a2a2a'; ctx.font = 'bold 7px sans-serif'; ctx.textAlign = 'center'; ctx.textBaseline = 'middle'; ctx.fillText(p[7], x, y - 25.3);
    }
    if (p.slot === you) { ctx.fillStyle = p.slot === 0 ? '#8fe070' : '#8cc0ff'; ctx.beginPath(); ctx.moveTo(x, y - 34); ctx.lineTo(x - 4, y - 40); ctx.lineTo(x + 4, y - 40); ctx.closePath(); ctx.fill(); }
  }
}
