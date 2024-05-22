import PropTypes from 'prop-types';

const Project = ({ title, techno, description, isReady, siteUrl, repoUrl }) => {
  return (
    <div className="project-container">
      <div
        className="project-header"
        // style={{
        //   backgroundImage: `url(${picture})`,
        //   backgroundSize: 'cover',
        //   backgroundPosition: 'center',
        // }}
      />
      <h3 className="project-title">{title}</h3>
      <p className="project-description">{description}</p>
      <span className="project-techno">{techno}</span>
      {isReady && (
        <div className="project-links-container">
          <a
            href={siteUrl}
            target="_blank"
            rel="noreferrer"
            className="project-link-redirect"
          >
            Accéder au site
          </a>
          <a
            href={repoUrl}
            target="_blank"
            rel="noreferrer"
            className="project-link-redirect"
          >
            Voir le repo
          </a>
        </div>
      )}
    </div>
  );
};

Project.propTypes = {
  title: PropTypes.string.isRequired,
  techno: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  isReady: PropTypes.bool.isRequired,
  siteUrl: PropTypes.string.isRequired,
  repoUrl: PropTypes.string.isRequired,
  // picture: PropTypes.string.isRequired,
};

export default Project;
