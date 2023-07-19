import Hero from "./Hero";
import Features from "./Features";
import Customization from "./Customization";
import FAQ from "./FAQ";
import faqsJSON from "../content/FAQs.json";
import { useContext } from "react";
import { ReleaseCountdownContext } from "../contexts/ReleaseCountdownContext";
import ReleaseCountdown from "./ReleaseCountdown";
import Download from "./Download";
import Message from "./Message";
import styled from "styled-components";
import Snowfall from "react-snowfall";
import Settings from "../content/Settings.json";
import Lights from "./Lights";

const Home = () => {
  const countdown = useContext(ReleaseCountdownContext);

  return (
    <div className="Home">
      <Lights />
      <Hero countdown={countdown} />
      <Message />
      {countdown ? <ReleaseCountdown countdown={countdown} /> : <Download />}
      <Features />
      <Customization />
      <FAQ faqs={faqsJSON} />
      {Settings.snowfall ? (
        <SnowfallContainer>
          <Snowfall snowflakeCount={70} speed={[0.5, 2.5]} wind={[-0.5, 3.0]} />
        </SnowfallContainer>
      ) : null}
    </div>
  );
};

const SnowfallContainer = styled.div`
  position: fixed;
  inset: 0;
  pointer-events: none;
  z-index: 10100;
`;

export default Home;
