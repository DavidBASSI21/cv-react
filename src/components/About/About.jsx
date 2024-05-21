import './About.scss';
import Introduction from './Introduction/Introduction';
import Skills from './Skills/Skills';
import Experiences from './Experiences/Experiences';

const About = () => {
  return (
    <div>
      <Introduction />
      <Skills />;
      <Experiences />
    </div>
  );
};

export default About;
