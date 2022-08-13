import styled from "styled-components";
import lightbg from "../assets/images/lightbg.avif";
import darkbg from "../assets/images/darkbg.avif";
import { useContext } from "react";
import { ThemeContext } from "../contexts/ThemeContext";

const Box = (props) => {
  const { theme } = useContext(ThemeContext);
  return (
    <Div noBR={props.noBR} theme={theme}>
      {props.children}
    </Div>
  );
};

const Div = styled.div`
  background-color: rgb(var(--bg2));
  border-radius: ${(props) =>
    props.noBR === true ? "0" : "var(--border-radius)"};
  padding: 1rem;
  background-image: url(${(props) =>
    props.theme === true ? lightbg : darkbg});
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
`;

export default Box;
