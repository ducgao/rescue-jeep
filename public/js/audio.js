// Tiny WebAudio synth for retro SFX (no asset files).
let ac = null, master = null, muted = false, noiseBuf = null;

export function unlockAudio() {
  if (ac) { if (ac.state === 'suspended') ac.resume(); return; }
  try {
    ac = new (window.AudioContext || window.webkitAudioContext)();
    master = ac.createGain(); master.gain.value = muted ? 0 : 0.35; master.connect(ac.destination);
    musicGain = ac.createGain(); musicGain.gain.value = 0.55; musicGain.connect(master);
    mNext = ac.currentTime + 0.1;
    noiseBuf = ac.createBuffer(1, ac.sampleRate * 0.6, ac.sampleRate);
    const d = noiseBuf.getChannelData(0);
    for (let i = 0; i < d.length; i++) d[i] = Math.random() * 2 - 1;
  } catch { ac = null; }
}
export function setMuted(m) { muted = m; if (master) master.gain.value = m ? 0 : 0.35; }
export function isMuted() { return muted; }

function tone(type, f0, f1, dur, vol = 0.3, delay = 0) {
  const t = ac.currentTime + delay;
  const o = ac.createOscillator(), g = ac.createGain();
  o.type = type; o.frequency.setValueAtTime(f0, t); o.frequency.exponentialRampToValueAtTime(Math.max(20, f1), t + dur);
  g.gain.setValueAtTime(vol, t); g.gain.exponentialRampToValueAtTime(0.001, t + dur);
  o.connect(g); g.connect(master); o.start(t); o.stop(t + dur + 0.02);
}
function noise(dur, vol = 0.4, cutoff = 1200) {
  const t = ac.currentTime;
  const s = ac.createBufferSource(); s.buffer = noiseBuf;
  const f = ac.createBiquadFilter(); f.type = 'lowpass'; f.frequency.setValueAtTime(cutoff, t); f.frequency.exponentialRampToValueAtTime(80, t + dur);
  const g = ac.createGain(); g.gain.setValueAtTime(vol, t); g.gain.exponentialRampToValueAtTime(0.001, t + dur);
  s.connect(f); f.connect(g); g.connect(master); s.start(t); s.stop(t + dur);
}

export function sfx(name) {
  if (!ac || muted) return;
  switch (name) {
    case 'mg': tone('square', 900, 300, 0.035, 0.035); break;
    case 'laser': tone('sawtooth', 1800, 600, 0.08, 0.05); break;
    case 'launch': tone('sawtooth', 300, 900, 0.12, 0.08); break;
    case 'pop': noise(0.15, 0.25, 2200); break;
    case 'boom': noise(0.5, 0.6, 900); tone('sine', 120, 40, 0.4, 0.4); break;
    case 'squish': tone('square', 200, 60, 0.08, 0.15); break;
    case 'pickup': tone('square', 660, 990, 0.07, 0.15); tone('square', 990, 1320, 0.07, 0.15, 0.07); break;
    case 'deliver': [523, 659, 784, 1046].forEach((f, i) => tone('square', f, f, 0.1, 0.14, i * 0.09)); break;
    case 'upgrade': [392, 523, 659, 784, 1046].forEach((f, i) => tone('triangle', f, f * 1.01, 0.09, 0.22, i * 0.06)); break;
    case 'die': tone('sawtooth', 600, 50, 0.6, 0.25); noise(0.5, 0.5, 1500); break;
    case 'start': [392, 392, 523].forEach((f, i) => tone('square', f, f, 0.12, 0.15, i * 0.14)); break;
    case 'win': [523, 659, 784, 659, 784, 1046].forEach((f, i) => tone('square', f, f, 0.14, 0.15, i * 0.13)); break;
    case 'lose': [392, 330, 262, 196].forEach((f, i) => tone('triangle', f, f, 0.22, 0.2, i * 0.2)); break;
  }
}

