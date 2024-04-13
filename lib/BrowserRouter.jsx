import { createContext, useState } from "react";
import { useEffect } from "react";

const BrowserContext = createContext();
const routerState = {};

function BrowserRouter({ children }) {
  const [currentURL, setCurrentURL] = useState(new URL(window.location.href));

  useEffect(() => {
    function handlePopStateEvent(e) {
      e.preventDefault();
      setCurrentURL(new URL(window.location.href));
    }

    window.addEventListener("popstate", handlePopStateEvent);
    return () => window.removeEventListener("popstate", handlePopStateEvent);
  }, []);

  return (
    <BrowserContext.Provider value={{ routerState, currentURL, setCurrentURL }}>
      {children}
    </BrowserContext.Provider>
  );
}

export default BrowserRouter;
export { BrowserContext };
