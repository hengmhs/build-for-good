import { createContext, useState } from "react";

const HintsContext = createContext([]);

export const HintsProvider = ({ children }) => {
  const [hints, setHints] = useState({});

  return (
    <HintsContext.Provider value={{ hints, setHints }}>
      {children}
    </HintsContext.Provider>
  );
};

export default HintsContext;
