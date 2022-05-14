import Announcements from "./components/Announcements";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Features from "./components/Features";
import Credit from "./components/Credit";
import Customization from "./components/Customization";
import Videos from "./components/Videos";
import FAQ from "./components/FAQ";
import Footer from "./components/Footer";
import faqsJSON from "./content/FAQs.json";
import vidsJSON from "./content/YoutubeVideos.json";
import { useContext } from "react";
import { PopUpContext } from "./contexts/PopUpContext";
import PopUp from "./components/PopUp";
import { ReleaseCountdownContext } from "./contexts/ReleaseCountdownContext";
import ReleaseCountdown from "./components/ReleaseCountdown";

const App = () => {
  const { popUp } = useContext(PopUpContext);
  const countdown = useContext(ReleaseCountdownContext);

  return (
    <div className="App">
      {popUp && <PopUp popUp={popUp} />}
      <Announcements />
      <Header />
      <Hero countdown={countdown} />
      { countdown && <ReleaseCountdown countdown={countdown} />}
      <Features />
      <Credit />
      <Customization />
      <Videos title="XeroLinux Videos" urls={vidsJSON.XeroLinux_Videos} />
      <Videos title="XeroLinux Reviews" urls={vidsJSON.XeroLinux_Reviews} />
      <FAQ faqs={faqsJSON} />
      <Footer />
    </div>
  );
};

export default App;
