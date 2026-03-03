/* main.js — Amalama Labs site interactions */

(function () {
  'use strict';

  /* ========================================
     MOBILE NAV TOGGLE
     ======================================== */

  const navToggle = document.getElementById('nav-toggle');
  const navLinks = document.getElementById('nav-links');
  const navOverlay = document.getElementById('nav-overlay');

  function closeNav() {
    navLinks.classList.remove('open');
    navOverlay.classList.remove('open');
    navToggle.classList.remove('open');
  }

  if (navToggle) {
    navToggle.addEventListener('click', function () {
      const isOpen = navLinks.classList.toggle('open');
      navOverlay.classList.toggle('open', isOpen);
      navToggle.classList.toggle('open', isOpen);
    });
  }

  if (navOverlay) {
    navOverlay.addEventListener('click', closeNav);
  }

  /* Close nav on link click (mobile) */
  document.querySelectorAll('.nav__link').forEach(function (link) {
    link.addEventListener('click', closeNav);
  });

  /* ========================================
     NAV BACKGROUND ON SCROLL
     ======================================== */

  const nav = document.getElementById('nav');

  function updateNav() {
    if (!nav) return;
    nav.classList.toggle('scrolled', window.scrollY > 40);
  }

  window.addEventListener('scroll', updateNav, { passive: true });
  updateNav();

  /* ========================================
     ACTIVE NAV HIGHLIGHTING
     ======================================== */

  const sections = document.querySelectorAll('main section[id]');
  const navItems = document.querySelectorAll('.nav__link');

  function updateActiveNav() {
    var scrollY = window.scrollY + 120;

    sections.forEach(function (section) {
      var top = section.offsetTop;
      var height = section.offsetHeight;
      var id = section.getAttribute('id');

      if (scrollY >= top && scrollY < top + height) {
        navItems.forEach(function (item) {
          item.classList.remove('active');
          if (item.getAttribute('href') === '#' + id) {
            item.classList.add('active');
          }
        });
      }
    });
  }

  window.addEventListener('scroll', updateActiveNav, { passive: true });

  /* ========================================
     SCROLL REVEAL (IntersectionObserver)
     ======================================== */

  var revealElements = document.querySelectorAll('.reveal, .reveal-stagger');

  if ('IntersectionObserver' in window) {
    var observer = new IntersectionObserver(
      function (entries) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.15, rootMargin: '0px 0px -40px 0px' }
    );

    revealElements.forEach(function (el) {
      observer.observe(el);
    });
  } else {
    /* Fallback: show everything */
    revealElements.forEach(function (el) {
      el.classList.add('visible');
    });
  }
})();
