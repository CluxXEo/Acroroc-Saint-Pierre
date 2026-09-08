/* ==========================================================================
   data.js â€” Contenu central du site Acroroc
   Toutes les infos qui changent souvent (tarifs, horaires, parcours,
   partenaires) sont ici. Les pages HTML lisent ces donnÃ©es pour gÃ©nÃ©rer
   les blocs rÃ©pÃ©tÃ©s : modifiez ce fichier, pas le HTML de chaque page.
   ========================================================================== */

var ACROROC_DATA = {

  contact: {
    telephone: '0692 457 137',
    telHref: 'tel:0692457137',
    email: 'contact@acroroc974.com',
    adresse: ['9 Chemin Bassin Plat', '97410 Saint-Pierre, La RÃ©union']
  },

  // Les 3 formules de pass, dans l'ordre d'affichage.
  pass: [
    {
      id: 'aventure',
      nom: 'Pass Aventure',
      nbParcours: '5 parcours',
      taille: 'DÃ¨s 1m30 ou 7 ans',
      duree: '3 heures',
      prix: '20â‚¬',
      ageRange: 'de 7 Ã  99 ans',
      description: "Le pass idÃ©al pour vivre l'aventure en famille. Initiez-vous en toute sÃ©curitÃ© sur nos 5 premiers parcours Ã  difficultÃ© croissante.",
      features: ['Parcours Orange, Vert, Gris, Bleu, Rose'],
      featured: false
    },
    {
      id: 'sensation',
      nom: 'Pass Sensation',
      nbParcours: '6 parcours',
      taille: 'DÃ¨s 1m40',
      duree: '3 heures',
      prix: '26â‚¬',
      ageRange: 'de 10 Ã  99 ans',
      description: "Osez la MÃ©ga Tyro 350, la plus haute et la plus longue tyrolienne de La RÃ©union. Frisson et spectacle garantis, en toute sÃ©curitÃ©.",
      features: ['Les 5 parcours du Pass Aventure', 'MÃ©ga Tyro 350 â€” nouveautÃ©'],
      featured: true,
      tag: 'Le plus choisi'
    },
    {
      id: 'extreme',
      nom: 'Pass ExtrÃªme',
      nbParcours: '8 parcours',
      taille: 'DÃ¨s 1m60',
      duree: '3 heures',
      prix: '29â‚¬',
      ageRange: 'de 14 Ã  99 ans',
      description: "L'accÃ¨s complet pour les sportifs avides de sensations fortes. DÃ©parts Ã  9h et 13h pour 3 heures d'activitÃ© non stop.",
      features: ['Les 6 parcours du Pass Sensation', 'Parcours Rouge â€” Tyro 250', 'Parcours Noir â€” Via ExtrÃªme, nouveautÃ©'],
      featured: false
    }
  ],

  remises: [
    { label: 'Groupes de 8+', detail: '-2â‚¬ sur chaque pass' },
    { label: 'Ã‰tudiants', detail: "-2â‚¬ sur prÃ©sentation d'un justificatif" }
  ],

  // Plan des 8 parcours, avec la couleur utilisÃ©e pour la pastille (voir style.css, classes d-xxx).
  parcoursList: [
    { nom: 'Orange', classe: 'd-orange' },
    { nom: 'Vert', classe: 'd-vert' },
    { nom: 'Gris', classe: 'd-gris' },
    { nom: 'Bleu', classe: 'd-bleu' },
    { nom: 'Rose', classe: 'd-rose' },
    { nom: 'MÃ©ga Tyro 350', classe: 'd-mega' },
    { nom: 'Rouge â€” Tyro 250', classe: 'd-rouge' },
    { nom: 'Noir â€” Via ExtrÃªme', classe: 'd-noir' }
  ],

  // Photos de la galerie (actuellement des emplacements Ã  remplacer par les vraies photos du parc).
  galerie: [
    { src: 'images/ph-gal-2.jpg', alt: 'Tyrolienne MÃ©ga 350', legende: 'La MÃ©ga Tyro 350', tall: true },
    { src: 'images/ph-gal-1.jpg', alt: 'Parcours accrobranche entre les arbres', legende: 'Entre les arbres' },
    { src: 'images/ph-gal-4.jpg', alt: 'Famille sur un parcours accrobranche', legende: 'En famille' },
    { src: 'images/ph-gal-3.jpg', alt: 'Vue sur la riviÃ¨re et les remparts', legende: 'RiviÃ¨re & remparts' },
    { src: 'images/ph-gal-5.jpg', alt: 'Parcours Via ExtrÃªme', legende: 'Le parcours ExtrÃªme' }
  ],

  horaires: [
    { jour: 'Mercredi (hors vacances)', heure: '13h â€“ 17h' },
    { jour: 'Sam / Dim / FÃ©riÃ©s', heure: '9h â€“ 17h' },
    { jour: 'Pendant les vacances', heure: 'Tous les jours, 9h â€“ 17h' }
  ],
  vacances: '1er â€“ 17 mai Â· 4 juillet â€“ 17 aoÃ»t Â· 10 â€“ 25 octobre Â· 19 dÃ©cembre â€“ 1er fÃ©vrier 2027.',

  avantDeVenir: [
    'RÃ©servation obligatoire, places limitÃ©es par crÃ©neau',
    "Moins de 15 ans : accompagnÃ©s d'un adulte majeur sur les parcours",
    '15 Ã  17 ans : adulte responsable prÃ©sent au sol',
    'Chaussures fermÃ©es et tenue sportive recommandÃ©es',
    "Consultez les conditions d'accÃ¨s avant rÃ©servation"
  ],

  cadeauEtapes: [
    { n: '01', titre: 'Choisissez un montant', detail: 'De 20 Ã  26 euros, selon le pass souhaitÃ©.' },
    { n: '02', titre: 'Recevez le bon en 2 clics', detail: 'EnvoyÃ© par email, imprimable ou Ã  prÃ©senter sur mobile.' },
    { n: '03', titre: 'Valable 1 an', detail: 'De quoi choisir la date idÃ©ale pour se lancer.' }
  ],

  partenaires: [
    { nom: 'RÃ©gion<br>RÃ©union', role: 'Soutien institutionnel', url: 'https://www.regionreunion.com/' },
    { nom: 'Cilaosa<br>Parc Aventure', role: 'Partenaire local', url: 'https://www.cilaosparc.com/' },
    { nom: 'DEAL<br>RÃ©union', role: 'Partenaire environnemental', url: 'http://www.reunion.developpement-durable.gouv.fr/' },
    { nom: 'Ville de<br>Saint-Pierre', role: 'CollectivitÃ© locale', url: 'https://www.saintpierre.re/' },
    { nom: 'Office de tourisme<br>Sud RÃ©union', role: 'Partenaire tourisme', url: 'https://www.sudreuniontourisme.fr/' }
  ]

};
