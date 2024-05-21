import './Footer.scss';
import { FaLinkedinIn, FaGithub } from 'react-icons/fa';
import { LuMail } from 'react-icons/lu';
import { IoPhonePortraitOutline } from 'react-icons/io5';

const Footer = () => {
  const currentDate = new Date();
  const currentYear = currentDate.getFullYear();

  return (
    <div className="footer">
      <div className="socials-list-container">
        <ul className="socials-list">
          <li className="socials-link">
            <a href="https://github.com/DavidBASSI21">
              <FaGithub />
            </a>
          </li>
          <li className="socials-link">
            <a href="https://www.linkedin.com/in/david-bassi/">
              <FaLinkedinIn />
            </a>
          </li>
          <li className="socials-link">
            <a href="mailto:david.bassi.db@gmail.com">
              <LuMail />
            </a>
          </li>
          <li className="socials-link">
            <a href="tel:+330627242907">
              <IoPhonePortraitOutline />
            </a>
          </li>
        </ul>
      </div>
      <p className="footer-text">
        David Bassi &bull; Développeur web front-end &bull; {currentYear}
      </p>
    </div>
  );
};
export default Footer;
