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
  
  // Take a screenshot of the page at 530px wide to see what's on the right
  await page.setViewportSize({ width: 530, height: 3000 });
  await page.waitForTimeout(500);
  await page.screenshot({ path: '/tmp/index-wide.png', fullPage: false });
  
  // What elements are > 375 on the right? (using absolute document positions)
  const result = await page.evaluate(function() {
    var all = Array.from(document.querySelectorAll('*'));
    var overflowing = [];
    all.forEach(function(el) {
      var left = 0;
      var node = el;
      while (node && node !== document.body) {
        left += node.offsetLeft || 0;
        node = node.offsetParent;
      }
      var right = left + el.offsetWidth;
      if (right > 380) {
        overflowing.push({
          tag: el.tagName,
          cls: (el.className||'').toString().slice(0,50),
          id: el.id,
          absLeft: Math.round(left),
          offsetWidth: el.offsetWidth,
          absRight: Math.round(right),
          text: (el.textContent||'').trim().slice(0,60)
        });
      }
    });
    return overflowing.sort(function(a,b) { return b.absRight - a.absRight; }).slice(0, 20);
  });
  console.log(JSON.stringify(result, null, 2));
  
  await ctx.close();
  await browser.close();
})().catch(function(e) { console.error(e.message); });
