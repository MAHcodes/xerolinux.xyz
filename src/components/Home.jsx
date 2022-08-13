import Announcements from "./Announcements";
import Header from "./Header";
import Hero from "./Hero";
import Features from "./Features";
import Customization from "./Customization";
import Videos from "./Videos";
import FAQ from "./FAQ";
import Footer from "./Footer";
import faqsJSON from "../content/FAQs.json";
import vidsJSON from "../content/YoutubeVideos.json";
import { useContext } from "react";
import { PopUpContext } from "../contexts/PopUpContext";
import PopUp from "./PopUp";
import { ReleaseCountdownContext } from "../contexts/ReleaseCountdownContext";
import ReleaseCountdown from "./ReleaseCountdown";
import Download from "./Download";
import Donate from "./Donate";

const Home = () => {
  const { popUp } = useContext(PopUpContext);
  const countdown = useContext(ReleaseCountdownContext);

  return (
    <div className="Home">
      {popUp && <PopUp popUp={popUp} />}
      <Announcements />
      <Header />
      <Hero countdown={countdown} />
      <Donate />
      {countdown ? <ReleaseCountdown countdown={countdown} /> : <Download />}
      <Features />
      <Customization />
      <Videos
        title="XeroLinux Official Videos"
        urls={vidsJSON.XeroLinux_Videos}
      />
      <Videos title="XeroLinux Previews" urls={vidsJSON.XeroLinux_Previews} />
      <FAQ faqs={faqsJSON} />
      <Footer />
    </div>
  );
};

export default Home;
