
import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';

function ScrollToTop() {
  const { pathname } = useLocation();
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const handleBackToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <>
        <img src='/image/top.png' alt='top' onClick={handleBackToTop} className={`fixed bottom-[50px] right-[30px] z-[1000] cursor-pointer ${isVisible ? 'opacity-1 translate-y-0 ' : 'opacity-0 translate-y-5'} duration-300`} />
        {/* top-keyframe */}
    </>
  );
}

export default ScrollToTop;
