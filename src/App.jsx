import { Route, Routes } from "react-router-dom";
import Donate from "./components/Donate";
import Home from "./components/Home";

const App = () => {
  return (
    <Routes>
      <Route path="/donate" element={<Donate />} />
      <Route path="/" element={<Home />} />
    </Routes>
  );
};

export default App;
