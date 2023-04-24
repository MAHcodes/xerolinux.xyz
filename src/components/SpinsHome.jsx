import SpinsGallery from "./SpinsGallery"
import SpinsIntroduction from "./SpinsIntro"
import SpinsReasons from "./SpinsOutro";

const SpinsHome = () => {
  
    return (
      <div className="Home">
        <SpinsGallery />
        <SpinsIntroduction />
        <SpinsReasons />
      </div>
    );
  };

  
  export default SpinsHome;