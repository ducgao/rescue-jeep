// Server-authoritative game room. Pure simulation; networking is injected via `send`.
import {
  VIEW_W, VIEW_H, DT, SNAP_EVERY, CAM_LEAD, LEVEL_LEN, JEEP_R, LIVES, MAX_CARRY, RESPAWN_MS, INVULN_MS,
  GUN, MAX_WEAPON, RESCUE_PER_UPGRADE, BULLET_SPEED, BULLET_RANGE, RATE_MAX, RATE_MULT, SCORE, STAGES, DIFF,
  ITEM, ITEM_LIFE, SHIELD_SEC, MAX_LIVES, AUTO_AIM_RANGE,
} from '../shared/constants.js';
import { LEVELS } from '../shared/level.js';
import { stepJeep, collidesAny, normInput, dist2, rng, pointInRect } from '../shared/physics.js';
import { T, B, HARD, TYPE_NAME, footprint, distToEntity, isBossType } from '../shared/entities.js';
import { botInput } from './bot.js';

let ROOM_SEQ = 1;
const devEnv = k => (typeof process !== 'undefined' && process.env ? process.env[k] : undefined);

export class Room {
  constructor(seats, { send = () => {}, onEnd = () => {}, seed = Date.now(), tutorial = false, snapEvery = SNAP_EVERY } = {}) {
    this.snapEvery = snapEvery;   // offline play sends a snapshot every tick for snappier feedback
    this.id = ROOM_SEQ++;
    this.send = send;          // (slot, msg) => void
    this.onEnd = onEnd;
    this.R = rng(seed);
    this.tick = 0;
    this.time = 0;
    this.nid = 1;
    this.events = [];
    this.ended = false;
    this.players = seats.map((s, slot) => ({
      slot, name: s.name || `P${slot + 1}`, isBot: !!s.isBot, autoAim: s.isBot || s.aim !== false,
      x: 0, y: 0, a: -Math.PI / 2,
      alive: true, lives: LIVES, invulnUntil: 0, respawnAt: 0,
      weapon: 1, carry: 0, score: 0, rescued: 0, kills: 0,
      rate: 0, shieldUntil: 0, rescueProg: 0,
      mgCd: 0, sCd: 0, lCd: 0, inputQ: [], last: [0, 0], ack: 0,
      bot: s.isBot ? { t: 0, jitter: 0 } : null,
    }));
    // dev only: RJ_STAGE=2 RJ_START_Y=700 npm start
    const st = devEnv('RJ_STAGE');
    this.loadStage(st !== undefined && st !== '' ? Math.max(0, Math.min(STAGES - 1, +st)) : tutorial ? 0 : 1);
    const lv = +devEnv('RJ_LIVES'); if (lv > 0) this.players.forEach(p => { if (!p.isBot) p.lives = lv; });
    const sy = +devEnv('RJ_START_Y');
    if (sy > VIEW_H && sy < LEVEL_LEN) {
      this.camY = sy - VIEW_H + 60;
      this.players.forEach(p => { p.y = sy; p.weapon = Math.max(p.weapon, 3); });
      while (this.nextSpawn < this.spawns.length && this.spawns[this.nextSpawn].y > sy) this.nextSpawn++;
    }
  }

  loadStage(i) {
    this.stage = i;
    this.L = LEVELS[i];
    this.D = DIFF[i];
    // only sandbags & rocks stop bullets; barrier bands (water/ridge/wall) only stop vehicles
    this.solid = this.L.blockers.filter(b => b.kind === 'sandbag' || b.kind === 'rock');
    this.spawns = [...this.L.spawns].sort((a, b) => b.y - a.y);
    this.nextSpawn = 0;
    this.camY = LEVEL_LEN - VIEW_H;
    this.enemies = new Map(); this.bullets = new Map(); this.pows = new Map(); this.items = new Map();
    this.bossDeadAt = 0; this.loseAt = 0;
    this.phase = 'play'; this.clearT = 0;
    this.players.forEach((p, slot) => {
      // everyone comes back for the next stage, and gets +1 life as a stage-clear reward
      if (i > 1) p.lives = Math.min(MAX_LIVES, Math.max(1, p.lives + 1));
      p.x = VIEW_W / 2 + (slot === 0 ? -25 : 25); p.y = LEVEL_LEN - 50; p.a = -Math.PI / 2;
      p.alive = true; p.respawnAt = 0; p.carry = 0;
      p.invulnUntil = this.time + INVULN_MS / 1000;
      p.inputQ = []; p.mgCd = 0.3;
    });
    this.tut = this.L.tutorial ? { step: 0, sub: 0, moved: 0, t: 0, ids: [], base: 0, mark: null } : null;
    // the bot waits outside the training yard and joins from stage 1
    if (this.tut) this.players.forEach(p => { if (p.isBot) { p.alive = false; p.respawnAt = 0; } });
    this.events.push(['g', i]);
  }

