// TODO(james) : remplace ces entrées d'exemple par tes vrais projets
// (y compris tes dépôts privés, le lien GitHub suffit même si le repo n'est pas public).
const projects = [
  {
    id: '2',
    name: 'BoardGameStudios',
    description: 'Description courte du projet, une à deux phrases.',
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
      "Développement du système de backoffice de l'association. Gestion de suivi complet d'un adhérent",
    githubUrl: null,
    link: null, // Lien personnalisé pour les projets privés ou sans repo GitHub
    stack: ['Laravel', 'Filament'],
    image: null,
    backgroundImage: 'images/project/aec/logo.png',
    screenshots: ['images/project/aec/1.png', 'images/project/aec/2.png'],
  },
];

export default projects;
