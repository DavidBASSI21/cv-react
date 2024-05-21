/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import { useState } from 'react';
import './Skills.scss';
import cv from '../../../../public/cv-david-bassi.pdf';
import Front from './Front';
import Back from './Back';
import ProjectManagement from './ProjectManagement';
import SoftSkills from './SoftSkills';

const Skills = () => {
  const [skillsVisibility, setSkillsVisibility] = useState([
    false,
    false,
    false,
    false,
  ]);

  const toggleSkill = (index) => {
    setSkillsVisibility((prevState) =>
      prevState.map((value, i) => (i === index ? !value : false))
    );
  };

  return (
    <>
      <h2 className="skills-title">Compétences</h2>

      <div className="skills-container">
        <ul className="skills-cards-container">
          <li
            className={
              skillsVisibility[0]
                ? 'skills-card skills-card-selected'
                : 'skills-card'
            }
            onClick={() => toggleSkill(0)}
          >
            Intégration web & développement front-end
          </li>
          <li
            className={
              skillsVisibility[1]
                ? 'skills-card skills-card-selected'
                : 'skills-card'
            }
            onClick={() => toggleSkill(1)}
          >
            Développement back-end
          </li>

          <li
            className={
              skillsVisibility[2]
                ? 'skills-card skills-card-selected'
                : 'skills-card'
            }
            onClick={() => toggleSkill(2)}
          >
            Gestion de projet numérique
          </li>
          <li
            className={
              skillsVisibility[3]
                ? 'skills-card skills-card-selected'
                : 'skills-card'
            }
            onClick={() => toggleSkill(3)}
          >
            Compétences personnelles
          </li>
        </ul>
      </div>
      {skillsVisibility[0] && <Front />}
      {skillsVisibility[1] && <Back />}
      {skillsVisibility[2] && <ProjectManagement />}
      {skillsVisibility[3] && <SoftSkills />}

      <div className="cv-download-container">
        <a
          className="cv-download-link"
          href="../../../../public/cv-david-bassi.pdf"
          download={cv}
        >
          Télécharger <br /> mon <br />
          CV
        </a>
      </div>
    </>
  );
};

export default Skills;
