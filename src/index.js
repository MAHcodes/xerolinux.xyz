import React from "react";
import ReactDOM from "react-dom/client";
import "./reset.css";
import "./index.css";
import App from "./App";
import ThemeContextProvider from "./hooks/ThemeContext";

ReactDOM.createRoot(document.getElementById("root")).render(
  <ThemeContextProvider>
    <App />
  </ThemeContextProvider>
);
