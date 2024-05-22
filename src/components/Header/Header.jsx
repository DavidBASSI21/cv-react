import PropTypes from 'prop-types';
import './Header.scss';
import { Menu, X } from 'react-feather';
import { NavLink } from 'react-router-dom';
import pin from '../../assets/images/pin.png';

const Header = ({ dropdownMenuIsOpen, setDropdownMenuIsOpen }) => {
  return (
    <nav className="navbar">
      <NavLink to="/" className="navbar-name">
        David Bassi
      </NavLink>
      <div className="location">
        <p className="navbar-location">Mobilité : nationale&nbsp;</p>
        <img className="navbar-location-img" src={pin} alt="" />
      </div>
      <ul className="navbar-link-container">
        <NavLink
          to="/"
          className={({ isActive }) =>
            isActive ? 'navbar-link navbar-link--active' : 'navbar-link'
          }
        >
          <li>Accueil</li>
        </NavLink>
        <NavLink
          to="/about"
          className={({ isActive }) =>
            isActive ? 'navbar-link navbar-link--active' : 'navbar-link'
          }
        >
          <li>A propos</li>
        </NavLink>
        <NavLink
          to="/portfolio"
          className={({ isActive }) =>
            isActive ? 'navbar-link navbar-link--active' : 'navbar-link'
          }
        >
          <li>Portfolio</li>
        </NavLink>
      </ul>
      <button
        type="button"
        className="toggle-button"
        onClick={() => {
          setDropdownMenuIsOpen(!dropdownMenuIsOpen);
        }}
      >
        {dropdownMenuIsOpen ? <X /> : <Menu />}
      </button>
      <div
        className={
          dropdownMenuIsOpen
            ? 'dropdown-menu dropdown-menu--open'
            : ' dropdown-menu'
        }
      >
        <NavLink
          to="/"
          className={({ isActive }) =>
            isActive ? 'navbar-link navbar-link--active' : 'navbar-link'
          }
          onClick={() => {
            setDropdownMenuIsOpen(!dropdownMenuIsOpen);
          }}
        >
          Accueil
        </NavLink>
        <NavLink
          to="/about"
          className={({ isActive }) =>
            isActive ? 'navbar-link navbar-link--active' : 'navbar-link'
          }
          onClick={() => {
            setDropdownMenuIsOpen(!dropdownMenuIsOpen);
          }}
        >
          A propos
        </NavLink>{' '}
        <NavLink
          to="/portfolio"
          className={({ isActive }) =>
            isActive ? 'navbar-link navbar-link--active' : 'navbar-link'
          }
          onClick={() => {
            setDropdownMenuIsOpen(!dropdownMenuIsOpen);
          }}
        >
          Portfolio
        </NavLink>
      </div>
    </nav>
  );
};

Header.propTypes = {
  dropdownMenuIsOpen: PropTypes.bool.isRequired,
  setDropdownMenuIsOpen: PropTypes.func.isRequired,
};

export default Header;
