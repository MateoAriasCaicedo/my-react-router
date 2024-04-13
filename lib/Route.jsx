import { useContext } from "react";
import { BrowserContext } from "./BrowserRouter.jsx";

function Route({ children, path }) {
  const { currentURL } = useContext(BrowserContext);
  return currentURL.pathname === path ? children : null;
}

export default Route;
