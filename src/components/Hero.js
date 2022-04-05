import styled, { keyframes } from "styled-components";
import laptop from "../assets/images/laptop.png";
import Button from "./Button";
import leb from "../assets/images/leb.svg";
import { useEffect, useState } from "react";
import bg from "../assets/images/herobg.png";

const Hero = ({ hdr }) => {
  const [height, setHeight] = useState(0);

  useEffect(() => {
    const updateHeight = () => {
      setHeight(hdr.current.clientHeight);
    };
    updateHeight();

    window.addEventListener("resize", updateHeight);
    return () => window.removeEventListener("resize", updateHeight);
  }, [hdr]);

  return (
    <HeroSection height={height} id="Home">
      <div className="container">
        <Flex>
          <Content>
            <H1>XeroLinux</H1>
            <P>
              A Hobbyist Arch-Based Distro, built using ArcoLinux's ALCI build
              scripts. It uses the awesome, and highly customizable Dektop
              Environment, known as KDE Plasma. It brings a good balance between
              Stability and Performance. Oh and it looks so damn sexy too ! I
              hope you enjoy it as much as I have creating it ;)
            </P>
            <Buttons>
              <Button
                text="Downlaod"
                primary
                padding=".75em 1.5em"
                fz="var(--fz-5)"
                clr="rgb(var(--black))"
              />
              <Button
                text="Disclaimer"
                padding=".75em 1.5em"
                fz="var(--fz-5)"
                clr="rgb(var(--white))"
              />
            </Buttons>
            <Origin>
              <img src={leb} alt="Lebanon Flag" />
              <p>Proudly Made in Lebanon</p>
            </Origin>
          </Content>
          <ImgContainer>
            <img src={laptop} alt="XeroLinux" />
          </ImgContainer>
        </Flex>
      </div>
    </HeroSection>
  );
};

const HeroSection = styled.section`
  padding-block: calc(${(props) => props.height}px + var(--padding-section));
  min-height: min(80vh, 100vw);

  display: grid;
  place-items: center;

  background-image: url(${bg});
  background-position: bottom;
  background-repeat: no-repeat;
  background-size: cover;
`;

const ContentIn = keyframes`
from {
  opacity: 0;
  transform: translateX(-3rem);
}
`;

const ImgIn = keyframes`
from {
  opacity: 0;
  transform: translateX(3rem);
}
`;

const Content = styled.div`
  flex: 0.5;
  animation: ${ContentIn} 0.5s var(--transition-timing-function);
`;

const Origin = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: cetner;
  font-size: var(--fz-5);
  gap: 0.5rem;

  & img {
    width: 1.5rem;
    object-fit: contain;
  }
`;

const ImgContainer = styled.div`
  flex: 0.5;
  display: flex;
  align-items: cener;
  justify-content: center;
  animation: ${ImgIn} 0.5s var(--transition-timing-function);
  & img {
    object-fit: contain;
    width: 80%;
  }
`;

const H1 = styled.h1`
  font-size: var(--fz-1);
  font-weight: bold;
`;

const P = styled.p`
  font-size: var(--fz-5);
  margin-block: 1em;
`;

const Buttons = styled.div`
  margin-block: 2rem;
  display: flex;
  align-items: stretch;
  justify-conetent: center;
  gap: 1rem;
  text-align: center;

  @media (max-width: 800px) {
    flex-direction: column;
  }
`;

const Flex = styled.div`
  color: rgb(var(--white));
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 4rem;

  @media (max-width: 1200px) {
    flex-direction: column;
  }
`;

export default Hero;
