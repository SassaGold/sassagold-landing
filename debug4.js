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
    var allEls = Array.from(document.querySelectorAll('*'));
    var initial = document.documentElement.scrollWidth;
    var findings = [];
    
    allEls.forEach(function(el) {
      var origVis = el.style.visibility;
      var origOverflow = el.style.overflow;
      el.style.overflow = 'hidden';
      var newW = document.documentElement.scrollWidth;
      el.style.overflow = origOverflow;
      
      if (newW < initial - 5) {
        findings.push({
          tag: el.tagName,
          cls: (el.className||'').toString().slice(0,50),
          id: el.id,
          afterOverflowHidden: newW,
          offsetWidth: el.offsetWidth,
          scrollWidth: el.scrollWidth
        });
      }
    });
    
    return { initial: initial, findings: findings };
  });
  console.log(JSON.stringify(result, null, 2));
  
  await ctx.close();
  await browser.close();
})().catch(function(e) { console.error(e.message); });
