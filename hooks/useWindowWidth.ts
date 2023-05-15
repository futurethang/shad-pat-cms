// hooks/useWindowWidth.ts
import { useState, useEffect } from 'react';

const useWindowWidth = (threshold: number): boolean => {
  const [isSmallWindow, setIsSmallWindow] = useState<boolean>(false);

  useEffect(() => {
    const updateWindowWidth = () => setIsSmallWindow(window.innerWidth <= threshold);

    updateWindowWidth();
    window.addEventListener('resize', updateWindowWidth);

    return () => {
      window.removeEventListener('resize', updateWindowWidth);
    };
  }, [threshold]);

  return isSmallWindow;
};

export default useWindowWidth;
