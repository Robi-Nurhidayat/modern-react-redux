import { createContext, useEffect, useState } from "react";

const NavigationContext = createContext();

function NavigationProvider({ children }) {
  const [currentPath, setCurrentpath] = useState(window.location.pathname);

  useEffect(() => {
    const handle = () => {
      setCurrentpath(window.location.pathname);
    };

    window.addEventListener("popstate", handle);

    return () => {
      window.removeEventListener("popstate", handle);
    };
  }, []);
  return (
    <NavigationContext.Provider value={{}}>
      {currentPath}
      {children}
    </NavigationContext.Provider>
  );
}

export { NavigationProvider };
export default NavigationContext;
