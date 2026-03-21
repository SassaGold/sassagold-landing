const { chromium } = require('playwright');
(async () => {
  const browser = await chromium.launch({ 
    executablePath: '/home/runner/.cache/ms-playwright/chromium-1208/chrome-linux64/chrome',
    args: ['--no-sandbox', '--disable-setuid-sandbox']
  });
  const ctx = await browser.newContext({ viewport: { width: 375, height: 812 } });
  const page = await ctx.newPage();
  await page.goto('file:///home/runner/work/sassagold-landing/sassagold-landing/index.html');
  await page.waitForTimeout(2000);
  
  // Try taking screenshot of full width
  await page.setViewportSize({ width: 530, height: 812 });
  await page.waitForTimeout(500);
  await page.screenshot({ path: '/tmp/index-530px.png' });
  
  // Scroll right to see overflow
  await page.setViewportSize({ width: 375, height: 812 });
  await page.evaluate(function() { window.scrollTo(155, 0); });
  await page.screenshot({ path: '/tmp/index-scrolled-right.png' });
  
  // Check what's visible when scrolled 155px to the right
  const result = await page.evaluate(function() {
    var visible = [];
    Array.from(document.querySelectorAll('*')).forEach(function(el) {
      var rect = el.getBoundingClientRect();
      // Check if element is at the right edge of viewport when scrolled
      if (rect.left >= -10 && rect.left <= 50 && rect.width > 50) {
        visible.push({
          tag: el.tagName,
          cls: (el.className||'').toString().slice(0,40),
          left: Math.round(rect.left),
          right: Math.round(rect.right),
          top: Math.round(rect.top),
          text: (el.textContent||'').trim().slice(0,50)
        });
      }
    });
    return { scrollX: window.scrollX, visible: visible.slice(0, 15) };
  });
  console.log(JSON.stringify(result, null, 2));
  
  await ctx.close();
  await browser.close();
})().catch(function(e) { console.error(e.message); });
