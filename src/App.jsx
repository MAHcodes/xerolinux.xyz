import { Route, Routes } from "react-router-dom";
import Donate from "./components/Donate";
import Home from "./components/Home";
import Header from "./components/Header";
import { PopUpContext } from "./contexts/PopUpContext";
import PopUp from "./components/PopUp";
import Announcements from "./components/Announcements";
import { useContext, useRef } from "react";
import Footer from "./components/Footer";
import { Fireworks } from "@fireworks-js/react";

const App = () => {
  const { popUp } = useContext(PopUpContext);
  const ref = useRef(null);

  return (
    <>
      {popUp && <PopUp popUp={popUp} />}
      {popUp === "Treasure" && (
        <Fireworks
          ref={ref}
          options={{
            rocketsPoint: {
              min: 0,
              max: 100,
            },
          }}
          style={{
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            position: "fixed",
            background: "#0000",
            opacity: 1,
            zIndex: 10091,
          }}
        />
      )}
      <Announcements />
      <Header />
      <Routes>
        <Route path="/donate" element={<Donate img />} />
        <Route path="/" element={<Home />} />
      </Routes>
      <Footer />
    </>
  );
};

export default App;
