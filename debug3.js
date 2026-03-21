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
  
  // Test by temporarily disabling each section
  const result = await page.evaluate(function() {
    var sections = document.querySelectorAll('section, nav, footer, .hero-section, .features-section');
    var findings = [];
    
    // Get initial scroll width
    var initial = document.documentElement.scrollWidth;
    
    sections.forEach(function(section) {
      // Hide section and check if scroll width changes
      var originalDisplay = section.style.display;
      section.style.display = 'none';
      var newScrollWidth = document.documentElement.scrollWidth;
      section.style.display = originalDisplay;
      
      if (newScrollWidth < initial - 5) {
        findings.push({
          tag: section.tagName,
          cls: (section.className||'').toString().slice(0,50),
          id: section.id,
          beforeHide: initial,
          afterHide: newScrollWidth
        });
      }
    });
    
    return { initial: initial, findings: findings };
  });
  console.log(JSON.stringify(result, null, 2));
  
  await ctx.close();
  await browser.close();
})().catch(function(e) { console.error(e.message); });
