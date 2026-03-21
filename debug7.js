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
    var aboutGrid = document.querySelector('.about-grid');
    var aboutGridInfo = null;
    if (aboutGrid) {
      var cs = window.getComputedStyle(aboutGrid);
      aboutGridInfo = {
        gridTemplateColumns: cs.gridTemplateColumns,
        width: cs.width,
        gap: cs.columnGap,
        offsetWidth: aboutGrid.offsetWidth,
        scrollWidth: aboutGrid.scrollWidth
      };
    }
    
    // Check all sections by finding which child has scrollWidth > clientWidth
    var allDivs = Array.from(document.querySelectorAll('div, section, nav, footer, main'));
    var overflowing = allDivs.filter(function(el) {
      return el.scrollWidth > el.offsetWidth + 5;
    }).map(function(el) {
      return {
        tag: el.tagName,
        cls: (el.className||'').toString().slice(0,50),
        scrollWidth: el.scrollWidth,
        offsetWidth: el.offsetWidth
      };
    });
    
    // Check inline elements too
    var allInline = Array.from(document.querySelectorAll('span, a, button, img, input, svg'));
    var inlineWide = allInline.filter(function(el) {
      return el.offsetWidth > 375;
    }).map(function(el) {
      return {
        tag: el.tagName,
        cls: (el.className||'').toString().slice(0,50),
        offsetWidth: el.offsetWidth,
        text: (el.textContent||'').trim().slice(0,40)
      };
    });
    
    return { aboutGrid: aboutGridInfo, overflowing: overflowing, inlineWide: inlineWide };
  });
  console.log(JSON.stringify(result, null, 2));
  
  await ctx.close();
  await browser.close();
})().catch(function(e) { console.error(e.message); });
