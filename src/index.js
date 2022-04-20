import React from "react";
import ReactDOM from "react-dom/client";
import "./reset.css";
import "./index.css";
import App from "./App";
import ThemeContextProvider from "./hooks/ThemeContext";
import PopUpContextProvider from "./hooks/PopUpContext";

ReactDOM.createRoot(document.getElementById("root")).render(
  <ThemeContextProvider>
    <PopUpContextProvider>
      <App />
    </PopUpContextProvider>
  </ThemeContextProvider>
);
