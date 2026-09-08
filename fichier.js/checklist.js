/* ==========================================================================
   checklist.js â€” Widget flottant de suivi de projet
   EncadrÃ© interne (Ã  retirer avant mise en ligne dÃ©finitive), pas destinÃ©
   aux visiteurs du site. Fonctionne de faÃ§on autonome sur chaque page tant
   que le HTML du widget (checklist-toggle / checklist-panel) est prÃ©sent.
   ========================================================================== */
(function () {
  function initChecklist() {
    try {
      var clToggle = document.getElementById('checklistToggle');
      var clPanel = document.getElementById('checklistPanel');
      if (!clToggle || !clPanel) return; // page sans widget : on ne fait rien

      var clBadge = document.getElementById('checklistBadge');
      var clSummary = document.getElementById('checklistSummary');
      var clProgressFill = document.getElementById('progressFill');
      var clProgressPct = document.getElementById('progressPct');
      var clCheckboxes = document.querySelectorAll('.cl-check');
      var clCircumference = 2 * Math.PI * 14;

      function clUpdateProgress() {
        var total = clCheckboxes.length;
        var done = 0;
        for (var i = 0; i < clCheckboxes.length; i++) {
          if (clCheckboxes[i].checked) done++;
        }
        var remaining = total - done;

        clBadge.textContent = remaining;
        clBadge.style.display = remaining === 0 ? 'none' : 'flex';
        clSummary.textContent = done + ' / ' + total + ' Ã©tapes faites';

        var pct = total > 0 ? Math.round((done / total) * 100) : 0;
        clProgressPct.textContent = pct + '%';
        var offset = clCircumference - (pct / 100) * clCircumference;
        clProgressFill.setAttribute('stroke-dasharray', clCircumference);
        clProgressFill.setAttribute('stroke-dashoffset', offset);
      }

      clToggle.addEventListener('click', function () {
        var isOpen = clPanel.classList.toggle('is-open');
        clToggle.setAttribute('aria-expanded', isOpen ? 'true' : 'false');
      });

      document.addEventListener('click', function (e) {
        if (!clPanel.contains(e.target) && !clToggle.contains(e.target) && clPanel.classList.contains('is-open')) {
          clPanel.classList.remove('is-open');
          clToggle.setAttribute('aria-expanded', 'false');
        }
      });

      for (var k = 0; k < clCheckboxes.length; k++) {
        clCheckboxes[k].addEventListener('change', clUpdateProgress);
      }
      clUpdateProgress();
    } catch (e) {
      // Le widget de suivi ne doit jamais bloquer le reste du site.
    }
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initChecklist);
  } else {
    initChecklist();
  }
})();
