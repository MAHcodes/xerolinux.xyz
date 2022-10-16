import Hero from "./Hero";
import Features from "./Features";
import Customization from "./Customization";
import Videos from "./Videos";
import FAQ from "./FAQ";
import faqsJSON from "../content/FAQs.json";
import vidsJSON from "../content/YoutubeVideos.json";
import { useContext } from "react";
import { ReleaseCountdownContext } from "../contexts/ReleaseCountdownContext";
import ReleaseCountdown from "./ReleaseCountdown";
import Download from "./Download";
import Message from "./Message";
import Donate from "./Donate";

const Home = () => {
  const countdown = useContext(ReleaseCountdownContext);

  return (
    <div className="Home">
      <Hero countdown={countdown} />
      <Message />
      {countdown ? <ReleaseCountdown countdown={countdown} /> : <Download />}
      <Features />
      <Customization />
      <Videos
        title="XeroLinux Official Videos"
        urls={vidsJSON.XeroLinux_Videos}
      />
      <Videos title="XeroLinux Previews" urls={vidsJSON.XeroLinux_Previews} />
      <Donate />
      <FAQ faqs={faqsJSON} />
    </div>
  );
};

export default Home;
