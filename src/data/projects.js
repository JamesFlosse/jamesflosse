// Chaque projet : `link` (site en ligne) ou `githubUrl` (dépôt) — le bouton
// n'apparaît que si l'un des deux est renseigné. `backgroundImage` sert au logo,
// `image` à un visuel pleine largeur, `screenshots` aux aperçus.
const projects = [
  {
    id: '2',
    name: 'BoardGameStudios',
    description:
      "Site vitrine d'un studio de jeux indépendant : présentation du catalogue et actualités.",
    githubUrl: null,
    link: 'https://boardgamestudios.fr', // Lien personnalisé pour les projets privés ou sans repo GitHub
    stack: ['React', 'Node.js'],
    // TODO(james) : chemin vers une image dans src/assets/ (ou URL), sinon laisse null.
    image: null,
    backgroundImage: null,
    screenshots: [],
  },
  {
    id: '1',
    name: 'Association Entraide Chômeurs',
    description:
      "Création du site de l'association : vitrine et back-office pour le suivi des adhérents.",
    githubUrl: null,
    link: null, // Lien personnalisé pour les projets privés ou sans repo GitHub
    stack: ['Laravel', 'Filament'],
    image: null,
    backgroundImage: 'images/project/aec/logo.png',
    screenshots: ['images/project/aec/1.png', 'images/project/aec/2.png'],
  },
];

export default projects;
