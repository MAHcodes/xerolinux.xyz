import styled from "styled-components";

const Title = ({ text, sec, alignLeft }) => {
  return sec ? <H2>{text}</H2> : <H1 al={alignLeft}>{text}</H1>;
};

const H1 = styled.h1`
  font-size: var(--fz-1);
  font-weight: bold;
  color: rgb(var(--fg2));
  text-align: ${(props) => (props.al ? "left" : "center")};
  margin-block-end: ${(props) => (props.al ? ".25em" : "1em")};

  @media (max-width: 800px) {
    --fz-1: 1.75rem;
  }
`;

const H2 = styled.h2`
  font-size: var(--fz-2);
  color: rgb(var(--fg));
  margin-block-end: 1em;
`;

export default Title;
