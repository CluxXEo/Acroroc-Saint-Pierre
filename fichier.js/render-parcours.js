/* ==========================================================================
   render-infos.js â€” GÃ©nÃ¨re horaires, Ã©tapes du bon cadeau, conditions et
   partenaires de infos.html Ã  partir de ACROROC_DATA (voir data.js).
   ========================================================================== */
(function () {
  function hoursRow(h) {
    return '<div class="hours-row"><span class="d">' + h.jour + '</span><span class="h">' + h.heure + '</span></div>';
  }

  function cadeauStep(s) {
    return (
      '<div class="cadeau-step"><span class="n">' + s.n + '</span><div><b>' + s.titre + '</b><p>' + s.detail + '</p></div></div>'
    );
  }

  function conditionItem(text) {
    return '<li>' + text + '</li>';
  }

  function partnerCard(p) {
    return (
      '<a href="' + p.url + '" target="_blank" rel="noopener" class="partner-card">' +
        '<span class="partner-mark">' + p.nom + '</span>' +
        '<span class="partner-role">' + p.role + '</span>' +
      '</a>'
    );
  }

  function renderHoraires() {
    var mount = document.getElementById('horairesList');
    var note = document.getElementById('vacancesNote');
    if (!mount || typeof ACROROC_DATA === 'undefined') return;
    mount.innerHTML = ACROROC_DATA.horaires.map(hoursRow).join('');
    if (note) note.textContent = 'Vacances : ' + ACROROC_DATA.vacances;
  }

  function renderContact() {
    var tel = document.getElementById('contactTel');
    var email = document.getElementById('contactEmail');
    var adresse = document.getElementById('contactAdresse');
    if (typeof ACROROC_DATA === 'undefined') return;
    var c = ACROROC_DATA.contact;
    if (tel) { tel.textContent = c.telephone; tel.href = c.telHref; }
    if (email) { email.textContent = c.email; email.href = 'mailto:' + c.email; }
    if (adresse) { adresse.innerHTML = c.adresse.join('<br>'); }
  }

  function renderConditions() {
    var mount = document.getElementById('conditionsList');
    if (!mount || typeof ACROROC_DATA === 'undefined') return;
    mount.innerHTML = ACROROC_DATA.avantDeVenir.map(conditionItem).join('');
  }

  function renderCadeau() {
    var mount = document.getElementById('cadeauSteps');
    if (!mount || typeof ACROROC_DATA === 'undefined') return;
    mount.innerHTML = ACROROC_DATA.cadeauEtapes.map(cadeauStep).join('');
  }

  function renderPartenaires() {
    var mount = document.getElementById('partnerGrid');
    if (!mount || typeof ACROROC_DATA === 'undefined') return;
    mount.innerHTML = ACROROC_DATA.partenaires.map(partnerCard).join('');
  }

  function init() {
    renderHoraires();
    renderContact();
    renderConditions();
    renderCadeau();
    renderPartenaires();
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();