  // ---------- asking the teammate for a life ----------
  // A player with no lives left can ask; if the teammate (with at least 2 lives) accepts, one life moves over.
  requestLife(slot) {
    const p = this.players[slot], mate = this.players[1 - slot];
    if (!p || !mate || p.alive || p.lives > 0 || this.lifeReq || this.ended || this.tut) return;
    if (mate.lives < 2) { this.events.push(['A', slot, mate.slot, 2]); return; }   // 2 = teammate has no spare life
    this.lifeReq = { from: slot, to: mate.slot, t: this.time };
    this.events.push(['L', slot]);
  }
  answerLife(slot, yes) {
    const q = this.lifeReq;
    if (!q || q.to !== slot) return;
    this.lifeReq = null;
    const p = this.players[q.from], mate = this.players[q.to];
    if (yes && mate.lives >= 2 && !p.alive && p.lives <= 0) {
      mate.lives--; p.lives = 1; p.respawnAt = this.time + 0.4; this.loseAt = 0;
      this.events.push(['A', q.from, q.to, 1]);
    } else this.events.push(['A', q.from, q.to, 0]);
  }
  updateLifeRequest() {
    const q = this.lifeReq;
    if (!q) return;
    const mate = this.players[q.to];
    if (mate.isBot && this.time - q.t > 1.2) return this.answerLife(q.to, true);   // the bot always shares
    if (this.time - q.t > 10) return this.answerLife(q.to, false);                // no answer in 10 s = no
  }

  skipTutorial() {
    if (!this.tut || this.phase === 'clear') return;
    this.phase = 'clear'; this.clearT = 1.2;
    this.events.push(['c', 0, 0]);
  }

  // ---------- tutorial: one goal at a time, targets spawned in front of the players ----------
  // Training yard: camera is locked on one screen and the player does 3 lessons in order.
  //   step 0  drive: reach 3 marker rings one after another
  //   step 1  shoot: 3 targets in 3 different directions — the gun fires where the jeep's nose points
  //   step 2  rescue: shoot the hut (sub 0), pick up the POWs (sub 1), drop them at the helipad (sub 2)
  //   step 3  done -> stage 1
  updateTutorial() {
    const t = this.tut, humans = this.players.filter(p => !p.isBot && p.alive);
    if (!humans.length) return;
    t.t += DT;
    const top = this.camY;
    const next = () => { t.step++; t.sub = 0; t.t = 0; t.ids = []; this.events.push(['T', t.step]); };
    const subNext = () => { t.sub++; this.events.push(['T', t.step]); };
    switch (t.step) {
      case 0: {
        const marks = [[VIEW_W * 0.2, top + 100], [VIEW_W * 0.8, top + 100], [VIEW_W * 0.5, top + 160]];
        const [mx, my] = marks[t.sub];
        t.mark = [mx, my];
        if (humans.some(p => Math.hypot(p.x - mx, p.y - my) < 16)) {
          if (t.sub < marks.length - 1) subNext(); else next();
        }
        break;
      }
      case 1: {
        const spots = [[VIEW_W * 0.5, top + 88], [VIEW_W * 0.08, top + 165], [VIEW_W * 0.92, top + 150]];
        if (!t.ids.length || !this.enemies.has(t.ids[0])) {
          if (t.ids.length) { if (t.sub < spots.length - 1) subNext(); else { next(); break; } }
          const [x, y] = spots[t.sub];
          const e = this.addEnemy(T.turret, x, y); e.hp = e.maxHp = 4; t.ids = [e.id];
        }
        const e = this.enemies.get(t.ids[0]);
        t.mark = e ? [e.x, e.y] : null;
        break;
      }
      case 2: {
        if (t.sub === 0) {
          if (!t.ids.length) { const e = this.addEnemy(T.prison, VIEW_W * 0.35, top + 95, { pows: 3, flash: 0 }); t.ids = [e.id]; }
          const e = this.enemies.get(t.ids[0]);
          t.mark = e ? [e.x, e.y] : null;
          if (!e) subNext();
        } else if (t.sub === 1) {
          const w = [...this.pows.values()][0];
          t.mark = w ? [w.x, w.y] : null;
          if (!this.pows.size) { t.base = 0; subNext(); }
        } else {
          const h = this.L.helipads[0];
          t.mark = [h.x, h.y];
          if (humans.every(p => p.carry === 0)) next();
        }
        break;
      }
      case 3: t.mark = null; if (t.t > 2.5) this.skipTutorial(); break;
    }
  }

  // ---------- input ----------
  pushInput(slot, seq, dx, dy, fire) {
    const p = this.players[slot];
    if (!p || p.isBot) return;
    if (p.inputQ.length > 20) p.inputQ.splice(0, p.inputQ.length - 10);
    p.inputQ.push({ seq, d: normInput(dx, dy), f: !!fire });
  }

  setBot(slot) {
    const p = this.players[slot];
    if (!p) return;
    p.isBot = true; p.autoAim = true; p.bot = { t: 0, jitter: 0 }; p.inputQ = [];
    p.name = p.name.replace(/ \(bot\)$/, '') + ' (bot)';
    this.events.push(['b', slot]);
  }

