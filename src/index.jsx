import React from "react";
import ReactDOM from "react-dom/client";
import "./reset.css";
import "./index.css";
import App from "./App";
import ThemeContextProvider from "./contexts/ThemeContext";
import PopUpContextProvider from "./contexts/PopUpContext";
import ReleaseCountdownContextProvider from "./contexts/ReleaseCountdownContext";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Donate from "./components/Donate";

ReactDOM.createRoot(document.getElementById("root")).render(
  <ThemeContextProvider>
    <PopUpContextProvider>
      <ReleaseCountdownContextProvider>
        <Router>
          <Routes>
            <Route path="/donate" element={<Donate />} />
            <Route path="/" element={<App />} />
          </Routes>
        </Router>
      </ReleaseCountdownContextProvider>
    </PopUpContextProvider>
  </ThemeContextProvider>
);
