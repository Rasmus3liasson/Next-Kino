import React, { createContext, useContext } from 'react';

interface NumberContextProps {
  numberArray: Number[];

}

const NumberContext = createContext<NumberContextProps | undefined>(undefined);

export const useNumberContext = (): NumberContextProps => {
  const context = useContext(NumberContext);
  if (!context) {
    throw new Error('useNumberContext must be used within a NumberContextProvider');
  }
  return context;
};

export const NumberContextProvider: React.FC<NumberContextProps> = ({ numberArray }) => {
  return (
    <NumberContext.Provider value={{ numberArray }}>
    </NumberContext.Provider>
  );
};
