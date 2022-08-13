import React from "react";
import ReactDOM from "react-dom/client";
import "./reset.css";
import "./index.css";
import App from "./App";
import ThemeContextProvider from "./contexts/ThemeContext";
import PopUpContextProvider from "./contexts/PopUpContext";
import ReleaseCountdownContextProvider from "./contexts/ReleaseCountdownContext";

ReactDOM.createRoot(document.getElementById("root")).render(
  <ThemeContextProvider>
    <PopUpContextProvider>
      <ReleaseCountdownContextProvider>
        <App />
      </ReleaseCountdownContextProvider>
    </PopUpContextProvider>
  </ThemeContextProvider>
);
