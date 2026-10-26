const { chromium, devices } = require('playwright');
const OUT = process.argv[2] || '.';
(async () => {
  const browser = await chromium.launch();
  const dev = { viewport: { width: 844, height: 390 }, deviceScaleFactor: 2, isMobile: true, hasTouch: true };
  const errs = [];
  const mk = async (name) => {
    const ctx = await browser.newContext(dev);
    const page = await ctx.newPage();
    page.on('console', m => { if (m.type() === 'error') errs.push(name + ': ' + m.text()); });
    page.on('pageerror', e => errs.push(name + ' pageerror: ' + e.message));
    await page.goto('http://localhost:8080/');
    await page.fill('#name', name); await page.uncheck('#tut');
    return page;
  };
  // --- 1) two humans pair instantly
  const a = await mk('Duckie'), b = await mk('Friend');
  await a.click('#play'); await a.waitForTimeout(400);
  await a.screenshot({ path: OUT + '/0-wait.png' });
  const t0 = Date.now();
  await b.click('#play');
  await a.waitForFunction(() => window.__rj.state === 'play', null, { timeout: 5000 });
  await b.waitForFunction(() => window.__rj.state === 'play', null, { timeout: 5000 });
  console.log('paired in', Date.now() - t0, 'ms');
  await a.screenshot({ path: OUT + '/1-start.png' });
  // drive both up for a while
  await a.keyboard.down('ArrowUp'); await b.keyboard.down('ArrowUp');
  for (let i = 0; i < 6; i++) {
    await a.waitForTimeout(1500);
    await a.keyboard.down(i % 2 ? 'ArrowLeft' : 'ArrowRight'); await a.waitForTimeout(400); await a.keyboard.up(i % 2 ? 'ArrowLeft' : 'ArrowRight');
  }
  await a.screenshot({ path: OUT + '/2-play-a.png' });
  await b.screenshot({ path: OUT + '/2-play-b.png' });
  const st = await a.evaluate(() => ({ cam: window.__rj.latest.cam, p: window.__rj.latest.p, pred: window.__rj.pred, e: window.__rj.latest.e.length }));
  console.log('A state', JSON.stringify(st));
  // B disconnects -> bot takes over
  await b.close();
  await a.waitForTimeout(2500);
  await a.screenshot({ path: OUT + '/3-after-dc.png' });
  const bot = await a.evaluate(() => window.__rj.latest.p[1][9]);
  console.log('slot1 is bot after dc:', bot);
  await a.close();

  // --- 2) solo -> bot after 10s
  const c = await mk('Solo');
  const t1 = Date.now();
  await c.click('#play');
  await c.waitForTimeout(5000);
  await c.screenshot({ path: OUT + '/4-wait-5s.png' });
  await c.waitForFunction(() => window.__rj.state === 'play', null, { timeout: 8000 });
  console.log('bot match after', Date.now() - t1, 'ms');
  // simulate touch drag joystick via CDP touch
  const cdp = await c.context().newCDPSession(c);
  const touch = async (type, x, y) => cdp.send('Input.dispatchTouchEvent', { type, touchPoints: type === 'touchEnd' ? [] : [{ x, y, id: 1 }] });
  await touch('touchStart', 120, 300);
  for (let i = 0; i < 10; i++) { await touch('touchMove', 120 + i * 2, 300 - i * 6); await c.waitForTimeout(30); }
  await c.waitForTimeout(6000);
  await c.screenshot({ path: OUT + '/5-solo-touch.png' });
  await touch('touchEnd');
  const st2 = await c.evaluate(() => ({ cam: window.__rj.latest.cam, p: window.__rj.latest.p }));
  console.log('solo state', JSON.stringify(st2));
  console.log('ERRORS', errs);
  await browser.close();
})();
