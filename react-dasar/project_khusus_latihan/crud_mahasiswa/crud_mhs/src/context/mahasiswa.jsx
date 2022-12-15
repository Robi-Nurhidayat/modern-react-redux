import { createContext } from "react";

const MahasiswaContext = createContext();

function Provider({ children }) {
  return (
    <MahasiswaContext.Provider value={{}}>{children}</MahasiswaContext.Provider>
  );
}

export { Provider };

export default MahasiswaContext;
