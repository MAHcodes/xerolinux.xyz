import Announcements from "./components/Announcements";
import Header from "./components/Header";
import Hero from "./components/Hero";
import SocialLinks from "./components/SocialLinks";
import Features from "./components/Features";
import Download from "./components/Download";
import Credit from "./components/Credit";
import Customization from "./components/Customization";
import Videos from "./components/Videos";
import FAQ from "./components/FAQ";
import Footer from "./components/Footer";
import faqsJSON from "./FAQs.json";
import vidsJSON from "./YoutubeVideos.json";
import { useContext } from "react";
import { PopUpContext } from "./hooks/PopUpContext";
import PopUp from "./components/PopUp";
import Weather from "./components/Weather";

const App = () => {
  const { popUp } = useContext(PopUpContext);

  return (
    <div className="App">
      {popUp && <PopUp popUp={popUp} />}
      <Announcements />
      <Header />
      <Hero />
      <SocialLinks />
      <Features />
      <Download />
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
