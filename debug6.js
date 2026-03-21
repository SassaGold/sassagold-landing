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
  
  const result = await page.evaluate(function() {
    var svg = document.querySelector('.about-graphic svg');
    var svgInfo = null;
    if (svg) {
      var cs = window.getComputedStyle(svg);
      var bbox = svg.getBBox ? svg.getBBox() : null;
      svgInfo = {
        offsetWidth: svg.offsetWidth,
        offsetHeight: svg.offsetHeight,
        scrollWidth: svg.scrollWidth,
        clientWidth: svg.clientWidth,
        attrWidth: svg.getAttribute('width'),
        computedWidth: cs.width,
        bboxWidth: bbox ? bbox.width : null,
        bboxX: bbox ? bbox.x : null
      };
    }
    
    // Check all SVG elements' bounding boxes
    var svgEls = Array.from(document.querySelectorAll('svg *'));
    var maxRight = 0;
    var maxEl = null;
    svgEls.forEach(function(el) {
      try {
        var bbox = el.getBBox ? el.getBBox() : null;
        if (bbox && bbox.x + bbox.width > maxRight) {
          maxRight = bbox.x + bbox.width;
          maxEl = { tag: el.tagName, x: bbox.x, w: bbox.width, right: bbox.x + bbox.width };
        }
      } catch(e) {}
    });
    
    return { svgInfo: svgInfo, maxSvgRight: maxRight, maxSvgEl: maxEl };
  });
  console.log(JSON.stringify(result, null, 2));
  
  await ctx.close();
  await browser.close();
})().catch(function(e) { console.error(e.message); });
