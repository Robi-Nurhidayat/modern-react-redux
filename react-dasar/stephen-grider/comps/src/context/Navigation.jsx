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

  const navigate = (to) => {
    window.history.pushState({}, "", to);
    setCurrentpath(to);
  };
  return (
    <NavigationContext.Provider value={{ navigate, currentPath }}>
      {/* <div>
        <button onClick={() => navigate("/accordion")}>Go to accordion</button>
        <button onClick={() => navigate("/dropdown")}>Go to dropdown</button>
      </div>
      {currentPath} */}
      {children}
    </NavigationContext.Provider>
  );
}

export { NavigationProvider };
export default NavigationContext;
