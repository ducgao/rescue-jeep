// Offline build: runs the authoritative Room + bot inside the browser, no server.
import { makeLocal } from './local.js';

// dev: ?stage=2&start=700 starts stage 2 near the boss
const qs = new URLSearchParams(location.search);
if ((qs.get('start') || qs.get('stage') || qs.get('lives')) && typeof process === 'undefined') {
  window.process = { env: { RJ_START_Y: qs.get('start') || '', RJ_STAGE: qs.get('stage') || '', RJ_LIVES: qs.get('lives') || '' } };
}

window.RJ_LOCAL = makeLocal;

const sub = document.querySelector('#menu .sub');
if (sub) sub.textContent = 'Bản offline · chơi cùng BOT';
import('./main.js');
