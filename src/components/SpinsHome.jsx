import SpinsGallery from "./SpinsGallery"
import SpinsIntroduction from "./SpinsIntro"
import SpinsSelection from "./SpinsSelection"
import SpinsReasons from "./SpinsOutro";

const SpinsHome = () => {
  
    return (
      <div className="Home">
        <SpinsGallery />
        <SpinsIntroduction />
        <SpinsSelection />
        <SpinsReasons />
      </div>
    );
  };

  
  export default SpinsHome;