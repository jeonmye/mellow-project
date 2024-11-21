import { useEffect, useState } from 'react';

function useViewport() {
  const [width, setWidth] = useState(window.innerWidth);
  const [height, setHeight] = useState(window.innerHeight);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768 || window.outerWidth <= 768);
  const [isDesktop, setDesktop] = useState(window.innerWidth <= 1024 || window.outerWidth <= 1024);
  const [isLoaded, setIsLoaded] = useState(false);

  const handleResize = () => {
    setWidth(window.innerWidth);
    setHeight(window.innerHeight);
    setIsMobile(window.innerWidth <= 768 || window.outerWidth <= 768);
    setDesktop(window.innerWidth <= 1024 || window.outerWidth <= 1024);
  };

  useEffect(() => {
    handleResize();
    setIsLoaded(true);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return {
    width,
    height,
    isMobile,
    isDesktop,
    isLoaded,
  };
}

export default useViewport;
