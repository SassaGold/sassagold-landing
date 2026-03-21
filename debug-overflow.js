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
  
  const result = await page.evaluate(function() {
    var all = Array.from(document.querySelectorAll('*'));
    var wide = all.filter(function(el) {
      return el.offsetWidth > 375 + 5;
    }).map(function(el) {
      return {
        tag: el.tagName,
        cls: (el.className || '').toString().slice(0,50),
        id: el.id,
        offsetWidth: el.offsetWidth,
        scrollWidth: el.scrollWidth,
        text: el.textContent ? el.textContent.trim().slice(0,60) : ''
      };
    });
    return { docScrollWidth: document.documentElement.scrollWidth, wideElements: wide };
  });
  console.log(JSON.stringify(result, null, 2));
  
  await ctx.close();
  await browser.close();
})().catch(function(e) { console.error(e.message); });
