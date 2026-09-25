import projects from '../../data/projects';
import ProjectCard from '../ProjectCard/ProjectCard';

import './ProjectsSection.scss';

function ProjectsSection() {
  return (
    <section id="projets" className="ProjectsSection">
      <h2>Projets</h2>

      <div className="ProjectsSection-grid">
        {projects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </section>
  );
}

export default ProjectsSection;
