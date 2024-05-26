import PropTypes from 'prop-types';
import ContactForm from '../ContactForm/ContactForm';
import './Home.scss';

const Home = ({ isDesktop }) => {
  return (
    <div className="home-container-under">
      <div className="home-title-container">
        <h1 className="home-title">
          David Bassi <br />
          <span className="home-title-span">
            Développeur web front end junior
          </span>
        </h1>
      </div>
      {isDesktop && (
        <div className="contact-form-container">
          <ContactForm />
        </div>
      )}
    </div>
  );
};

Home.propTypes = {
  isDesktop: PropTypes.bool.isRequired,
};

export default Home;
