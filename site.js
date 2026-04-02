/* SassaGold Studios — shared site behaviour */


/* ── Theme (dark / light) ──────────────────────────────────────────────────── */
(function () {
  var THEME_STORAGE_KEY = 'sg-theme';

  function getPreferred() {
    var saved = localStorage.getItem(THEME_STORAGE_KEY);
    if (saved === 'dark' || saved === 'light') return saved;
    return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
  }

  function applyTheme(theme) {
    document.documentElement.setAttribute('data-theme', theme);
    /* Update every toggle button on the page */
    document.querySelectorAll('.theme-toggle').forEach(function (btn) {
      var sunIcon  = btn.querySelector('.icon-sun');
      var moonIcon = btn.querySelector('.icon-moon');
      btn.setAttribute('aria-label', theme === 'dark' ? 'Switch to light mode' : 'Switch to dark mode');
      sunIcon.style.display  = theme === 'dark'  ? 'block' : 'none';
      moonIcon.style.display = theme === 'light' ? 'block' : 'none';
    });
  }

  function toggleTheme() {
    var current = document.documentElement.getAttribute('data-theme') || 'light';
    var next = current === 'dark' ? 'light' : 'dark';
    localStorage.setItem(THEME_STORAGE_KEY, next);
    applyTheme(next);
  }

  document.addEventListener('DOMContentLoaded', function () {
    applyTheme(getPreferred());
    document.querySelectorAll('.theme-toggle').forEach(function (btn) {
      btn.addEventListener('click', toggleTheme);
    });
  });
})();

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

