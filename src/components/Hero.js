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
            <SocialLinks clr="rgb(var(--white))" />
          </Content>
          <MoreWrapper>
            <PCBuild>
              <p>
                My PC Build
                <svg
                  width="280"
                  height="103"
                  viewBox="0 0 280 103"
                  fill="none"
                  onClick={popUpPcBuild}
                >
                  <path
                    d="M75.11 27.8295H74.4886L74.0493 28.2688L14.7151 87.603C13.3116 86.298 11.4303 85.4999 9.36264 85.4999C5.02023 85.4999 1.5 89.0201 1.5 93.3626C1.5 97.705 5.02022 101.225 9.36264 101.225C13.7051 101.225 17.2253 97.705 17.2253 93.3626C17.2253 91.5875 16.6371 89.9499 15.645 88.6339L16.7859 89.7748L75.7313 30.8295H104.363V53.4174V54.9174H105.863H111.65L110.507 56.0606L117.589 63.1429L118.028 63.5823H118.649H182.276V61.9628L183.275 62.9616L183.714 63.401H184.335H276.594H278.094V61.901V11.6042V10.1042H276.594H249.192L249.935 9.3631L242.523 1.9402L242.083 1.50006H241.461H176.913V2.06027L176.912 2.06003L176.473 1.62069H175.852H105.863H104.363V3.12069V27.8295H75.11ZM119.271 60.5823L113.606 54.9174H175.23L180.895 60.5823H119.271ZM246.435 10.1042H184.957L179.353 4.50006H240.839L246.435 10.1042Z"
                    stroke="#FFCFF2"
                    strokeWidth="3"
                  />
                </svg>
              </p>
            </PCBuild>
            <ImgContainer>
              <Weather />
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
  transform: scale(.9);
  & > p {
    position: relative;
    font-weight: bold;
    margin-inline: auto;
    width: fit-content;
    top: -2.5rem;
    left: 9.5rem;
  }

  svg {
    position: absolute;
    height: 350%;
    width: 300%;
    inset: -.85rem -3.25rem auto auto;
    cursor: pointer;
    mix-blend-mode: lighten;
    transition: fill var(--transition-duration) var(--transition-timing-function);

    & path {
      transition: stroke var(--transition-duration) var(--transition-timing-function);
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
