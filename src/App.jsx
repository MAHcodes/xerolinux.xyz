import { Route, Routes } from "react-router-dom";
import Donate from "./components/Donate";
import Home from "./components/Home";
import Spins from "./components/Spins"
import Header from "./components/Header";
import { PopUpContext } from "./contexts/PopUpContext";
import PopUp from "./components/PopUp";
import Announcements from "./components/Announcements";
import { useContext } from "react";
import Footer from "./components/Footer";

const App = () => {
  const { popUp } = useContext(PopUpContext);

  return (
    <>
      {popUp && <PopUp popUp={popUp} />}
      <Announcements />
      <Header />
      <Routes>
        <Route path="/donate" element={<Donate img />} />
        <Route path="/" element={<Home />} />
        <Route path="/spins" element={<Spins />} />
      </Routes>
      <Footer />
    </>
  );
};

export default App;
