import { useEffect, useState } from 'react';
import './Up.scss';
import { PiArrowBendDoubleUpRightLight } from 'react-icons/pi';

const Up = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY < 400) {
        setIsVisible(false);
      } else {
        setIsVisible(true);
      }
    };
    window.addEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="button-up">
      <button
        type="button"
        className={
          isVisible ? 'up-container' : 'up-container up-container-hidden'
        }
        onClick={() => {
          window.scrollTo({ top: 0, behavior: 'smooth' });
        }}
      >
        <div className="up-content">
          <PiArrowBendDoubleUpRightLight />
        </div>
      </button>
    </div>
  );
};

export default Up;
