import './ProjectCard.scss';

function ProjectCard({ project, onOpen }) {
  const { name, description, stack, image, backgroundImage } = project;

  // `image` = visuel pleine largeur (cadré), `backgroundImage` = logo (affiché entier).
  const cover = image || backgroundImage;
  const isLogo = !image && Boolean(backgroundImage);

  return (
    <article className="ProjectCard">
      <div className="ProjectCard-media">
        {cover ? (
          <img
            className={
              isLogo
                ? 'ProjectCard-cover ProjectCard-cover--logo'
                : 'ProjectCard-cover'
            }
            src={cover}
            alt={name}
            loading="lazy"
          />
        ) : (
          <span className="ProjectCard-placeholder" aria-hidden="true">
            {name.charAt(0)}
          </span>
        )}
      </div>

      {/* Le bouton porte l'action ; son ::after couvre toute la carte,
          ce qui la rend cliquable sans imbriquer d'éléments interactifs. */}
      <h3>
        <button type="button" className="ProjectCard-trigger" onClick={onOpen}>
          {name}
        </button>
      </h3>

      <p className="ProjectCard-description">{description}</p>

      <div className="ProjectCard-footer">
        <p className="ProjectCard-stack">{stack.join(' · ')}</p>
        <span className="ProjectCard-cue" aria-hidden="true">
          Voir le détail
        </span>
      </div>
    </article>
  );
}

export default ProjectCard;
