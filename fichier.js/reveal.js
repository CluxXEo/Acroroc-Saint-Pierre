/* ==========================================================================
   reveal.js â€” Animations d'apparition au scroll (fade-in / slide / zoom)
   Utilise IntersectionObserver ; se dÃ©grade proprement si absent.
   Cible tous les Ã©lÃ©ments .reveal et .reveal-stagger de la page.
   ========================================================================== */
(function () {
  function initReveal() {
    try {
      var revealEls = document.querySelectorAll('.reveal, .reveal-stagger');

      if (window.IntersectionObserver) {
        var io = new IntersectionObserver(function (entries) {
          for (var i = 0; i < entries.length; i++) {
            if (entries[i].isIntersecting) {
              entries[i].target.classList.add('is-visible');
              io.unobserve(entries[i].target);
            }
          }
        }, { threshold: 0.15, rootMargin: '0px 0px -60px 0px' });

        for (var i = 0; i < revealEls.length; i++) {
          io.observe(revealEls[i]);
        }
      } else {
        // Navigateur trop ancien : on affiche tout directement, sans animation.
        for (var j = 0; j < revealEls.length; j++) {
          revealEls[j].classList.add('is-visible');
        }
      }
    } catch (e) {
      // En cas d'erreur imprÃ©vue, on s'assure que le contenu reste visible.
      var fallbackEls = document.querySelectorAll('.reveal, .reveal-stagger');
      for (var k = 0; k < fallbackEls.length; k++) {
        fallbackEls[k].classList.add('is-visible');
      }
    }
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initReveal);
  } else {
    initReveal();
  }
})();
