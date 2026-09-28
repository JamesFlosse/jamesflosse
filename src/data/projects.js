// `description` : une phrase, affichée sur la carte.
// `longDescription` : texte détaillé de la fenêtre projet (retours à la ligne
//   conservés) ; si null, la description courte est reprise.
// `link` (site en ligne) ou `githubUrl` (dépôt) : le bouton n'apparaît que si
//   l'un des deux est renseigné.
// `backgroundImage` = logo, `image` = visuel pleine largeur, `screenshots` =
//   galerie de la fenêtre projet.
const projects = [
  {
    id: '2',
    name: 'BoardGameStudios',
    description:
      "Site vitrine d'un studio de jeux indépendant : présentation du catalogue et actualités.",
    longDescription:
      "Site vitrine d'un studio de jeux indépendant, pensé pour accompagner le lancement de ses titres.\n\n" +
      'Il présente le catalogue et le studio — ses valeurs, son modèle économique et ses recrutements —, ' +
      'relaie les actualités et la couverture presse, et recueille les candidatures au programme de bêta fermée.',
    githubUrl: null,
    link: 'https://boardgamestudios.fr', // Lien personnalisé pour les projets privés ou sans repo GitHub
    stack: ['React', 'Node.js'],
    image: null,
    backgroundImage: null,
    screenshots: ['images/project/bgs/1.png', 'images/project/bgs/2.png'],
  },
  {
    id: '1',
    name: 'Association Entraide Chômeurs',
    description:
      "Création du site de l'association : vitrine et back-office pour le suivi des adhérents.",
    longDescription:
      "Refonte de la présence numérique de l'association, qui accompagne les personnes en recherche " +
      "d'emploi et de logement dans leurs démarches d'insertion.\n\n" +
      "Le site public présente l'association, ses valeurs et ses actualités.\n\n" +
      'Le back-office assure le suivi des personnes accompagnées : fiches membres, ateliers, dispositifs ' +
      'et données de référence. ' +
      "Un tableau de bord agrège les indicateurs d'activité, avec des statistiques complètes par année " +
      'et un export PDF pour les bilans.',
    githubUrl: null,
    link: null, // Lien personnalisé pour les projets privés ou sans repo GitHub
    stack: ['Laravel', 'Filament'],
    image: null,
    backgroundImage: 'images/project/aec/logo.png',
    screenshots: ['images/project/aec/1.png', 'images/project/aec/2.png'],
  },
];

export default projects;
