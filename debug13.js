const { chromium } = require('playwright');
(async () => {
  const browser = await chromium.launch({ 
    executablePath: '/home/runner/.cache/ms-playwright/chromium-1208/chrome-linux64/chrome',
    args: ['--no-sandbox']
  });
  const ctx = await browser.newContext({ viewport: { width: 375, height: 812 } });
  const page = await ctx.newPage();
  
  // Intercept to add debug CSS
  await page.route('**/*.html', async (route) => {
    const response = await route.fetch();
    let body = await response.text();
    // Add debug style to highlight the overflow
    body = body.replace('</head>', '<style>* { outline: 1px solid rgba(255,0,0,0.2); } html { overflow-x: scroll; background: cyan !important; }</style></head>');
    await route.fulfill({ response, body });
  });
  
  await page.goto('file:///home/runner/work/sassagold-landing/sassagold-landing/index.html');
  await page.waitForTimeout(2000);
  
  // Get the min-content width
  var result = await page.evaluate(function() {
    // Try collapsing the width
    return {
      sw: document.documentElement.scrollWidth,
      hw: document.documentElement.offsetWidth
    };
  });
  console.log('With debug style:', result);
  
  await page.screenshot({ path: '/tmp/index-debug-style.png', fullPage: false });
  
  await ctx.close();
  await browser.close();
})().catch(function(e) { console.error(e.message); });
