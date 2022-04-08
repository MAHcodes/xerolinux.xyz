import Announcements from "./components/Announcements";
import Header from "./components/Header";
import styled from "styled-components";
import Hero from "./components/Hero";
import { useRef } from "react";
import SocialLinks from "./components/SocialLinks";
import Features from "./components/Features";
import Download from "./components/Download";
import Credit from "./components/Credit";
import Customization from "./components/Customization";
import Videos from "./components/Videos";

const App = () => {
  const wrapperRef = useRef();
  return (
    <div className="App">
      <Wrapper ref={wrapperRef}>
        <Announcements />
        <Header />
      </Wrapper>
      <Hero hdr={wrapperRef} />
      <SocialLinks />
      <Features />
      <Download />
      <Credit />
      <Customization />
      <Videos
        title="XeroLinux Videos"
        urls={[
          "https://www.youtube.com/embed/eSo0V0ns4HQ",
          "https://www.youtube.com/embed/9Mtuo0DDgCI",
          "https://www.youtube.com/embed/bU2-UdmrJWg",
        ]}
      />
    </div>
  );
};

const Wrapper = styled.div`
  position: fixed;
  inset: 0 0 auto;
  z-index: 999;
`;

export default App;
