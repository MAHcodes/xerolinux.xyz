import styled, { keyframes } from "styled-components";
import laptop from "../assets/images/laptop.png";
import Button from "./Button";
import leb from "../assets/images/leb.svg";
import bg from "../assets/images/herobg.png";
import Buttons from "./Buttons";
import Weather from "./Weather";
import { PopUpContext } from "../contexts/PopUpContext";
import { useContext } from "react";
import SocialLinks from "./SocialLinks";

const Hero = ({ countdown }) => {
  const { setPopUp } = useContext(PopUpContext);

  const openChangeLogPopup = () => {
    setPopUp("Changelog");
  };

  const openUserAgreement = () => {
    setPopUp("UserAgreement");
  };

  const popUpPcBuild = () => {
    setPopUp("PCBuild");
  };

  return (
    <HeroSection id="Home">
      <div className="container">
        <Flex>
          <Content>
            <H1>XeroLinux</H1>
            <P>
              A Hobbyist Arch-Based Distro, built using{" "}
              <a href="https://alci.online/" target="_blank" rel="noreferrer">
                ArcoLinux's ALCI
              </a>{" "}
              build scripts. It uses the awesome, and highly customizable Dektop
              Environment, known as KDE Plasma. It brings a good balance between
              Stability and Performance. Oh and it looks so damn sexy too !
              <br />
              <br />I hope you enjoy using it as much as I have creating it ;)
            </P>
            <Buttons>
              {countdown ? (
                <a href="#Countdown">
                  <Button
                    text="New Release!"
                    primary
                    clr="rgb(var(--black))"
                    padding=".75em 1.5em"
                    fz="var(--fz-5)"
                    float="right"
                  />
                </a>
              ) : (
                <Button
                  text="Download"
                  primary
                  clr="rgb(var(--black))"
                  padding=".75em 1.75em"
                  fz="var(--fz-5)"
                  action={openUserAgreement}
                  float="right"
                />
              )}
              <Button
                text="Changelog"
                themed
                padding=".75em 1.65em"
                fz="var(--fz-5)"
                clr="rgb(var(--white))"
                action={openChangeLogPopup}
              />
            </Buttons>
            <Origin>
              <img src={leb} alt="Lebanon Flag" />
              <p>Proudly Made in Lebanon</p>
            </Origin>
            <SocialWrapper>
              <p>We can be found on</p>
              <SocialLinks clr="rgb(var(--white))"/>
            </SocialWrapper>
          </Content>
          <MoreWrapper>
            <ImgContainer>
              <Weather />
              <img src={laptop} alt="XeroLinux" />
            </ImgContainer>
            <PCBuild onClick={popUpPcBuild}>
              <p>My Pc Build</p>
            </PCBuild>
          </MoreWrapper>
        </Flex>
      </div>
    </HeroSection>
  );
};

const SocialWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-direction: column;
  padding-block-start: 2rem;
  @media(min-width:800px ) {
    align-items: start;
  }
  & p {
    font-weight: bold;
    margin-block-end: 1rem;
  }
`

const HeroSection = styled.section`
  padding-block: var(--padding-section);
  min-height: min(80vh, 100vw);
  position: relative;
  margin-top: -3.5rem;

  @media (max-width: 1200px) {
    padding-block: calc(var(--padding-section) * 1.5);
  }

  display: grid;
  place-items: center;

  background-image: url(${bg});
  background-position: bottom;
  background-repeat: no-repeat;
  background-size: cover;
`;

const PCBuild = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1rem;
  width: fit-content;
  margin-inline: auto;
  color: rgb(var(--fg));
  cursor: pointer;
  text-decoration: underline;
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

const MoreWrapper = styled.div`
  flex: 0.5;
`;

const ImgContainer = styled.div`
  display: flex;
  align-items: cener;
  justify-content: center;
  position: relative;
  margin-block-end: 2rem;
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
  & > a {
    text-decoration: underline;
    font-weight: bold;
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