// ---------------- background music: tiny chiptune sequencer ----------------
// Each track loops 4 bars of 8 eighth-notes. lead/bass are MIDI notes (0 = rest).
const bassFrom = roots => roots.flatMap(r => [r, r + 12, r, r + 12, r, r + 12, r + 7, r + 12]);
const TRACKS = {
  stage0: { bpm: 132, drums: 'khshkhsh', bass: bassFrom([45, 40, 41, 43]),
    lead: [69, 0, 72, 76, 74, 0, 72, 71, 69, 0, 64, 69, 72, 0, 71, 0, 65, 0, 69, 72, 76, 0, 74, 72, 71, 0, 67, 71, 76, 0, 0, 0] },
  stage1: { bpm: 140, drums: 'kh.hsh.h', bass: bassFrom([38, 38, 34, 33]),
    lead: [62, 0, 65, 0, 64, 0, 65, 0, 69, 70, 69, 65, 64, 0, 0, 0, 62, 0, 65, 67, 69, 0, 70, 73, 74, 73, 70, 69, 65, 64, 62, 0] },
  stage2: { bpm: 152, drums: 'khshkksh', bass: bassFrom([40, 36, 38, 35]),
    lead: [64, 67, 71, 67, 76, 0, 74, 71, 72, 71, 69, 67, 66, 0, 62, 0, 64, 67, 71, 74, 76, 79, 78, 76, 74, 72, 71, 69, 71, 0, 0, 0] },
  boss: { bpm: 168, drums: 'kkshkksh', bass: bassFrom([36, 36, 32, 31]),
    lead: [60, 63, 67, 63, 60, 63, 68, 63, 60, 63, 67, 63, 59, 62, 67, 62, 60, 63, 67, 72, 70, 67, 68, 67, 65, 63, 62, 63, 59, 0, 59, 0] },
};
let musicGain = null, mTrack = null, mName = '', mStep = 0, mNext = 0, mTimer = null;
const midi = n => 440 * Math.pow(2, (n - 69) / 12);

function mNote(type, freq, t, dur, vol) {
  const o = ac.createOscillator(), g = ac.createGain();
  o.type = type; o.frequency.setValueAtTime(freq, t);
  g.gain.setValueAtTime(0.0001, t); g.gain.linearRampToValueAtTime(vol, t + 0.008);
  g.gain.setValueAtTime(vol, t + dur * 0.6); g.gain.exponentialRampToValueAtTime(0.0001, t + dur);
  o.connect(g); g.connect(musicGain); o.start(t); o.stop(t + dur + 0.02);
}
function mDrum(kind, t) {
  if (kind === 'k') {
    const o = ac.createOscillator(), g = ac.createGain();
    o.type = 'sine'; o.frequency.setValueAtTime(150, t); o.frequency.exponentialRampToValueAtTime(45, t + 0.12);
    g.gain.setValueAtTime(0.5, t); g.gain.exponentialRampToValueAtTime(0.001, t + 0.14);
    o.connect(g); g.connect(musicGain); o.start(t); o.stop(t + 0.15);
    return;
  }
  const s = ac.createBufferSource(); s.buffer = noiseBuf;
  const f = ac.createBiquadFilter(); f.type = 'highpass'; f.frequency.value = kind === 's' ? 1200 : 6000;
  const g = ac.createGain(), d = kind === 's' ? 0.12 : 0.03;
  g.gain.setValueAtTime(kind === 's' ? 0.28 : 0.08, t); g.gain.exponentialRampToValueAtTime(0.001, t + d);
  s.connect(f); f.connect(g); g.connect(musicGain); s.start(t, Math.random() * 0.3); s.stop(t + d + 0.01);
}
function mSched() {
  if (!ac || !musicGain) return;
  if (!mTrack || muted) { mNext = ac.currentTime + 0.05; return; }
  if (mNext < ac.currentTime - 0.3) mNext = ac.currentTime + 0.03;
  const dt = 60 / mTrack.bpm / 2;
  while (mNext < ac.currentTime + 0.15) {
    const i = mStep % 32, t = mNext;
    if (mTrack.lead[i]) mNote('square', midi(mTrack.lead[i]), t, dt * 0.9, 0.055);
    if (mTrack.bass[i]) mNote('triangle', midi(mTrack.bass[i]), t, dt * 0.85, 0.16);
    const dch = mTrack.drums[i % 8];
    if (dch !== '.') mDrum(dch, t);
    mStep++; mNext += dt;
  }
}
// name: 'stage0' | 'stage1' | 'stage2' | 'boss' | '' (silence)
export function setMusic(name) {
  if (name === mName) return;
  mName = name; mTrack = TRACKS[name] || null; mStep = 0;
  if (ac && !musicGain) { musicGain = ac.createGain(); musicGain.gain.value = 0.55; musicGain.connect(master); }
  if (ac) mNext = ac.currentTime + 0.08;
  if (!mTimer) mTimer = setInterval(mSched, 25);
}
