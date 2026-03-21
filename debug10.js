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
  
  // Check: does adding overflow-x: hidden to HTML element eliminate the scroll width?
  const result = await page.evaluate(function() {
    var before = document.documentElement.scrollWidth;
    
    // Try adding overflow-x: hidden
    document.documentElement.style.overflowX = 'hidden';
    var afterHtmlHidden = document.documentElement.scrollWidth;
    document.documentElement.style.overflowX = '';
    
    // Try adding overflow-x: hidden to body
    document.body.style.overflowX = 'hidden';
    var afterBodyHidden = document.documentElement.scrollWidth;
    document.body.style.overflowX = '';
    
    // What's the document.body.scrollWidth?
    var bodyScrollW = document.body.scrollWidth;
    
    // Check computed overflowX of HTML and body
    var htmlOverflow = window.getComputedStyle(document.documentElement).overflowX;
    var bodyOverflow = window.getComputedStyle(document.body).overflowX;
    
    return {
      before: before,
      afterHtmlHidden: afterHtmlHidden,
      afterBodyHidden: afterBodyHidden,
      bodyScrollW: bodyScrollW,
      htmlOverflow: htmlOverflow,
      bodyOverflow: bodyOverflow,
      window_innerWidth: window.innerWidth
    };
  });
  console.log(JSON.stringify(result, null, 2));
  
  // Take full page screenshot for visual inspection
  await page.screenshot({ path: '/tmp/index-full.png', fullPage: true });
  
  await ctx.close();
  await browser.close();
})().catch(function(e) { console.error(e.message); });
