import styled from "styled-components";
import { useEffect, useState } from "react";
import sun from "../assets/images/sun.svg";
import moon from "../assets/images/moon.svg";

const ThemeIcon = () => {
  const [light, setLight] = useState(true);

  const toggleLight = () => {
    setLight(!light);
  };

  useEffect(() => {
    document.body.classList = light ? "light" : "dark";
  }, [light]);

  return (
    <Icon src={light ? sun : moon} alt="toggle theme" onClick={toggleLight} />
  );
};

const Icon = styled.img`
  width: 36px;
  object-fit: contain;
  cursor: pointer;
`;

export default ThemeIcon;
