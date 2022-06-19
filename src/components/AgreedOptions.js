import Buttons from "./Buttons";
import Button from "./Button";
import Title from "./Title";
import Box from "./Box";
import styled, { keyframes, css } from "styled-components";

const AgreedOptions = ({ agreed }) => {
  return (
    <Div agreed={agreed}>
      <Box>
        <Title text=".: Pick a Download Source :." />

        <Wrapper>
          <Center>
            <P>Provided By{" "}
              <a href="http://sf.net" target="_blank" rel="noreferrer">
                SourceForge<br />
              </a>
            <sub>(Multi-Location)</sub></P>
            <Buttons mb="1rem">
              <a
                href="https://sourceforge.net/projects/xerolinux/files/Releases/Main/xerolinux-main-x86_64.iso/download"
                target="_blank"
                rel="noreferrer"
              >
                <Button
                  text="Download"
                  padding=".75em 2em"
                  fz="var(--fz-5)"
                  primary
                  themed
                  bg="#00cc00"
                  clr="rgb(var(--black))"
                />
              </a>
            </Buttons>
          </Center>
          <Img><img src="https://i.imgur.com/FcxQ32b.png" width="200" alt="Download img" /></Img>
          <Center>
            <P>
              Provided By{" "}
              <a href="http://Funami.tech" target="_blank" rel="noreferrer">
                Funami.tech <br />
              </a>
              <sub>(South Korea)</sub>
            </P>
            <Buttons mb="1rem">
              <a
                href="http://tinyurl.com/xero-mirror"
                target="_blank"
                rel="noreferrer"
              >
                <Button
                  text="Download"
                  padding=".75em 2em"
                  fz="var(--fz-5)"
                  primary
                  themed
                  bg="#aa00ff"
                  clr="rgb(var(--white))"
                />
              </a>
            </Buttons>
          </Center>
        </Wrapper>
      </Box>
    </Div>
  );
};

const popIn = keyframes`
  from {
    transform: rotateX(90deg);
  }
`;

const Div = styled.div`
  border: var(--border) solid rgb(var(--fg));
  border-radius: var(--border-radius);
  margin-block: 2rem;
  background-color: rgb(var(--bg2));
  transform-origin: center bottom;
  animation: ${popIn} 400ms var(--transition-timing-function);
  display: none;

  ${(props) =>
    props.agreed &&
    css`
      display: block;
    `}
`;

const Wrapper = styled.div`
  display: flex;
  align-items: stretch;
  justify-content: space-around;
  gap: 0.5rem;

  @media (max-width: 800px) {
    flex-direction: column;
  }
`;

const Center = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-direction: column;

  @media (max-width: 800px) {
    align-items: stretch;
  }
`;

const P = styled.p`
  margin-block: 0.5em;
  text-align: center;

  & > a {
    color: rgb(var(--fg2));
    text-decoration: underline;
  }
`;

const Img = styled.div`
 margin-inline: auto;
 width: 30%;
`

export default AgreedOptions;
