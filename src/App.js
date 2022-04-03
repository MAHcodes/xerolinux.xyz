import Announcements from "./components/Announcements";
import Header from "./components/Header";
import styled from "styled-components";
import Hero from "./components/Hero";
import bg from "./assets/images/herobg.png";

function App() {
  return (
    <div className="App">
      <BgWrapper>
        <Wrapper>
          <Announcements />
          <Header />
        </Wrapper>
        <Hero />
      </BgWrapper>
    </div>
  );
}

const Wrapper = styled.div`
  position: fixed;
  inset: 0 0 auto;
  z-index; 99;
`;

const BgWrapper = styled.div`
  background-image: url(${bg});
  background-position: top;
  background-repeat: no-repeat;
  @media (min-width: 1940px) {
    background-size: contain;
  }
`;

export default App;
