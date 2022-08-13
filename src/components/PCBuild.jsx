import PCimg from "../assets/images/pcbuild.jpg";
import styled from "styled-components";
import Title from "./Title";
import Img from "./Img";

const PCBuild = () => {
  return (
    <div>
      <Title noMT text="StationXero AkA The Linux Machine" />
      <Img maxWidth="85%" src={PCimg} alt="My PC Build" />
      <P>
        That PC is my main one acting as my everyday system. I do all my gaming
        on it. I have recently built it and all parts came from Amazon UK. It's
        an AMD Ryzen build. Click button below to check out build parts on PC
        Part Picker 😉
        <br /> <br />
        At this point in time, this beast is running Windows 11 Pro / XeroLinux
        in Dual-Boot, until I decide otherwise.
      </P>
      <P center small>
        This build @ a glimpse
        <br /> <br />
        ASUS ROG Swift PG279Q Monitor
        <br /> <br />
        AsRock x570 Tai Chi | AMD Ryzen 5 3600x @ 3.8Ghz
        <br /> <br />
        ROG STRiX GTX 1080 8Gb GDDR5X | TeamGroup Delta “R” 32GB DDR4 @3000Mhz
        RGB
        <br /> <br />
        Corsair Obsidian 750D | Corsair RM750x (2018) | ROG Horus GK2000 RGB |
        Logi MX Ergo TrackBall
        <br />
        <br />
        Boot : 256gb SMG 960 Evo nVme | Profile Drive : 1TB SMG 860 Evo SATA |
        Games : 1TB SMG 970 Evo nVme
      </P>
    </div>
  );
};

const P = styled.p`
  text-align: ${(props) => props.center && "center"};
  font-size: ${(props) => props.small && "var(--fz-6)"};
`;

export default PCBuild;
