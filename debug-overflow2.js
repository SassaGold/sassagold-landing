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
  
  await page.screenshot({ path: '/tmp/full-mobile.png', fullPage: true });
  
  // Try checking with scrollX > 0
  const result = await page.evaluate(function() {
    // Scroll to see what's off-screen
    var maxRight = 0;
    var culprit = null;
    var all = Array.from(document.querySelectorAll('*'));
    all.forEach(function(el) {
      var rect = el.getBoundingClientRect();
      // getBoundingClientRect is relative to viewport, not document
      // Add scrollX to get document position
      var docRight = rect.right + window.scrollX;
      if (docRight > maxRight) {
        maxRight = docRight;
        culprit = {
          tag: el.tagName,
          cls: (el.className||'').toString().slice(0,50),
          id: el.id,
          docRight: Math.round(docRight),
          viewportRight: Math.round(rect.right),
          left: Math.round(rect.left),
          width: Math.round(rect.width),
          text: (el.textContent||'').trim().slice(0,60)
        };
      }
    });
    return { docScrollWidth: document.documentElement.scrollWidth, maxRight: Math.round(maxRight), culprit: culprit };
  });
  console.log(JSON.stringify(result, null, 2));
  
  await ctx.close();
  await browser.close();
})().catch(function(e) { console.error(e.message); });
