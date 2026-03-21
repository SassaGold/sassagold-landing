const { chromium } = require('playwright');
const fs = require('fs');

(async () => {
  const browser = await chromium.launch({ 
    executablePath: '/home/runner/.cache/ms-playwright/chromium-1208/chrome-linux64/chrome',
    args: ['--no-sandbox']
  });
  
  var fullHtml = fs.readFileSync('/home/runner/work/sassagold-landing/sassagold-landing/index.html', 'utf8');
  var styleMatch = fullHtml.match(/<style>([\s\S]*?)<\/style>/);
  var inlineStyle = styleMatch ? '<style>' + styleMatch[1] + '</style>' : '';
  var sitecsLink = '<link rel="stylesheet" href="file:///home/runner/work/sassagold-landing/sassagold-landing/site.css" />';
  var base = '<!DOCTYPE html><html lang="en"><head><meta charset="UTF-8" /><meta name="viewport" content="width=device-width, initial-scale=1.0" />' + sitecsLink + inlineStyle + '</head><body>__CONTENT__</body></html>';
  
  // Get full body
  var bodyMatch = fullHtml.match(/<body>([\s\S]*?)<\/body>/);
  var fullBody = bodyMatch ? bodyMatch[1] : '';
  
  // Use the site.js script content
  var scriptMatch = fullHtml.match(/<script src="\/site\.js"><\/script>/);
  var siteJsScript = '<script src="file:///home/runner/work/sassagold-landing/sassagold-landing/site.js"></script>';
  
  // Binary search approach: add sections one by one
  var sections = ['hero', 'features', 'screenshots', 'about', 'waitlist', 'support', 'privacy'];
  var accumulated = '';
  
  for (var s of sections) {
    var sectionMatch = fullBody.match(new RegExp('<section[^>]*(?:id="' + s + '"|class="[^"]*' + s + '[^"]*")[\\s\\S]*?</section>'));
    if (!sectionMatch) { console.log('Could not find section: ' + s); continue; }
    accumulated += sectionMatch[0];
    var tmpFile = '/tmp/acc-' + s + '.html';
    fs.writeFileSync(tmpFile, base.replace('__CONTENT__', accumulated));
    var ctx = await browser.newContext({ viewport: { width: 375, height: 812 } });
    var page = await ctx.newPage();
    await page.goto('file://' + tmpFile);
    await page.waitForTimeout(1200);
    var sw = await page.evaluate(function() { return document.documentElement.scrollWidth; });
    console.log('Adding ' + s + ' (total sections so far): scrollWidth=' + sw);
    await ctx.close();
  }
  
  await browser.close();
})().catch(function(e) { console.error(e.message); });
