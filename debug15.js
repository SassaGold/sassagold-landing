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
  
  // Try hiding each section one at a time and see what affects scrollWidth
  var result = await page.evaluate(function() {
    var initial = document.documentElement.scrollWidth;
    var sections = Array.from(document.querySelectorAll('section, nav, footer, header'));
    var results = [];
    
    sections.forEach(function(s) {
      s.style.visibility = 'hidden';
      var sw = document.documentElement.scrollWidth;
      s.style.visibility = '';
      if (sw !== initial) {
        results.push({ 
          tag: s.tagName, 
          cls: (s.className||'').slice(0,30), 
          id: s.id,
          scrollWidthAfter: sw 
        });
      }
    });
    
    // Also try children of hero section
    var heroChildren = Array.from(document.querySelectorAll('.hero-section *'));
    heroChildren.forEach(function(el) {
      el.style.visibility = 'hidden';
      var sw = document.documentElement.scrollWidth;
      el.style.visibility = '';
      if (sw < initial - 5) {
        results.push({ 
          tag: el.tagName, 
          cls: (el.className||'').slice(0,30), 
          id: el.id,
          scrollWidthAfter: sw,
          from: 'hero'
        });
      }
    });
    
    return { initial: initial, results: results };
  });
  
  console.log(JSON.stringify(result, null, 2));
  
  await ctx.close();
  await browser.close();
})().catch(function(e) { console.error(e.message); });
