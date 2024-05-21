import PropTypes from 'prop-types';

const Project = ({ title, techno, description }) => {
  return (
    <div className="project-container">
      <div className="project-header" />
      <h3 className="project-title">{title}</h3>
      <p className="project-description">{description}</p>
      <span className="project-techno">{techno}</span>
      <button type="button" className="project-button">
        Ce bouton ne fonctionne pas encore
      </button>
    </div>
  );
};

Project.propTypes = {
  title: PropTypes.string.isRequired,
  techno: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
};

export default Project;