  // ---------- helpers ----------
  dynBlockers(except) {
    const out = [];
    for (const e of this.enemies.values()) {
      if (e === except) continue;
      const f = footprint(e.type, e.x, e.y);
      if (f) out.push(f);
    }
    return out;
  }
  inView(x, y, m = 0) { return y > this.camY - m && y < this.camY + VIEW_H + m && x > -m && x < VIEW_W + m; }
  alivePlayers() { return this.players.filter(p => p.alive); }
  nearestPlayer(x, y) {
    let best = null, bd = Infinity;
    for (const p of this.players) if (p.alive) { const d = dist2(x, y, p.x, p.y); if (d < bd) { bd = d; best = p; } }
    return best;
  }
  shielded(e) { return isBossType(e.type) && e.turrets && e.turrets.some(id => this.enemies.has(id)); }
  // enemy shot; aimed shots get stage-dependent aim error, speed scales with stage
  ebullet(x, y, tx, ty, speed, kind = B.ebullet, spread = 0, aimed = true) {
    const err = aimed ? (this.R() - 0.5) * 2 * this.D.aim : 0;
    const a = Math.atan2(ty - y, tx - x) + spread + err;
    const v = speed * this.D.bspd, id = this.nid++;
    this.bullets.set(id, { id, kind, x, y, vx: Math.cos(a) * v, vy: Math.sin(a) * v, life: 4.5, enemy: true });
  }

  // ---------- main tick ----------
  step() {
    if (this.ended) return;
    this.tick++;
    this.time += DT;
    if (this.phase === 'clear') {
      this.clearT -= DT;
      if (this.clearT <= 0) this.loadStage(this.stage + 1);
      if (this.tick % this.snapEvery === 0) this.broadcast();
      return;
    }
    this.updateCamera();
    this.activateSpawns();
    const solids = this.L.blockers.concat(this.dynBlockers());
    for (const p of this.players) this.updatePlayer(p, solids);
    for (const e of [...this.enemies.values()]) this.updateEnemy(e);
    this.updateBullets();
    this.updatePows();
    this.updateItems();
    if (this.tut) this.updateTutorial();
    this.updateLifeRequest();
    this.cleanup();
    this.checkEnd();
    if (this.tick % this.snapEvery === 0) this.broadcast();
  }

  updateCamera() {
    const alive = this.alivePlayers();
    if (!alive.length) return;
    const lead = Math.min(...alive.map(p => p.y));
    const rear = Math.max(...alive.map(p => p.y));
    // near the boss arena the camera eases toward the top so the boss is fully on screen
    const k = Math.max(0, Math.min(1, (lead - 300) / 300));
    const target = lead - VIEW_H * (CAM_LEAD * k + (1 - k));
    const rearLimit = rear + JEEP_R + 6 - VIEW_H;
    this.camY = Math.max(this.L.minCam || 0, Math.min(this.camY, Math.max(target, rearLimit)));
  }

  activateSpawns() {
    while (this.nextSpawn < this.spawns.length) {
      const s = this.spawns[this.nextSpawn];
      const trigger = s.type === 'wave' ? this.camY <= s.y : s.y >= this.camY - 40;
      if (!trigger) break;
      this.nextSpawn++;
      if (s.type === 'wave') {
        const n = Math.max(1, Math.round(s.n * this.D.wave));
        for (let i = 0; i < n; i++) {
          let x, y;
          if (s.side === 'left') { x = -6; y = this.camY + 30 + this.R() * (VIEW_H - 70); }
          else if (s.side === 'right') { x = VIEW_W + 6; y = this.camY + 30 + this.R() * (VIEW_H - 70); }
          else { x = 20 + this.R() * (VIEW_W - 40); y = this.camY - 8 - this.R() * 30; }
          this.addEnemy(T.soldier, x, y);
        }
      } else if (s.type === 'boss') {
        const boss = this.addEnemy(T.boss, s.x, s.y);
        boss.turrets = s.turrets.map(tx => {
          const t = this.addEnemy(T.bossTurret, tx, s.y + 56);
          t.parent = boss.id; return t.id;
        });
      } else if (s.type === 'boss2') {
        const boss = this.addEnemy(T.boss2, s.x, s.y);
        boss.dir = 1;
        boss.turrets = [-34, 34].map(ox => {
          const t = this.addEnemy(T.bossTurret, s.x + ox, s.y - 4);
          t.parent = boss.id; t.ox = ox; t.oy = -4; return t.id;
        });
      } else {
        this.addEnemy(T[s.type], s.x, s.y, s);
      }
    }
  }

  addEnemy(type, x, y, s = {}) {
    const id = this.nid++;
    const base = { [T.soldier]: 1, [T.turret]: 6, [T.tank]: 10, [T.prison]: 4, [T.bossTurret]: 12 }[type];
    const hp = isBossType(type) ? this.D.bossHp : type === T.soldier || type === T.prison ? base : Math.ceil(base * this.D.hp);
    const e = {
      id, type, x, y, hp, maxHp: hp, a: Math.PI / 2,
      cd: (1 + this.R() * 1.5) * this.D.cd, t: 0, born: this.time,
      vx: 0, vy: 0, pows: s.pows || 0, flash: s.flash || 0,
      patrol: s.patrol || null, dir: this.R() < 0.5 ? -1 : 1, spawnCd: 4,
    };
    this.enemies.set(id, e);
    return e;
  }

