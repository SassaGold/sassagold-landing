const { chromium } = require('playwright');
const fs = require('fs');
const { execSync } = require('child_process');

(async () => {
  const browser = await chromium.launch({ 
    executablePath: '/home/runner/.cache/ms-playwright/chromium-1208/chrome-linux64/chrome',
    args: ['--no-sandbox']
  });
  
  // Get previous version of index.html
  var prevHtml = execSync('cd /home/runner/work/sassagold-landing/sassagold-landing && git show 19b70ec:index.html').toString();
  fs.writeFileSync('/tmp/prev-index.html', prevHtml);
  
  var tests = [
    { name: 'Current index.html', file: 'file:///home/runner/work/sassagold-landing/sassagold-landing/index.html' },
    { name: 'Previous index.html', file: 'file:///tmp/prev-index.html' },
  ];
  
  for (var t of tests) {
    var ctx = await browser.newContext({ viewport: { width: 375, height: 812 } });
    var page = await ctx.newPage();
    await page.goto(t.file);
    await page.waitForTimeout(1500);
    var sw = await page.evaluate(function() { return document.documentElement.scrollWidth; });
    console.log(t.name + ': scrollWidth=' + sw);
    await ctx.close();
  }
  
  await browser.close();
})().catch(function(e) { console.error(e.message); });
