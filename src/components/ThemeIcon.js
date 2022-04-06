import styled, { keyframes } from "styled-components";
import { useEffect } from "react";
import { useContext } from "react";
import { ThemeContext } from "../hooks/ThemeContext";
import sun from "../assets/images/sun.svg";
import moon from "../assets/images/moon.svg";

const ThemeIcon = () => {
  const { theme, setTheme } = useContext(ThemeContext);

  const toggleTheme = () => {
    setTheme(!theme);
  };

  useEffect(() => {
    document.body.classList = theme ? "light" : "dark";
  }, [theme]);

  return (
    <Icon src={theme ? sun : moon} alt="toggle theme" onClick={toggleTheme} />
  );
};

const fadeIn = keyframes`
  from {
    opacity: 0;
    transform: scale(.5) rotate(90deg);
  }
`;

const Icon = styled.img`
  width: 1.5rem;
  object-fit: contain;
  cursor: pointer;
  animation: ${fadeIn} 0.75s var(--transition-timing-function);
`;

export default ThemeIcon;
