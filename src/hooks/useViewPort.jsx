import { useEffect, useState } from 'react';

function useViewport() {
  const [width, setWidth] = useState(window.innerWidth);
  const [height, setHeight] = useState(window.innerHeight);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 600 || window.outerWidth <= 600);
  const [isLoaded, setIsLoaded] = useState(false);

  const handleResize = () => {
    setWidth(window.innerWidth);
    setHeight(window.innerHeight);
    setIsMobile(window.innerWidth <= 600 || window.outerWidth <= 600);
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
    isLoaded,
  };
}

export default useViewport;
