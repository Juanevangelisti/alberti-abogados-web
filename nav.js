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

// --- Seguimiento de conversión: clics a WhatsApp ---
document.addEventListener('DOMContentLoaded', function () {
  var waLinks = document.querySelectorAll('a[href^="https://wa.me/"]');

  waLinks.forEach(function (link) {
    // Si el link ya tiene su propio onclick (ej: botón "Solicitá tu consulta"),
    // no le agregamos este seguimiento genérico para no duplicar la conversión.
    if (link.hasAttribute('onclick')) return;

    link.addEventListener('click', function (e) {
      if (typeof gtag !== 'function') return; // por si esta página todavía no tiene el tag base

      e.preventDefault();
      var destino = link.href;

      gtag('event', 'conversion', {
        'send_to': 'AW-18023367916/h78qCI-m59UcEOyJm5JD',
        'event_callback': function () {
          window.location = destino;
        }
      });
    });
  });
});
