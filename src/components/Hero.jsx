import styled, { keyframes } from "styled-components";
import laptop from "../assets/images/laptop.avif";
import Button from "./Button";
import leb from "../assets/images/leb.svg";
import bg from "../assets/images/herobg.avif";
import Buttons from "./Buttons";
import DateTime from "./DateTime";
import { PopUpContext } from "../contexts/PopUpContext";
import { useContext } from "react";
import SocialLinks from "./SocialLinks";
import { CONTENT } from "../content/HeroContent";
import Tux from "./Tux";
import Settings from "../content/Settings.json";

const Hero = ({ countdown }) => {
  const { setPopUp } = useContext(PopUpContext);

  const openDonate = () => {
    setPopUp("Donate");
  };

  const openUserAgreement = () => {
    setPopUp("UserAgreement");
  };

  return (
    <HeroSection id="Home">
      <div className="container">
        <Flex tux={Settings.tux}>
          <Content>
            <H1>{CONTENT.heading}</H1>
            <P dangerouslySetInnerHTML={{__html: CONTENT.text}}></P>
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
                  bg={"rgb(var(--white))"}
                />
              )}
              <Button
                text="$ Donate $"
                themed
                padding=".75em 1.75em"
                fz="var(--fz-5)"
                clr="rgb(var(--white))"
                action={openDonate}
              />
            </Buttons>
            <Origin>
              <img src={leb} alt="Lebanon Flag" />
              <p>Proudly Made in Lebanon</p>
            </Origin>
            <SocialLinks clr="rgb(var(--white))" />
          </Content>
          <MoreWrapper>
            <ImgContainer>
              <DateTime />
              <img src={laptop} alt="XeroLinux" />
            </ImgContainer>
          </MoreWrapper>
          <Tux />
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
  overflow: hidden;

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
  position: relative;
  margin-block: ${props => props.tux ? "3rem 7rem" : 0};

  @media (max-width: 1200px) {
    flex-direction: column;
  }
`;

export default Hero;
