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

  return (
    <article className="ProjectCard">
      {/* Background image */}
      {backgroundImage && (
        <div className="ProjectCard-background-wrapper">
          <div className="ProjectCard-background">
            <img src={backgroundImage} alt={name} loading="lazy" />
          </div>
        </div>
      )}

      {/* Main project image */}
      {image && (
        <img
          className="ProjectCard-image"
          src={image}
          alt={name}
          loading="lazy"
        />
      )}

      <h3>{name}</h3>
      <p>{description}</p>

      <p className="ProjectCard-stack">{stack.join(' · ')}</p>

      {/* Screenshots */}
      {screenshots && screenshots.length > 0 && (
        <div className="ProjectCard-screenshots">
          {screenshots.map((screenshot, index) => (
            <img
              key={screenshot}
              className="ProjectCard-screenshot"
              src={screenshot}
              alt={`Capture d'écran ${index + 1}`}
              loading="lazy"
            />
          ))}
        </div>
      )}

      <a
        className="ProjectCard-link"
        href={link || githubUrl}
        target="_blank"
        rel="noopener noreferrer"
      >
        {link ? 'Accéder au projet' : 'Voir sur GitHub'}
      </a>
    </article>
  );
}

export default ProjectCard;
