const { chromium } = require('playwright');
(async () => {
  const browser = await chromium.launch({ 
    executablePath: '/home/runner/.cache/ms-playwright/chromium-1208/chrome-linux64/chrome',
    args: ['--no-sandbox', '--disable-setuid-sandbox']
  });
  
  var widths = [320, 360, 375, 400, 480, 530, 580, 600, 768];
  
  for (var i = 0; i < widths.length; i++) {
    var w = widths[i];
    var ctx = await browser.newContext({ viewport: { width: w, height: 812 } });
    var page = await ctx.newPage();
    await page.goto('file:///home/runner/work/sassagold-landing/sassagold-landing/index.html');
    await page.waitForTimeout(1500);
    var sw = await page.evaluate(function() { return document.documentElement.scrollWidth; });
    console.log('viewport ' + w + ': scrollWidth=' + sw + (sw > w ? ' OVERFLOW!' : ' ok'));
    await ctx.close();
  }
  
  await browser.close();
})().catch(function(e) { console.error(e.message); });
