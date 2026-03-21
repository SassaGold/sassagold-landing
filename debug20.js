const { chromium } = require('playwright');
const fs = require('fs');

(async () => {
  const browser = await chromium.launch({ 
    executablePath: '/home/runner/.cache/ms-playwright/chromium-1208/chrome-linux64/chrome',
    args: ['--no-sandbox']
  });
  
  var fullHtml = fs.readFileSync('/home/runner/work/sassagold-landing/sassagold-landing/index.html', 'utf8');
  
  // Extract key parts
  var styleMatch = fullHtml.match(/<style>([\s\S]*?)<\/style>/);
  var inlineStyle = styleMatch ? '<style>' + styleMatch[1] + '</style>' : '';
  
  var sitecsLink = '<link rel="stylesheet" href="file:///home/runner/work/sassagold-landing/sassagold-landing/site.css" />';
  
  var base = `<!DOCTYPE html><html lang="en"><head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  ` + sitecsLink + `
  ` + inlineStyle + `
</head><body>__CONTENT__</body></html>`;
  
  // Get section by id
  function getSection(id) {
    var m = fullHtml.match(new RegExp('<section[^>]*id="' + id + '"[\\s\\S]*?<\\/section>'));
    return m ? m[0] : '';
  }
  
  // Get all body content
  var bodyMatch = fullHtml.match(/<body>([\s\S]*?)<\/body>/);
  var fullBody = bodyMatch ? bodyMatch[1] : '';
  
  // Extract nav and footer
  var navMatch = fullHtml.match(/(<nav[\s\S]*?<\/nav>)/);
  var nav = navMatch ? navMatch[0] : '';
  var footerMatch = fullHtml.match(/(<footer[\s\S]*?<\/footer>)/);
  var footer = footerMatch ? footerMatch[0] : '';
  
  var tests = [
    { name: 'Nav only', html: base.replace('__CONTENT__', nav) },
    { name: 'Footer only', html: base.replace('__CONTENT__', footer) },
    { name: 'Nav + footer', html: base.replace('__CONTENT__', nav + footer) },
    { name: 'All body', html: base.replace('__CONTENT__', fullBody) },
  ];
  
  for (var i = 0; i < tests.length; i++) {
    var t = tests[i];
    var tmpFile = '/tmp/test20-' + i + '.html';
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
