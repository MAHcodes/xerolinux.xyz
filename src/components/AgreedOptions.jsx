import Buttons from "./Buttons";
import Button from "./Button";
import Title from "./Title";
import Box from "./Box";
import styled, { keyframes, css } from "styled-components";

const AgreedOptions = ({ agreed }) => {
  return (
    <Div agreed={agreed}>
      <Box>
        <Title text=".: Download/Build ISO :." />
        <Wrapper>
          <Center>
            <P>
              Download From{" "}
              <a href="http://sf.net/projects/xerolinux/" target="_blank" rel="noreferrer">
                SourceForge
                <br />
              </a>
              <sub>(Multi-Location)</sub>
            </P>
            <Buttons mb="1rem">
              <a
                href="https://sourceforge.net/projects/xerolinux/files/Releases/xerolinux-2023.03-x86_64.iso/download"
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
          <Center>
            <P>
              Build ISO From{" "}
              <a href="https://github.com/xerolinux/" target="_blank" rel="noreferrer">
                Xero Github
                <br />
              </a>
              <sub>(For Latest Pkgs)</sub>
            </P>
            <Buttons mb="1rem">
              <a
                href="https://github.com/xerolinux/xero_iso"
                target="_blank"
                rel="noreferrer"
              >
                <Button
                  text="Build Repo"
                  padding=".75em 2em"
                  fz="var(--fz-5)"
                  primary
                  themed
                  bg="#1746ff"
                  clr="rgb(var(--white))"
                />
              </a>
            </Buttons>
          </Center>
          <Center>
            <P>
              Download From{" "}
              <a href="https://fosstorrents.com/distributions/xerolinux" target="_blank" rel="noreferrer">
                FossTorrents <br />
              </a>
              <sub>(Multi-Location)</sub>
            </P>
            <Buttons mb="1rem">
              <a
                href="https://fosstorrents.com/thankyou/?name=xerolinux&cat=Current%20Edition&id=0&hybrid=0"
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
  justify-content: space-between;
  gap: 1rem;

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
