import { useEffect, useState } from 'react';
// import logo from '../../assets/logo.svg';
import { Route, Routes } from 'react-router-dom';
import Header from '../Header/Header';
import Home from '../Home/Home';
import Error from '../Error/Error';
import './App.scss';
import About from '../About/About';
import Footer from '../Footer/Footer';
import Portfolio from '../Portfolio/Portfolio';
import Up from '../Up/Up';
import ContactForm from '../ContactForm/ContactForm';

function App() {
  const [dropdownMenuIsOpen, setDropdownMenuIsOpen] = useState(false);
  const [isSmallScreen, setIsSmallScreen] = useState(window.innerWidth <= 992);
  const [isDesktop, setIsDesktop] = useState(window.innerWidth > 992);

  useEffect(() => {
    const handleResize = () => {
      setIsSmallScreen(window.innerWidth <= 992);
      setIsDesktop(window.innerWidth > 992);
    };

    window.addEventListener('resize', handleResize);

    // Initial check
    handleResize();

    // Cleanup
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);
  return (
    <div className="App">
      <Up />
      <Header
        dropdownMenuIsOpen={dropdownMenuIsOpen}
        setDropdownMenuIsOpen={setDropdownMenuIsOpen}
        isSmallScreen={isSmallScreen}
        isDesktop={isDesktop}
      />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route
          path="/about"
          element={
            <>
              <About />{' '}
            </>
          }
        />
        <Route path="/portfolio" element={<Portfolio />} />
        <Route path="*" element={<Error />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