  // ---------- players ----------
  updatePlayer(p, solids) {
    if (!p.alive) {
      if (p.lives > 0 && p.respawnAt && this.time >= p.respawnAt) this.respawn(p);
      p.inputQ.length = 0;
      return;
    }
    const ox = p.x, oy = p.y;
    if (p.isBot) {
      p.last = normInput(...botInput(this, p));
      stepJeep(p, p.last[0], p.last[1], this.camY, solids);
      // the bot holds the trigger whenever an enemy is on screen (never during the tutorial)
      p.firing = !this.tut && [...this.enemies.values()].some(e => this.inView(e.x, e.y, -4) && !this.shielded(e));
    } else {
      let n = p.inputQ.length > 4 ? 2 : 1;
      let used = false;
      while (n-- > 0 && p.inputQ.length) {
        const inp = p.inputQ.shift();
        p.last = inp.d; p.ack = inp.seq; p.firing = inp.f; used = true;
        stepJeep(p, inp.d[0], inp.d[1], this.camY, solids);
      }
      if (!used) stepJeep(p, p.last[0], p.last[1], this.camY, solids);
      if (this.tut) this.tut.moved += Math.hypot(p.x - ox, p.y - oy);
    }
    p.y = Math.min(p.y, this.camY + VIEW_H - JEEP_R - 2);

    // run over soldiers
    for (const e of this.enemies.values()) {
      if (e.type === T.soldier && dist2(p.x, p.y, e.x, e.y) < 11 * 11) this.killEnemy(e, p, true);
    }
    this.fire(p);

    // deliver POWs at helipads
    if (p.carry > 0) {
      for (let i = 0; i < this.L.helipads.length; i++) {
        const h = this.L.helipads[i];
        if (dist2(p.x, p.y, h.x, h.y) < 24 * 24) {
          const n = p.carry;
          p.score += n * SCORE.pow; p.rescued += n; p.carry = 0;
          // every RESCUE_PER_UPGRADE rescued POWs upgrades the gun by one level
          p.rescueProg += n;
          while (p.rescueProg >= RESCUE_PER_UPGRADE) {
            p.rescueProg -= RESCUE_PER_UPGRADE;
            if (p.weapon < MAX_WEAPON) { p.weapon++; this.events.push(['u', p.slot, p.weapon]); }
            else p.score += 500;
          }
          this.events.push(['d', i, n, p.slot]);
        }
      }
    }
  }

  // auto-aim: nearest shootable target in range, targets ahead of the jeep count as closer
  aimTarget(p) {
    let best = null, bs = Infinity;
    for (const e of this.enemies.values()) {
      if (this.shielded(e) || !this.inView(e.x, e.y, -4)) continue;
      const d = distToEntity(p.x, p.y, e.type, e.x, e.y);
      if (d > AUTO_AIM_RANGE) continue;
      const off = Math.abs(Math.atan2(Math.sin(Math.atan2(e.y - p.y, e.x - p.x) - p.a), Math.cos(Math.atan2(e.y - p.y, e.x - p.x) - p.a)));
      const sc = d * (1 + off * 0.35) * (e.type === T.prison ? 1.6 : 1);
      if (sc < bs) { bs = sc; best = e; }
    }
    return best;
  }

  // main gun: fires along the jeep heading, or at the nearest target when auto-aim is on
  fire(p) {
    p.mgCd -= DT; p.sCd -= DT; p.lCd -= DT;
    const tgt = p.autoAim && !(this.tut && this.tut.step === 0) ? this.aimTarget(p) : null;
    if (!p.firing && !tgt) return;   // manual: hold the right half; auto-aim: also fires by itself at targets
    const g = GUN[p.weapon];
    const aim = tgt ? Math.atan2(tgt.y - p.y, tgt.x - p.x) : p.a;
    p.aim = aim;
    const ca = Math.cos(aim), sa = Math.sin(aim), nx = -sa, ny = ca;
    if (p.mgCd <= 0) {
      p.mgCd = g.rate * RATE_MULT ** p.rate;
      for (const [da, off] of g.shots) {
        const a = aim + da, id = this.nid++;
        this.bullets.set(id, { id, kind: g.big ? B.big : B.mg, dmg: g.dmg, owner: p.slot,
          x: p.x + ca * 13 + nx * off, y: p.y + sa * 13 + ny * off,
          vx: Math.cos(a) * BULLET_SPEED, vy: Math.sin(a) * BULLET_SPEED, life: BULLET_RANGE / BULLET_SPEED });
      }
    }
    if (g.shell && p.sCd <= 0) {
      p.sCd = g.shell.cd * RATE_MULT ** p.rate;
      const id = this.nid++;
      this.bullets.set(id, { id, kind: B.missile, x: p.x + ca * 8, y: p.y + sa * 8, vx: ca * 220, vy: sa * 220,
        life: 0.95, blast: g.shell.blast, dmg: g.shell.dmg, owner: p.slot });
    }
    if (g.laser && p.lCd <= 0) {
      p.lCd = g.laser.cd * RATE_MULT ** p.rate;
      const id = this.nid++;
      this.bullets.set(id, { id, kind: B.laser, x: p.x + ca * 10, y: p.y + sa * 10, vx: ca * 420, vy: sa * 420,
        life: 0.6, dmg: g.laser.dmg, owner: p.slot, hitSet: new Set() });
    }
  }

  // soft=true: MG prefers soldiers; soft=false: explosive prefers hard targets
  pickTarget(p, range, soft) {
    let best = null, bs = Infinity;
    for (const e of this.enemies.values()) {
      if (this.shielded(e)) continue;
      if (!this.inView(e.x, e.y, 4)) continue;
      const d = distToEntity(p.x, p.y, e.type, e.x, e.y);
      if (d > range) continue;
      const hard = HARD.has(e.type);
      let score = d;
      if (soft) { if (hard) score += 1000; }
      else if (!hard) score += 60;
      if (score < bs) { bs = score; best = e; }
    }
    return best;
  }

