const { chromium } = require('playwright');
(async () => {
  const browser = await chromium.launch({ 
    executablePath: '/home/runner/.cache/ms-playwright/chromium-1208/chrome-linux64/chrome',
    args: ['--no-sandbox']
  });
  const ctx = await browser.newContext({ viewport: { width: 375, height: 812 } });
  const page = await ctx.newPage();
  await page.goto('file:///tmp/index-debug.html');
  await page.waitForTimeout(2000);
  
  var sw = await page.evaluate(function() { return document.documentElement.scrollWidth; });
  console.log('Debug page scrollWidth:', sw);
  
  await page.screenshot({ path: '/tmp/index-debug.png', fullPage: false });
  
  // Scroll right and take screenshot
  await page.evaluate(function() { window.scrollTo(155, 0); });
  await page.screenshot({ path: '/tmp/index-debug-scrolled.png', fullPage: false });
  
  await ctx.close();
  await browser.close();
})().catch(function(e) { console.error(e.message); });
