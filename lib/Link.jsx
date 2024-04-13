import { BrowserContext } from "./BrowserRouter";
import { useContext } from "react";

function Link({ children, to }) {
  const { setCurrentURL } = useContext(BrowserContext);

  function handleNavigation() {
    history.pushState({}, "", to);
    setCurrentURL(new URL(window.location.origin + to));
  }

  return <a onClick={handleNavigation}>{children}</a>;
}

export default Link;
