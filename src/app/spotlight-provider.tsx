'use client';

import React, { useEffect, useState, useRef } from 'react';
import useSpotlightEffect from '../hooks/useSpotlightEffect';

interface SpotlightProviderProps {
  children: React.ReactNode;
}

const SpotlightProvider: React.FC<SpotlightProviderProps> = ({ children }) => {
  const [isDesktop, setIsDesktop] = useState(false);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const desktopCheck =
        window.matchMedia('(pointer: fine)').matches && window.innerWidth > 768;
      setIsDesktop(desktopCheck);

      const handleResize = () => {
        const updatedDesktopCheck =
          window.matchMedia('(pointer: fine)').matches &&
          window.innerWidth > 768;
        setIsDesktop(updatedDesktopCheck);
      };

      window.addEventListener('resize', handleResize);
      return () => window.removeEventListener('resize', handleResize);
    }
  }, []);

  const spotlightConfig = {
    glowColor: '112, 26, 117',
    spotlightSize: 280,
    fadeSpeed: 0.25,
  };

  const canvasRef = useSpotlightEffect(spotlightConfig, isDesktop);

  return (
    <>
      {children}
      {isDesktop && canvasRef && (
        <canvas
          ref={canvasRef}
          style={{
            position: 'fixed',
            top: 0,
            left: 0,
            width: '100vw',
            height: '100vh',
            pointerEvents: 'none',
            zIndex: -1,
          }}
        />
      )}
    </>
  );
};

export default SpotlightProvider;