  respawn(p) {
    const mate = this.players.find(q => q !== p && q.alive);
    const solids = this.L.blockers.concat(this.dynBlockers());
    const baseX = mate ? mate.x : VIEW_W / 2;
    const baseY = mate ? Math.min(mate.y + 30, this.camY + VIEW_H - 20) : this.camY + VIEW_H - 40;
    const tries = [[0, 0], [-30, 0], [30, 0], [0, -30], [-50, -20], [50, -20], [-80, 0], [80, 0], [0, -60], [-90, -50], [90, -50]];
    let spot = [VIEW_W / 2, this.camY + VIEW_H - 40];
    for (const [ox, oy] of tries) {
      const x = Math.max(12, Math.min(VIEW_W - 12, baseX + ox)), y = Math.max(this.camY + 20, Math.min(this.camY + VIEW_H - 12, baseY + oy));
      if (!collidesAny(x, y, JEEP_R + 2, solids)) { spot = [x, y]; break; }
    }
    p.x = spot[0]; p.y = spot[1]; p.a = -Math.PI / 2;
    p.alive = true; p.invulnUntil = this.time + INVULN_MS / 1000; p.respawnAt = 0;
    p.mgCd = 0.3;
    this.events.push(['r', p.slot]);
  }

  killPlayer(p) {
    if (!p.alive || this.time < p.invulnUntil) return;
    if (this.time < p.shieldUntil) { this.events.push(['h', Math.round(p.x), Math.round(p.y)]); return; }
    p.alive = false;
    p.lives--;
    p.carry = 0;
    // gun upgrades last until death
    p.weapon = 1; p.rate = 0; p.shieldUntil = 0;
    p.respawnAt = p.lives > 0 ? this.time + RESPAWN_MS / 1000 : 0;
    this.events.push(['x', Math.round(p.x), Math.round(p.y), 2], ['k', p.slot]);
  }

  // ---------- enemies ----------
  updateEnemy(e) {
    e.t += DT;
    const tgt = this.nearestPlayer(e.x, e.y);
    const visible = this.inView(e.x, e.y, -2);
    const D = this.D;
    switch (e.type) {
      case T.soldier: {
        e.cd -= DT;
        if (e.stopT > 0) { e.stopT -= DT; break; }
        if (tgt && (!e.dirT || e.dirT <= 0)) {
          const a = Math.atan2(tgt.y - e.y, tgt.x - e.x) + (this.R() - 0.5) * 1.4;
          const sp = 28 * D.soldierSpd;
          e.vx = Math.cos(a) * sp; e.vy = Math.sin(a) * sp; e.dirT = 0.8 + this.R();
          e.a = a;
        }
        e.dirT -= DT;
        const solids = this.L.blockers;
        const nx = e.x + e.vx * DT, ny = e.y + e.vy * DT;
        if (!collidesAny(nx, e.y, 4, solids)) e.x = nx; else e.dirT = 0;
        if (!collidesAny(e.x, ny, 4, solids)) e.y = ny; else e.dirT = 0;
        if (tgt && visible && e.cd <= 0 && this.time - e.born > 1) {
          this.ebullet(e.x, e.y, tgt.x, tgt.y, 95);
          e.cd = (1.8 + this.R() * 1.8) * D.cd; e.stopT = 0.4;
        }
        break;
      }
      case T.turret:
      case T.bossTurret: {
        if (e.parent && e.ox !== undefined) {
          const par = this.enemies.get(e.parent);
          if (par) { e.x = par.x + e.ox; e.y = par.y + e.oy; }
        }
        if (!tgt) break;
        const want = Math.atan2(tgt.y - e.y, tgt.x - e.x);
        const da = ((want - e.a + Math.PI * 3) % (Math.PI * 2)) - Math.PI;
        e.a += Math.max(-2.2 * DT, Math.min(2.2 * DT, da));
        e.cd -= DT;
        if (visible && e.cd <= 0 && Math.abs(da) < 0.3) {
          const x = e.x + Math.cos(e.a) * 10, y = e.y + Math.sin(e.a) * 10;
          this.ebullet(x, y, x + Math.cos(e.a), y + Math.sin(e.a), 100, B.ebullet, 0, false);
          e.cd = (e.type === T.bossTurret ? 1.5 + this.R() * 0.6 : 1.9 + this.R() * 0.8) * D.cd;
          // hardest stage: turrets fire short bursts
          if (this.stage === 3 && this.R() < 0.2) e.cd = 0.3;
        }
        break;
      }
      case T.tank: {
        if (e.patrol && visible) {
          const nx = e.x + e.dir * 18 * DT;
          const fp = footprint(T.tank, nx, e.y);
          const blockedByJeep = this.players.some(p => p.alive && Math.abs(p.x - nx) < 18 && Math.abs(p.y - e.y) < 19);
          if (nx < e.patrol[0] || nx > e.patrol[1] || blockedByJeep || this.L.blockers.some(b => fp.x < b.x + b.w && fp.x + fp.w > b.x && fp.y < b.y + b.h && fp.y + fp.h > b.y)) e.dir *= -1;
          else e.x = nx;
        }
        if (!tgt) break;
        e.a = Math.atan2(tgt.y - e.y, tgt.x - e.x);
        e.cd -= DT;
        if (visible && e.cd <= 0) {
          this.ebullet(e.x + Math.cos(e.a) * 12, e.y + Math.sin(e.a) * 12, tgt.x, tgt.y, 80, B.eshell);
          if (this.stage === 3) this.ebullet(e.x, e.y, tgt.x, tgt.y, 80, B.eshell, 0.25);
          e.cd = (2.2 + this.R()) * D.cd;
        }
        break;
      }
      case T.boss: {
        if (!visible && this.camY > 40) break;
        const sh = this.shielded(e);
        e.cd -= DT; e.spawnCd -= DT;
        if (tgt && e.cd <= 0) {
          const n = (sh ? 3 : 7) + (this.stage === 3 ? 2 : 0);
          for (let i = 0; i < n; i++) this.ebullet(e.x, e.y + 40, tgt.x, tgt.y, 85, B.eshell, (i - (n - 1) / 2) * 0.22, false);
          e.cd = (sh ? 3.2 : 2.2) * D.cd;
        }
        if (e.spawnCd <= 0) {
          this.addEnemy(T.soldier, e.x - 20 + this.R() * 40, e.y + 50);
          e.spawnCd = (sh ? 5 : 3.5) * D.cd;
        }
        break;
      }
      case T.boss2: {
        if (!visible && this.camY > 40) break;
        // war machine rolls side to side
        e.x += e.dir * 22 * DT;
        const lo = VIEW_W / 2 - 75, hi = VIEW_W / 2 + 75;
        if (e.x < lo || e.x > hi) { e.dir *= -1; e.x = Math.max(lo, Math.min(hi, e.x)); }
        const sh = this.shielded(e);
        e.cd -= DT; e.spawnCd -= DT;
        if (tgt && e.cd <= 0) {
          if (sh) { for (let i = -1; i <= 1; i++) this.ebullet(e.x, e.y + 28, tgt.x, tgt.y, 85, B.eshell, i * 0.35, false); e.cd = 3.2 * D.cd; }
          else {
            for (let i = -1; i <= 1; i++) this.ebullet(e.x, e.y + 28, tgt.x, tgt.y, 85, B.eshell, i * 0.3, false);
            e.burst = 2; e.cd = 2.6 * D.cd;
          }
        }
        if (e.burst > 0 && tgt && (this.tick % 6 === 0)) { e.burst--; this.ebullet(e.x, e.y + 20, tgt.x, tgt.y, 100); }
        if (e.spawnCd <= 0) { this.addEnemy(T.soldier, e.x, e.y + 36); e.spawnCd = 4.5 * D.cd; }
        break;
      }
    }
  }

