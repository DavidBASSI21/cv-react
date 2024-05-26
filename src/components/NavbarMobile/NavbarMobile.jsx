import { IoHome } from 'react-icons/io5';
import { AiFillInfoCircle } from 'react-icons/ai';
import { PiProjectorScreenFill } from 'react-icons/pi';
import { IoMdContacts } from 'react-icons/io';
import { NavLink } from 'react-router-dom';

import './NavbarMobile.scss';

const NavbarMobile = () => {
  return (
    <nav className="navbar-mobile-container">
      <NavLink
        to="/"
        className={({ isActive }) =>
          isActive
            ? 'navbar-mobile-link navbar-mobile-link--active'
            : 'navbar-mobile-link'
        }
      >
        <div className="navbar-mobile-link--icon">
          <IoHome />
        </div>
        <div className="navbar-mobile-link--label">Accueil</div>
      </NavLink>

      <NavLink
        to="/about"
        className={({ isActive }) =>
          isActive
            ? 'navbar-mobile-link navbar-mobile-link--active'
            : 'navbar-mobile-link'
        }
      >
        <div className="navbar-mobile-link--icon">
          <AiFillInfoCircle />
        </div>
        <div className="navbar-mobile-link--label">A propos</div>
      </NavLink>

      <NavLink
        to="/portfolio"
        className={({ isActive }) =>
          isActive
            ? 'navbar-mobile-link navbar-mobile-link--active'
            : 'navbar-mobile-link'
        }
      >
        <div className="navbar-mobile-link--icon">
          <PiProjectorScreenFill />
        </div>
        <div className="navbar-mobile-link--label">Portfolio</div>
      </NavLink>

      <NavLink
        to="/contact"
        className={({ isActive }) =>
          isActive
            ? 'navbar-mobile-link navbar-mobile-link--active'
            : 'navbar-mobile-link'
        }
      >
        <div className="navbar-mobile-link--icon">
          <IoMdContacts />
        </div>
        <div className="navbar-mobile-link--label">Contact</div>
      </NavLink>
    </nav>
  );
};

export default NavbarMobile;
