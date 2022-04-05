import styled from "styled-components";
import lightbg from "../assets/images/lightbg.png";
import darkbg from "../assets/images/darkbg.png";
import { useContext } from "react";
import { ThemeContext } from "../hooks/ThemeContext";

const Box = () => {
  const { theme } = useContext(ThemeContext);
  console.log(theme);
  return <Div theme={theme}>Box</Div>;
};

const Div = styled.div`
  background-color: rgb(var(--bg2));
  border-radius: var(--border-radius);
  padding: 1rem;
  background-image: ${(props) =>
    props.theme === "light" ? `url(${lightbg})` : `url(${darkbg})`};
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
`;

export default Box;
