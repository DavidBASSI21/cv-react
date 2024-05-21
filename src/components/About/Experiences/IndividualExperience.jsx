/* eslint-disable react/no-danger */

import DOMPurify from 'dompurify';
import PropTypes from 'prop-types';

import './IndividualExperience.scss';

const IndividualExperience = ({ title, location, date, description }) => {
  const markup = { __html: DOMPurify.sanitize(description) };
  return (
    <div className="experience-container">
      <h2 className="experience-title">{title} </h2>
      <h3 className="experience-location">{location}</h3>
      <h4 className="experience-date">{date}</h4>
      <p className="experience-description" dangerouslySetInnerHTML={markup} />
    </div>
  );
};

IndividualExperience.propTypes = {
  title: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
};
export default IndividualExperience;
