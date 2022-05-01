import { html } from "../content/DisclaimerContent";
import styled from "styled-components";

const Disclaimer = () => {
  const createMarkup = () => {
    return { __html: html };
  };

  return (
    <>
      <Title>
        <Svg width="161" height="126" viewBox="0 0 161 126" fill="none">
          <path
            d="M156 5C156 5 154.919 52.1752 80.5 63C6.08066 73.8248 5 121 5 121"
            stroke="#FFCFF2"
            stroke-width="10"
            stroke-linecap="round"
          />
        </Svg>
        <h1>XeroLinux Disclaimer</h1>
        <Svg width="161" height="126" viewBox="0 0 161 126" fill="none">
          <path
            d="M156 5C156 5 154.919 52.1752 80.5 63C6.08066 73.8248 5 121 5 121"
            stroke="#FFCFF2"
            stroke-width="10"
            stroke-linecap="round"
          />
        </Svg>
      </Title>
      <div dangerouslySetInnerHTML={createMarkup()}></div>
    </>
  );
};

const Svg = styled.svg`
  &:first-of-type {
    transform: rotateZ(30deg);
  }
  &:last-of-type {
    transform: rotateZ(30deg);
  }
  & > path {
    stroke: rgb(var(--fg));
  }
`;

const Title = styled.div`
  display: flex;
  align-items: center;
  padding-inline: 1rem;

  & h1 {
    flex-grow: 2;
    text-align: center;
  }
`;

export default Disclaimer;
