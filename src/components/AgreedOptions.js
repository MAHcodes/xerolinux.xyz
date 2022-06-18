import Buttons from "./Buttons";
import Button from "./Button";
import Title from "./Title";
import Box from "./Box";
import styled, { keyframes, css } from "styled-components";

const AgreedOptions = ({ agreed }) => {
  return (
    <Div agreed={agreed}>
      <Box>
        <Title text="Choose Source" />

        <Wrapper>
          <Center>
            <P>Provided by SourceForge</P>
            <Buttons mb="1rem">
              <a
                href="https://sourceforge.net/projects/xerolinux/files/Releases/Main/xerolinux-main-x86_64.iso/download"
                target="_blank"
                rel="noreferrer"
              >
                <Button
                  text="SourceForge"
                  padding=".75em 2em"
                  fz="var(--fz-5)"
                  primary
                  themed
                  bg={"#3cae48"}
                />
              </a>
            </Buttons>
          </Center>

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
                  text="Funami"
                  padding=".75em 2em"
                  fz="var(--fz-5)"
                  primary
                  themed
                  bg="rgb(var(--fg))"
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

export default AgreedOptions;
