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

    // Toggle open/close when the hamburger is clicked
    var hamburger = nav.querySelector('.nav-hamburger');
    if (hamburger) {
      hamburger.addEventListener('click', function () {
        var menu = nav.querySelector('.mobile-menu');
        if (!menu) return;
        var isOpen = menu.classList.contains('open');
        if (isOpen) {
          closeNav(nav);
        } else {
          menu.classList.add('open');
          hamburger.classList.add('open');
        }
      });
    }

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
