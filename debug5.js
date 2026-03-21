const { chromium } = require('playwright');
(async () => {
  const browser = await chromium.launch({ 
    executablePath: '/home/runner/.cache/ms-playwright/chromium-1208/chrome-linux64/chrome',
    args: ['--no-sandbox', '--disable-setuid-sandbox']
  });
  
  var pages = ['index.html', 'about.html', 'features.html', 'screenshots.html', 'support.html'];
  
  for (var i = 0; i < pages.length; i++) {
    var p = pages[i];
    var ctx = await browser.newContext({ viewport: { width: 375, height: 812 } });
    var page = await ctx.newPage();
    await page.goto('file:///home/runner/work/sassagold-landing/sassagold-landing/' + p);
    await page.waitForTimeout(1500);
    var sw = await page.evaluate(function() { return document.documentElement.scrollWidth; });
    console.log(p + ': scrollWidth=' + sw);
    await ctx.close();
  }
  
  await browser.close();
})().catch(function(e) { console.error(e.message); });
