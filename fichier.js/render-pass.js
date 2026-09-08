/* ==========================================================================
   render-pass.js â€” GÃ©nÃ¨re les cartes de la page pass.html Ã  partir de
   ACROROC_DATA.pass (voir data.js). Modifiez data.js pour changer les
   tarifs ou le contenu des pass : ce fichier n'a rien Ã  toucher.
   ========================================================================== */
(function () {
  function featItem(text) {
    return '<div class="pass-feat">' + text + '</div>';
  }

  function passCard(p) {
    var classes = 'pass-card' + (p.featured ? ' featured' : '');
    var tag = p.tag ? '<span class="pass-tag">' + p.tag + '</span>' : '';
    var features = p.features.map(featItem).join('');

    return (
      '<div class="' + classes + '">' +
        tag +
        '<span class="pass-parcours-count">' + p.nbParcours + '</span>' +
        '<h3>' + p.nom + '</h3>' +
        '<div class="pass-meta"><span>' + p.taille + '</span><span>Â·</span><span>' + p.duree + '</span></div>' +
        '<div class="pass-price"><b>' + p.prix + '</b><span>' + p.ageRange + '</span></div>' +
        '<p class="pass-desc">' + p.description + '</p>' +
        '<div class="pass-features">' + features + '</div>' +
      '</div>'
    );
  }

  function renderPassGrid() {
    var mount = document.getElementById('passGrid');
    if (!mount || typeof ACROROC_DATA === 'undefined') return;

    mount.innerHTML = ACROROC_DATA.pass.map(passCard).join('');
  }

  function renderRemises() {
    var mount = document.getElementById('passRemises');
    if (!mount || typeof ACROROC_DATA === 'undefined') return;

    var html = ACROROC_DATA.remises
      .map(function (r) { return '<b>' + r.label + ' :</b> ' + r.detail; })
      .join(' Â· ');
    mount.innerHTML = html;
  }

  function init() {
    renderPassGrid();
    renderRemises();
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();
