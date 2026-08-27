document.addEventListener('DOMContentLoaded', function () {
  var nav = document.querySelector('nav');
  var toggle = document.querySelector('.nav-toggle');
  var overlay = document.querySelector('.nav-overlay');
  if (!nav) return;

  function updateScrollState() {
    if (window.scrollY > 40) {
      nav.classList.add('nav-scrolled');
    } else {
      nav.classList.remove('nav-scrolled');
    }
  }
  updateScrollState();
  window.addEventListener('scroll', updateScrollState, { passive: true });

  if (!toggle) return;

  function closeMenu() {
    nav.classList.remove('nav-open');
    toggle.setAttribute('aria-expanded', 'false');
  }
  function toggleMenu() {
    var isOpen = nav.classList.toggle('nav-open');
    toggle.setAttribute('aria-expanded', isOpen ? 'true' : 'false');
  }

  toggle.addEventListener('click', toggleMenu);
  if (overlay) overlay.addEventListener('click', closeMenu);
  document.querySelectorAll('.nav-links a').forEach(function (a) {
    a.addEventListener('click', closeMenu);
  });
  document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape') closeMenu();
  });
});
