import './Header.scss';
import { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';
import pin from '../../assets/images/pin.png';

const Header = () => {
  const [prevScrollPosition, setPrevScrollPosition] = useState(
    window.pageYOffset
  );
  const [top, setTop] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPosition = window.pageYOffset;
      if (prevScrollPosition > currentScrollPosition) {
        setTop(0);
      } else {
        setTop(-100);
      }
      setPrevScrollPosition(currentScrollPosition);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [prevScrollPosition]);

  return (
    <nav style={{ top: `${top}px` }} className="navbar">
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
    </nav>
  );
};

export default Header;
