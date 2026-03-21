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
  
  var bodyMatch = fullHtml.match(/<body>([\s\S]*?)<\/body>/);
  var fullBody = bodyMatch ? bodyMatch[1] : '';
  
  // Try with nav + all sections  
  var navMatch = fullBody.match(/(<nav[\s\S]*?<\/nav>)/);
  var nav = navMatch ? navMatch[0] : '';
  
  // Get all sections  
  var allSections = (fullBody.match(/<section[\s\S]*?<\/section>/g) || []).join('');
  
  // Get footer
  var footerMatch = fullBody.match(/(<footer[\s\S]*?<\/footer>)/);
  var footer = footerMatch ? footerMatch[0] : '';
  
  // Get script tags
  var scripts = (fullBody.match(/<script[\s\S]*?<\/script>/g) || []).join('');
  
  // Get gold-dividers
  var dividers = (fullBody.match(/<div class="gold-divider"><\/div>/g) || []).join('');
  
  var tests = [
    { name: 'Nav + sections', html: base.replace('__CONTENT__', nav + allSections) },
    { name: 'Nav + sections + footer', html: base.replace('__CONTENT__', nav + allSections + footer) },
    { name: 'Nav + sections + footer + scripts', html: base.replace('__CONTENT__', nav + allSections + footer + scripts) },
    { name: 'Nav + sections + dividers', html: base.replace('__CONTENT__', nav + allSections + dividers) },
    { name: 'Just scripts', html: base.replace('__CONTENT__', scripts) },
    { name: 'All body', html: base.replace('__CONTENT__', fullBody) },
  ];
  
  for (var t of tests) {
    var tmpFile = '/tmp/test22-' + Math.random() + '.html';
    fs.writeFileSync(tmpFile, t.html);
    var ctx = await browser.newContext({ viewport: { width: 375, height: 812 } });
    var page = await ctx.newPage();
    await page.goto('file://' + tmpFile);
    await page.waitForTimeout(1500);
    var sw = await page.evaluate(function() { return document.documentElement.scrollWidth; });
    console.log(t.name + ': scrollWidth=' + sw);
    await ctx.close();
  }
  
  await browser.close();
})().catch(function(e) { console.error(e.message); });
