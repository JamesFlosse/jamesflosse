import { useEffect, useRef } from 'react';

import './ProjectModal.scss';

// Basé sur l'élément natif <dialog> : la fermeture par Échap, le piège de focus
// et le retour du focus sur l'élément d'origine sont gérés par le navigateur.
function ProjectModal({ project, onClose }) {
  const dialogRef = useRef(null);

  useEffect(() => {
    const dialog = dialogRef.current;

    if (dialog) {
      if (project && !dialog.open) {
        dialog.showModal();
        document.body.style.overflow = 'hidden';
      } else if (!project && dialog.open) {
        dialog.close();
      }
    }

    return () => {
      document.body.style.overflow = '';
    };
  }, [project]);

  // Clic sur le fond assombri (et non sur le contenu) : on ferme.
  const handleBackdropClick = (event) => {
    if (event.target === dialogRef.current) {
      onClose();
    }
  };

  const url = project && (project.link || project.githubUrl);
  const urlLabel =
    project && project.link ? 'Accéder au projet' : 'Voir sur GitHub';
  const gallery = (project && project.screenshots) || [];

  return (
    // Le clic sur le fond ferme la fenêtre. Les règles ci-dessous réclament un
    // équivalent clavier : <dialog> le fournit nativement via la touche Échap.
    /* eslint-disable-next-line jsx-a11y/click-events-have-key-events, jsx-a11y/no-noninteractive-element-interactions */
    <dialog
      ref={dialogRef}
      className="ProjectModal"
      onClose={onClose}
      onClick={handleBackdropClick}
    >
      {project && (
        <div className="ProjectModal-inner">
          <button
            type="button"
            className="ProjectModal-close"
            onClick={onClose}
            aria-label="Fermer"
          >
            &times;
          </button>

          <h3>{project.name}</h3>
          <p className="ProjectModal-stack">{project.stack.join(' · ')}</p>

          <p className="ProjectModal-description">
            {project.longDescription || project.description}
          </p>

          {gallery.length > 0 && (
            <div className="ProjectModal-gallery">
              {gallery.map((screenshot, index) => (
                <img
                  key={screenshot}
                  src={screenshot}
                  alt={`${project.name} — aperçu ${index + 1}`}
                  loading="lazy"
                />
              ))}
            </div>
          )}

          {url && (
            <a
              className="ProjectModal-link"
              href={url}
              target="_blank"
              rel="noopener noreferrer"
            >
              {urlLabel}
            </a>
          )}
        </div>
      )}
    </dialog>
  );
}

export default ProjectModal;