  damage(e, dmg, p) {
    if (this.shielded(e)) { this.events.push(['h', Math.round(e.x), Math.round(e.y + 20)]); return; }
    e.hp -= dmg;
    e.hit = this.tick;
    if (e.hp <= 0) this.killEnemy(e, p);
  }

  killEnemy(e, p, runOver = false) {
    if (!this.enemies.has(e.id)) return;
    this.enemies.delete(e.id);
    if (p) { p.score += SCORE[TYPE_NAME[e.type]] || 0; if (e.type !== T.prison) p.kills++; }
    const size = e.type === T.soldier ? 0 : isBossType(e.type) ? 3 : 1;
    this.events.push(['x', Math.round(e.x), Math.round(e.y), size]);
    if (runOver) this.events.push(['s', Math.round(e.x), Math.round(e.y)]);
    if (e.type === T.prison) {
      for (let i = 0; i < e.pows; i++) {
        const id = this.nid++;
        const a = (i / e.pows) * Math.PI * 2;
        this.pows.set(id, { id, x: e.x + Math.cos(a) * 6, y: e.y + 16 + Math.sin(a) * 4, flash: i < e.flash, wander: a, t: 0 });
      }
    } else if (!isBossType(e.type)) this.maybeDrop(e);
    if (isBossType(e.type)) {
      this.bossDeadAt = this.time;
      for (const x of this.enemies.values()) this.events.push(['x', Math.round(x.x), Math.round(x.y), 1]);
      this.enemies.clear();
      for (const b of this.bullets.values()) if (b.enemy) this.bullets.delete(b.id);
    }
  }

  // ---------- items ----------
  maybeDrop(e) {
    const chance = ({ [T.soldier]: 0.04, [T.turret]: 0.3, [T.tank]: 0.4, [T.bossTurret]: 0.5 }[e.type] || 0) * this.D.drop;
    if (this.R() >= chance) return;
    const canLife = this.players.some(p => p.lives < MAX_LIVES);
    const table = [[ITEM.rapid, 26], [ITEM.shield, 18], [ITEM.bomb, 16], [ITEM.wup, 22], [ITEM.life, canLife ? 10 : 0]];
    let r = this.R() * table.reduce((s, t) => s + t[1], 0), type = ITEM.rapid;
    for (const [t, w] of table) { if ((r -= w) < 0) { type = t; break; } }
    const id = this.nid++;
    this.items.set(id, { id, type, x: Math.max(10, Math.min(VIEW_W - 10, e.x)), y: e.y, t: 0 });
  }

