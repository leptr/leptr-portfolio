import Project from "./elements/Project";
import Projects from "./data/Projects";

const Portfolio = () => {
  return (
    <div className="full-page portfolio dark" id="portfolio">
      <div className="section-title no-select">Portfolio</div>
      <div className="sub-container">
        {Projects.map((data) => {
          return (
            <Project
              title={data.title}
              description={data.description}
              mainLink={data.mainLink}
              githubLink={data.githubLink}
              key={data.key}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Portfolio;
