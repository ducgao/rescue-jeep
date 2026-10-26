// Shared constants (client + server). World coords: x right, y DOWN.
// Level starts at the bottom (y = LEVEL_LEN) and progresses upward to y = 0.
// landscape playfield (the level scrolls upward)
export const VIEW_W = 360;
export const VIEW_H = 240;
export const TICK_RATE = 30;
export const DT = 1 / TICK_RATE;
export const SNAP_EVERY = 2;          // snapshot every 2 ticks => 15 Hz
export const LEVEL_LEN = 6000;
// camera keeps the leading jeep this far down the screen (0 = top, 1 = bottom) so you see more of what's ahead
export const CAM_LEAD = 0.7;

export const JEEP_R = 7;
export const JEEP_SPEED = 88;
export const LIVES = 3;
export const MAX_CARRY = 8;
export const RESPAWN_MS = 1500;
export const INVULN_MS = 2200;

export const MATCH_WAIT_MS = 10000;

export const MG_RATE = 0.16;          // seconds between MG shots
export const MG_SPEED = 280;
export const MG_RANGE = 150;

// Main gun fires straight ahead along the jeep's heading. Levels persist until the jeep dies.
// shots: [angle offset (rad), sideways offset (px)]
export const GUN = {
  1: { rate: 0.15, dmg: 1, big: false, shots: [[0, 0]] },
  2: { rate: 0.16, dmg: 2, big: true, shots: [[0, 0]] },
  3: { rate: 0.16, dmg: 2, big: true, shots: [[0, -4], [0, 4]] },
  4: { rate: 0.15, dmg: 2, big: true, shots: [[-0.17, 0], [0, 0], [0.17, 0]] },
  5: { rate: 0.15, dmg: 2, big: true, shots: [[-0.2, 0], [0, 0], [0.2, 0]], shell: { cd: 0.7, blast: 22, dmg: 4 } },
  6: { rate: 0.15, dmg: 2, big: true, shots: [[-0.26, 0], [-0.1, 0], [0.1, 0], [0.26, 0]], laser: { cd: 0.32, dmg: 3 } },
};
export const MAX_WEAPON = 6;
export const BULLET_SPEED = 290;
export const BULLET_RANGE = 200;
export const RATE_MAX = 3;          // "R" item stacks, each makes the gun fire faster
export const RATE_MULT = 0.8;
export const RESCUE_PER_UPGRADE = 5;  // every 5 POWs delivered to a helicopter = +1 gun level

export const STAGES = 4;               // index 0 = tutorial, 1..3 = real stages
// per-stage difficulty: cd = enemy fire-cooldown multiplier (higher = slower), bspd = enemy bullet speed,
// hp = enemy hp, wave = soldier wave size, aim = aim error (radians), drop = item drop multiplier
export const DIFF = [
  { name: 'HUẤN LUYỆN', cd: 99, bspd: 0.8, hp: 1, wave: 0, aim: 0.5, soldierSpd: 0.6, bossHp: 1, drop: 0 },
  { name: 'ĐỒNG CỎ', cd: 1.1, bspd: 0.95, hp: 0.9, wave: 1.0, aim: 0.12, soldierSpd: 1.0, bossHp: 100, drop: 1.1 },
  { name: 'SA MẠC', cd: 0.95, bspd: 1.08, hp: 1.1, wave: 1.15, aim: 0.07, soldierSpd: 1.1, bossHp: 170, drop: 1.0 },
  { name: 'CĂN CỨ TUYẾT', cd: 0.85, bspd: 1.15, hp: 1.2, wave: 1.25, aim: 0.05, soldierSpd: 1.2, bossHp: 180, drop: 0.9 },
];

export const ITEM = { rapid: 0, shield: 1, life: 2, bomb: 3, wup: 4 };
export const ITEM_LIFE = 12;
export const SHIELD_SEC = 8;
export const MAX_LIVES = 5;

export const SCORE = { soldier: 50, turret: 200, tank: 300, prison: 100, pow: 100, bossTurret: 500, boss: 5000, boss2: 8000 };
