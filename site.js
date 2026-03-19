/* SassaGold — shared site behaviour */

/* ── Mobile nav ────────────────────────────────────────────────────────────── */
(function () {
  function closeNav(nav) {
    var menu = nav.querySelector('.mobile-menu');
    var btn  = nav.querySelector('.nav-hamburger');
    if (menu) menu.classList.remove('open');
    if (btn)  btn.classList.remove('open');
  }

  document.addEventListener('DOMContentLoaded', function () {
    var nav = document.querySelector('.site-nav');
    if (!nav) return;

    // Close when a mobile menu link is clicked
    nav.querySelectorAll('.mobile-menu-link').forEach(function (link) {
      link.addEventListener('click', function () { closeNav(nav); });
    });

    // Close when clicking outside the nav
    document.addEventListener('click', function (e) {
      if (!nav.contains(e.target)) closeNav(nav);
    });

    // Close on Escape key
    document.addEventListener('keydown', function (e) {
      if (e.key === 'Escape') closeNav(nav);
    });
  });
})();

/* ── Cookie / privacy banner ────────────────────────────────────────────────── */
(function () {
  var KEY = 'sg_privacy_ok';
  if (localStorage.getItem(KEY)) return;

  document.addEventListener('DOMContentLoaded', function () {
    var banner = document.createElement('div');
    banner.id = 'privacy-banner';
    banner.setAttribute('role', 'region');
    banner.setAttribute('aria-label', 'Privacy notice');
    banner.innerHTML =
      'This site uses <strong>Google Fonts</strong> (loaded from Google\u2019s servers). ' +
      'No personal data is collected or shared. ' +
      '<a href="/privacy.html">Privacy&nbsp;Policy</a>' +
      '<button id="privacy-banner-ok" aria-label="Dismiss privacy notice">Got&nbsp;it</button>';
    document.body.appendChild(banner);

    document.getElementById('privacy-banner-ok').addEventListener('click', function () {
      localStorage.setItem(KEY, '1');
      banner.remove();
    });
  });
})();
