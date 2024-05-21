import './Experiences.scss';
import IndividualExperience from './IndividualExperience';
import experiences from '../../../data/experiences';

const Experiences = () => {
  return (
    <div>
      <h2 className="skills-title">Expériences</h2>
      <div className="individualExperience-container">
        {experiences.map((currentExperience) => (
          <IndividualExperience
            key={currentExperience.id}
            {...currentExperience}
          />
        ))}
      </div>
    </div>
  );
};

export default Experiences;
