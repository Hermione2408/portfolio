// Spotlight.js
import React, { useEffect } from 'react';
import { useSpotlight } from '../../utils/SpotlightContext';

export const Spotlight = () => {
  const { position, setPosition } = useSpotlight();

  useEffect(() => {
    const updatePosition = (e) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('mousemove', updatePosition);

    return () => {
      window.removeEventListener('mousemove', updatePosition);
    };
  }, [setPosition]);

  return (
    <div
      className="focus"
      style={{
        background: `radial-gradient(circle at ${position.x}px ${position.y}px, rgba(28, 110, 164, 0.3), rgba(0, 31, 63, 0.2) 10%, transparent 20%)`,
        position: 'fixed',
        pointerEvents: 'none',
        zIndex: 0, // Ensure it's above the background but below other content
      }}
    />
  );
};

