import './Introduction.scss';
import main from '../../../assets/images/main.svg';

const Introduction = () => {
  return (
    <div className="introduction-container">
      <div className="introduction-title-container">
        <h2 className="introduction-title">Oh, bonjour </h2>
        <img className="introduction-title-img" src={main} alt="" />
      </div>
      <p className="introduction-paragraph">
        Bienvenue ! Je m&apos;appelle David,{' '}
        <strong className="introduction-paragraph-strong">
          développeur web Front-End {'  '}
        </strong>
        spécialisé {'  '}
        <strong className="introduction-paragraph-strong"> React</strong>,
        actuellement étudiant au sein de l&apos;
        <strong className="introduction-paragraph-strong">
          école O&apos;clock
        </strong>
        .
      </p>
      <p className="introduction-paragraph">
        À la recherche d&apos;un{' '}
        <strong className="introduction-paragraph-strong">
          contrat de professionnalisation{' '}
        </strong>
        (rythme de 1 semaine à l&apos;école et 2 semaines en entreprise) pour
        une{' '}
        <strong className="introduction-paragraph-strong">
          rentrée au 14 octobre 2024
        </strong>
        , il me tarde d&apos;intégrer une entreprise où je pourrai continuer à
        développer les compétences et connaissances acquises au cours de ma
        formation.
      </p>
      <p className="introduction-paragraph">
        <strong className="introduction-paragraph-strong">
          Organisé, fiable, rigoureux
        </strong>{' '}
        et doté d&apos;une{' '}
        <strong className="introduction-paragraph-strong">
          forte conscience professionnelle
        </strong>
        , j&apos;aime me surpasser pour aller au-delà des attentes des clients
        avec lesquels je travaille. Je sais m&apos;investir pleinement, et être
        proactif dans un projet, afin de mener celui-ci à son terme, tout en
        veillant à respecter les exigences coûts, qualités et délais.
      </p>
    </div>
  );
};

export default Introduction;
