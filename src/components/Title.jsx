import styled from "styled-components";

const Title = ({ text, sec, alignLeft, fz2 }) => {
  return sec ? (
    <H2>{text}</H2>
  ) : (
    <H1 fz2={fz2} al={alignLeft}>
      {text}
    </H1>
  );
};

const H1 = styled.h1`
  font-size: ${(props) => (props.fz2 ? "var(--fz-2)" : "var(--fz-1)")};
  font-weight: bold;
  color: rgb(var(--fg2));
  text-align: ${(props) => (props.al ? "left" : "center")};
  margin-block-end: ${(props) => (props.al ? ".25em" : "1em")};
`;

const H2 = styled.h2`
  font-size: var(--fz-2);
  color: rgb(var(--fg));
  margin-block-end: 1em;
`;

export default Title;
