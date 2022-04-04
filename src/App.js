import Announcements from "./components/Announcements";
import Header from "./components/Header";
import styled from "styled-components";
import Hero from "./components/Hero";
import { useRef } from "react";

const App = () => {
  const wrapperRef = useRef();
  return (
    <div className="App">
      <Wrapper ref={wrapperRef}>
        <Announcements />
        <Header />
      </Wrapper>
      <Hero hdr={wrapperRef} />
    </div>
  );
};

const Wrapper = styled.div`
  position: fixed;
  inset: 0 0 auto;
  z-index; 99;
`;

export default App;
