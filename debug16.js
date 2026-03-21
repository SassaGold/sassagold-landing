const { chromium } = require('playwright');
(async () => {
  const browser = await chromium.launch({ 
    executablePath: '/home/runner/.cache/ms-playwright/chromium-1208/chrome-linux64/chrome',
    args: ['--no-sandbox']
  });
  const ctx = await browser.newContext({ viewport: { width: 375, height: 812 } });
  const page = await ctx.newPage();
  await page.goto('file:///home/runner/work/sassagold-landing/sassagold-landing/index.html');
  await page.waitForTimeout(2000);
  
  var result = await page.evaluate(function() {
    var initial = document.documentElement.scrollWidth;
    var allEls = Array.from(document.querySelectorAll('*'));
    var results = [];
    
    allEls.forEach(function(el) {
      var orig = el.style.display;
      el.style.display = 'none';
      var sw = document.documentElement.scrollWidth;
      el.style.display = orig;
      
      if (sw < initial - 2) {
        results.push({ 
          tag: el.tagName, 
          cls: (el.className||'').toString().slice(0,40), 
          id: el.id,
          scrollWidthAfter: sw
        });
      }
    });
    
    return { initial: initial, results: results };
  });
  
  console.log(JSON.stringify(result, null, 2));
  
  await ctx.close();
  await browser.close();
})().catch(function(e) { console.error(e.message); });
