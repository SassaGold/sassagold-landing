const { chromium } = require('playwright');
const fs = require('fs');

(async () => {
  const browser = await chromium.launch({ 
    executablePath: '/home/runner/.cache/ms-playwright/chromium-1208/chrome-linux64/chrome',
    args: ['--no-sandbox']
  });
  
  var html = fs.readFileSync('/home/runner/work/sassagold-landing/sassagold-landing/index.html', 'utf8');
  
  // Test with sections progressively removed
  var tests = [
    { name: 'Remove hero', html: html.replace(/<section[^>]*class="hero-section"[\s\S]*?<\/section>/, '') },
    { name: 'Remove features', html: html.replace(/<section[^>]*class="features-section"[\s\S]*?<\/section>/, '') },
    { name: 'Remove screenshots', html: html.replace(/<section[^>]*class="screenshots-section"[\s\S]*?<\/section>/, '') },
    { name: 'Remove about', html: html.replace(/<section[^>]*class="about-section"[\s\S]*?<\/section>/, '') },
    { name: 'Remove waitlist', html: html.replace(/<section[^>]*class="waitlist-section"[\s\S]*?<\/section>/, '') },
    { name: 'Remove support', html: html.replace(/<section[^>]*class="support-section"[\s\S]*?<\/section>/, '') },
    { name: 'Only hero', html: html.replace(/(<section[^>]*class="features-section"[\s\S]*?<\/section>)|(<section[^>]*class="screenshots-section"[\s\S]*?<\/section>)|(<section[^>]*class="about-section"[\s\S]*?<\/section>)|(<section[^>]*class="waitlist-section"[\s\S]*?<\/section>)|(<section[^>]*class="support-section"[\s\S]*?<\/section>)/g, '') },
    { name: 'Only features', html: html.replace(/(<section[^>]*class="hero-section"[\s\S]*?<\/section>)|(<section[^>]*class="screenshots-section"[\s\S]*?<\/section>)|(<section[^>]*class="about-section"[\s\S]*?<\/section>)|(<section[^>]*class="waitlist-section"[\s\S]*?<\/section>)|(<section[^>]*class="support-section"[\s\S]*?<\/section>)/g, '') },
  ];
  
  for (var i = 0; i < tests.length; i++) {
    var t = tests[i];
    var tmpFile = '/tmp/test-' + i + '.html';
    fs.writeFileSync(tmpFile, t.html);
    
    var ctx = await browser.newContext({ viewport: { width: 375, height: 812 } });
    var page = await ctx.newPage();
    await page.goto('file://' + tmpFile);
    await page.waitForTimeout(1200);
    var sw = await page.evaluate(function() { return document.documentElement.scrollWidth; });
    console.log(t.name + ': scrollWidth=' + sw);
    await ctx.close();
  }
  
  await browser.close();
})().catch(function(e) { console.error(e.message); });
