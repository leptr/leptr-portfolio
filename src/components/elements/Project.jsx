const Project = ({ title, description, mainLink, githubLink }) => {
  return (
    <div className="project-card no-select">
      <div className="card-backdrop"></div>
      <div className="card-content">
        <div className="card-info">
          <div className="project-title">{title}</div>
          <div className="project-description">{description}</div>
        </div>
        <div className="card-buttons">
          <a className="button main-link" target="_blank" rel="noopener noreferrer" href={mainLink}>
            Live Demo
          </a>
          <a className="button github-link" target="_blank" rel="noopener noreferrer" href={githubLink}>
            GitHub
          </a>
        </div>
      </div>
    </div>
  );
};

export default Project;