  updateItems() {
    for (const it of [...this.items.values()]) {
      it.t += DT;
      if (it.t > ITEM_LIFE) { this.items.delete(it.id); continue; }
      for (const p of this.players) {
        if (!p.alive || dist2(p.x, p.y, it.x, it.y) > 13 * 13) continue;
        this.items.delete(it.id);
        this.applyItem(p, it.type);
        break;
      }
    }
  }

  applyItem(p, type) {
    switch (type) {
      case ITEM.rapid: if (p.rate < RATE_MAX) p.rate++; else p.score += 500; break;
      case ITEM.shield: p.shieldUntil = this.time + SHIELD_SEC; break;
      case ITEM.life: p.lives = Math.min(MAX_LIVES, p.lives + 1); break;
      case ITEM.wup:
        if (p.weapon < MAX_WEAPON) { p.weapon++; this.events.push(['u', p.slot, p.weapon]); }
        else p.score += 500;
        break;
      case ITEM.bomb: {
        for (const b of this.bullets.values()) if (b.enemy && this.inView(b.x, b.y, 10)) this.bullets.delete(b.id);
        for (const e of [...this.enemies.values()]) if (this.inView(e.x, e.y, 6) && e.type !== T.prison) this.damage(e, 6, p);
        this.events.push(['B', p.slot]);
        break;
      }
    }
    this.events.push(['i', p.slot, type]);
  }

  explode(x, y, r, p, dmg = 3) {
    this.events.push(['x', Math.round(x), Math.round(y), r > 24 ? 1 : 0]);
    for (const e of [...this.enemies.values()]) {
      if (distToEntity(x, y, e.type, e.x, e.y) <= r) this.damage(e, dmg, p);
    }
  }

  homingTarget(b) {
    let best = null, bd = 200 * 200;
    for (const e of this.enemies.values()) {
      if (this.shielded(e) || !this.inView(e.x, e.y, 4)) continue;
      const d = dist2(b.x, b.y, e.x, e.y) * (HARD.has(e.type) ? 0.6 : 1);
      if (d < bd) { bd = d; best = e; }
    }
    return best;
  }

  updateBullets() {
    for (const b of [...this.bullets.values()]) {
      b.life -= DT;
      if (b.kind === B.grenade) {
        b.t += DT;
        const k = Math.min(1, b.t / b.dur);
        b.x = b.sx + (b.tx - b.sx) * k; b.y = b.sy + (b.ty - b.sy) * k;
        b.z = Math.sin(k * Math.PI) * 18;
        if (k >= 1) { this.bullets.delete(b.id); this.explode(b.x, b.y, b.blast, this.players[b.owner]); }
        continue;
      }
      if (b.kind === B.homing) {
        const t = this.homingTarget(b);
        if (t) {
          const cur = Math.atan2(b.vy, b.vx), want = Math.atan2(t.y - b.y, t.x - b.x);
          const da = ((want - cur + Math.PI * 3) % (Math.PI * 2)) - Math.PI;
          const na = cur + Math.max(-6 * DT, Math.min(6 * DT, da)), sp = Math.hypot(b.vx, b.vy);
          b.vx = Math.cos(na) * sp; b.vy = Math.sin(na) * sp;
        }
      }
      b.x += b.vx * DT; b.y += b.vy * DT;
      let dead = b.life <= 0 || !this.inView(b.x, b.y, 20);
      const explosive = b.kind === B.missile || b.kind === B.homing;
      if (b.kind === B.laser) {
        // piercing: damage each enemy once, ignores walls
        if (!dead) for (const e of [...this.enemies.values()]) {
          if (b.hitSet.has(e.id) || distToEntity(b.x, b.y, e.type, e.x, e.y) > 4) continue;
          b.hitSet.add(e.id);
          this.events.push(['h', Math.round(b.x), Math.round(b.y)]);
          this.damage(e, b.dmg || 3, this.players[b.owner]);
        }
        if (dead) this.bullets.delete(b.id);
        continue;
      }
      if (!dead && this.solid.some(s => pointInRect(b.x, b.y, s))) {
        dead = true;
        if (explosive) this.explode(b.x, b.y, b.blast, this.players[b.owner], b.dmg);
        else this.events.push(['h', Math.round(b.x), Math.round(b.y)]);
      }
      if (!dead && b.enemy) {
        for (const p of this.players) {
          if (p.alive && dist2(b.x, b.y, p.x, p.y) < (JEEP_R + (b.kind === B.eshell ? 3 : 1)) ** 2) {
            dead = true;
            this.killPlayer(p);
            break;
          }
        }
      } else if (!dead) {
        for (const e of this.enemies.values()) {
          if (this.shielded(e)) continue; // shots pass over a shielded boss body to reach its turrets
          if (distToEntity(b.x, b.y, e.type, e.x, e.y) <= 1) {
            dead = true;
            const p = this.players[b.owner];
            if (explosive) this.explode(b.x, b.y, b.blast, p, b.dmg);
            else {
              if (e.type !== T.soldier) this.events.push(['h', Math.round(b.x), Math.round(b.y)]);
              this.damage(e, b.dmg || 1, p);
            }
            break;
          }
        }
      }
      if (dead) this.bullets.delete(b.id);
    }
  }

