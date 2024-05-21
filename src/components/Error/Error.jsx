import { Link } from 'react-router-dom';
import './Error.scss';
import { FaArrowRotateLeft } from 'react-icons/fa6';

const Error = () => {
  return (
    <div className="error-container">
      <p className="error-message">
        Oooopsie, il semblerait que la page que vous recherchez soit
        introuvable.
      </p>

      <Link to="/" className="error-redirect">
        <FaArrowRotateLeft /> Retourner à l&apos;accueil
      </Link>
    </div>
  );
};

export default Error;
