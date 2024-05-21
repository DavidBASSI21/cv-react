import './Portfolio.scss';
import Project from './Project';
import projectsDatas from '../../data/portfolio';

const Portfolio = () => {
  return (
    <div className="portfolio-container">
      {projectsDatas.map((currentProject) => (
        <Project key={currentProject.id} {...currentProject} />
      ))}
    </div>
  );
};

export default Portfolio;
