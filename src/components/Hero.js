import styled, { keyframes } from "styled-components";
import laptop from "../assets/images/laptop.png";
import Button from "./Button";
import leb from "../assets/images/leb.svg";
import bg from "../assets/images/herobg.png";
import Buttons from "./Buttons";
import DateTime from "./DateTime";
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
            <SocialLinks clr="rgb(var(--white))" />
          </Content>
          <MoreWrapper>
            <PCBuild>
              <p>
                The Linux Machine
                <svg
                  width="321"
                  height="103"
                  viewBox="0 0 321 103"
                  fill="none"
                  onClick={popUpPcBuild}
                >
                  <path
                    d="M75.11 27.8294H74.4886L74.0493 28.2687L14.7151 87.6029C13.3116 86.2979 11.4303 85.4998 9.36264 85.4998C5.02023 85.4998 1.5 89.02 1.5 93.3625C1.5 97.7049 5.02022 101.225 9.36264 101.225C13.7051 101.225 17.2253 97.7049 17.2253 93.3625C17.2253 91.5874 16.6371 89.9498 15.645 88.6338L16.7859 89.7747L75.7313 30.8294H104.363V53.4173V54.9173H105.863H111.65L110.507 56.0605L117.589 63.1428L118.028 63.5822H118.649H192.182V61.9627L193.181 62.9615L193.62 63.4009H194.241H317.5H319V61.9009V11.6041V10.1041H317.5H259.098L259.841 9.36304L252.429 1.94014L251.989 1.5H251.367H176.913V2.06021L176.912 2.05997L176.473 1.62063H175.852H105.863H104.363V3.12063V27.8294H75.11ZM119.271 60.5822L113.606 54.9173H185.136L190.801 60.5822H119.271ZM256.341 10.1041H184.957L179.353 4.5H250.745L256.341 10.1041Z"
                    stroke="#FFCFF2"
                    strokeWidth="3"
                  />
                </svg>
              </p>
            </PCBuild>
            <ImgContainer>
              <DateTime />
              <img src={laptop} alt="XeroLinux" />
            </ImgContainer>
          </MoreWrapper>
        </Flex>
      </div>
    </HeroSection>
  );
};

const HeroSection = styled.section`
  padding-block: var(--padding-section);
  min-height: min(80vh, 100vw);
  position: relative;
  margin-top: -3.5rem;
  overflow-x: hidden;

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

const PCBuild = styled.div`
  cursor: pointer;
  transform: scale(0.9);
  & > p {
    position: relative;
    font-weight: bold;
    margin-inline: auto;
    width: fit-content;
    top: -2.5rem;
    left: 10.25rem;
  }

  svg {
    position: absolute;
    height: 350%;
    width: 300%;
    inset: -0.85rem -6.75rem auto auto;
    cursor: pointer;
    mix-blend-mode: lighten;
    transition: fill var(--transition-duration)
      var(--transition-timing-function);

    & path {
      transition: stroke var(--transition-duration)
        var(--transition-timing-function);
    }

    &:hover {
      fill: rgba(105, 110, 194, 40%);
      & path {
        stroke: rgb(105, 110, 194);
      }
    }
  }
`;

const Origin = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: cetner;
  font-size: var(--fz-5);
  gap: 0.5rem;
  margin-block-end: 1.5rem;

  & img {
    width: 1.5rem;
    object-fit: contain;
  }
`;

const MoreWrapper = styled.div`
  flex: 0.5;
  & button {
    display: block;
    margin: 1rem auto;
  }
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
