const { chromium } = require('playwright');
const fs = require('fs');

(async () => {
  const browser = await chromium.launch({ 
    executablePath: '/home/runner/.cache/ms-playwright/chromium-1208/chrome-linux64/chrome',
    args: ['--no-sandbox']
  });
  
  // Build a minimal test with just the inline style + hero section
  var baseHtml = `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <link rel="stylesheet" href="file:///home/runner/work/sassagold-landing/sassagold-landing/site.css" />
  __INLINE_STYLE__
</head>
<body>
__CONTENT__
</body>
</html>`;

  var fullHtml = fs.readFileSync('/home/runner/work/sassagold-landing/sassagold-landing/index.html', 'utf8');
  
  // Extract inline style
  var styleMatch = fullHtml.match(/<style>([\s\S]*?)<\/style>/);
  var inlineStyle = styleMatch ? '<style>' + styleMatch[1] + '</style>' : '';
  
  // Test 1: Just the inline style, no content
  var test1 = baseHtml.replace('__INLINE_STYLE__', inlineStyle).replace('__CONTENT__', '<p>Hello world</p>');
  
  // Test 2: Inline style + hero section only  
  var heroMatch = fullHtml.match(/<section[^>]*id="main-content"[\s\S]*?<\/section>/);
  var heroSection = heroMatch ? heroMatch[0] : '';
  var test2 = baseHtml.replace('__INLINE_STYLE__', inlineStyle).replace('__CONTENT__', heroSection);
  
  var tests = [
    { name: 'Just inline style + hello', html: test1 },
    { name: 'Inline style + hero', html: test2 },
    { name: 'No inline style + hero', html: baseHtml.replace('__INLINE_STYLE__', '').replace('__CONTENT__', heroSection) },
  ];
  
  for (var i = 0; i < tests.length; i++) {
    var t = tests[i];
    var tmpFile = '/tmp/minimal-' + i + '.html';
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
