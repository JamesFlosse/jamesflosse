import './ProjectCard.scss';

function ProjectCard({ project }) {
  const {
    name,
    description,
    githubUrl,
    link,
    stack,
    image,
    backgroundImage,
    screenshots,
  } = project;

  // `image` = visuel pleine largeur (cadré), `backgroundImage` = logo (affiché entier).
  const cover = image || backgroundImage;
  const isLogo = !image && Boolean(backgroundImage);

  const url = link || githubUrl;
  const urlLabel = link ? 'Accéder au projet' : 'Voir sur GitHub';

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

      <h3>{name}</h3>
      <p className="ProjectCard-description">{description}</p>

      {screenshots && screenshots.length > 0 && (
        <div className="ProjectCard-screenshots">
          {screenshots.map((screenshot, index) => (
            <img
              key={screenshot}
              src={screenshot}
              alt={`${name} — aperçu ${index + 1}`}
              loading="lazy"
            />
          ))}
        </div>
      )}

      <div className="ProjectCard-footer">
        <p className="ProjectCard-stack">{stack.join(' · ')}</p>

        {url && (
          <a
            className="ProjectCard-link"
            href={url}
            target="_blank"
            rel="noopener noreferrer"
          >
            {urlLabel}
          </a>
        )}
      </div>
    </article>
  );
}

export default ProjectCard;