  updatePows() {
    for (const w of [...this.pows.values()]) {
      w.t += DT;
      let best = null, bd = 140 * 140;
      for (const p of this.players) {
        if (!p.alive || p.carry >= MAX_CARRY) continue;
        const d = dist2(w.x, w.y, p.x, p.y);
        if (d < bd) { bd = d; best = p; }
      }
      let vx, vy;
      if (best && w.t > 0.6) {
        const d = Math.sqrt(bd) || 1;
        vx = (best.x - w.x) / d * 34; vy = (best.y - w.y) / d * 34;
        if (d < 11) {
          best.carry++;
          this.pows.delete(w.id);
          this.events.push(['p', best.slot]);
          if (w.flash && best.weapon < MAX_WEAPON) { best.weapon++; this.events.push(['u', best.slot, best.weapon]); }
          else if (w.flash) best.score += 500;
          continue;
        }
      } else {
        w.wander += (this.R() - 0.5) * 0.6;
        vx = Math.cos(w.wander) * 10; vy = Math.sin(w.wander) * 10;
      }
      const nx = w.x + vx * DT, ny = w.y + vy * DT;
      if (!collidesAny(nx, w.y, 3, this.L.blockers)) w.x = Math.max(4, Math.min(VIEW_W - 4, nx));
      if (!collidesAny(w.x, ny, 3, this.L.blockers)) w.y = ny;
    }
  }

  cleanup() {
    const bottom = this.camY + VIEW_H + 70;
    for (const e of this.enemies.values()) if (e.y > bottom && !isBossType(e.type) && !this.tut) this.enemies.delete(e.id);
    for (const w of this.pows.values()) if (w.y > bottom) this.pows.delete(w.id);
    for (const it of this.items.values()) if (it.y > bottom) this.items.delete(it.id);
  }

  checkEnd() {
    if (this.bossDeadAt && this.time - this.bossDeadAt > 3) {
      if (this.stage < STAGES - 1) {
        const bonus = 2000 * (this.stage + 1);
        this.players.forEach(p => { if (p.lives > 0 || p.alive) p.score += bonus; });
        this.phase = 'clear'; this.clearT = 4; this.bossDeadAt = 0;
        this.events.push(['c', this.stage, bonus]);
        return;
      }
      return this.finish(true);
    }
    if (this.players.every(p => !p.alive && p.lives <= 0) && !this.lifeReq) {
      if (!this.loseAt) this.loseAt = this.time;
      if (this.time - this.loseAt > 2) return this.finish(false);
    }
  }

  progress() { return Math.round((1 - this.camY / (LEVEL_LEN - VIEW_H)) * 100); }

  finish(win) {
    if (this.ended) return;
    this.broadcast();
    this.ended = true;
    const msg = {
      t: 'end', win, time: Math.round(this.time),
      stage: this.stage, stages: STAGES - 1, progress: win ? 100 : this.progress(),
      players: this.players.map(p => ({ name: p.name, bot: p.isBot, score: p.score, rescued: p.rescued, kills: p.kills })),
    };
    this.players.forEach((p, i) => this.send(i, msg));
    this.onEnd(this, msg);
  }

  // ---------- networking ----------
  startMsg(slot) {
    return { t: 'start', you: slot, room: this.id, stage: this.stage, players: this.players.map(p => ({ name: p.name, bot: p.isBot })) };
  }

  snapshot() {
    const r = v => Math.round(v * 10) / 10, ra = v => Math.round(v * 100) / 100;
    return {
      t: 's', k: this.tick, cam: r(this.camY), sg: this.stage, ph: this.phase === 'clear' ? 1 : 0, lr: this.lifeReq ? [this.lifeReq.from, this.lifeReq.to, Math.max(0, Math.ceil(10 - (this.time - this.lifeReq.t)))] : null, tu: this.tut ? [this.tut.step, this.tut.sub, ...(this.tut.mark ? this.tut.mark.map(v => Math.round(v)) : [-1, -1])] : null,
      ack: this.players.map(p => p.ack),
      p: this.players.map(p => [r(p.x), r(p.y), ra(p.a), p.alive ? 1 : 0,
        this.time < p.invulnUntil ? 1 : 0, p.lives, p.weapon, p.carry, p.score, p.isBot ? 1 : 0,
        p.rate, Math.max(0, Math.ceil(p.shieldUntil - this.time)), p.rescueProg]),
      e: [...this.enemies.values()].map(e => [e.id, e.type, r(e.x), r(e.y), ra(e.a),
        ra(e.hp / e.maxHp), e.hit && this.tick - e.hit < 4 ? 1 : 0, this.shielded(e) ? 1 : 0]),
      b: [...this.bullets.values()].map(b => [b.id, b.kind, r(b.x), r(b.y), r(b.z || 0), b.vx !== undefined ? ra(Math.atan2(b.vy, b.vx)) : 0]),
      w: [...this.pows.values()].map(w => [w.id, r(w.x), r(w.y), w.flash ? 1 : 0]),
      i: [...this.items.values()].map(it => [it.id, it.type, r(it.x), r(it.y), it.t > ITEM_LIFE - 3 ? 1 : 0]),
      ev: this.events,
    };
  }

  broadcast() {
    const s = this.snapshot();
    this.events = [];
    const json = JSON.stringify(s);
    this.players.forEach((p, i) => { if (!p.isBot) this.send(i, json); });
  }
}
