import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import Maps from "./components/Map";

import App from "./App";

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <App />
    <br></br>
    <br></br>
    <br></br>
    <br></br>
    <br></br>
    <br></br>
    <br></br>
    <br></br>
    <Maps />
  </StrictMode>
);
