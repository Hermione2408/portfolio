import React, { createContext, useState, useContext } from 'react';

const SpotlightContext = createContext();

export const useSpotlight = () => useContext(SpotlightContext);

export const SpotlightProvider = ({ children }) => {
  const [position, setPosition] = useState({ x: 0, y: 0 });

  return (
    <SpotlightContext.Provider value={{ position, setPosition }}>
      {children}
    </SpotlightContext.Provider>
  );
};