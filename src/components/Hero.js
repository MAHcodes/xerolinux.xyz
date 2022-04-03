import styled, { keyframes } from "styled-components";
import laptop from "../assets/images/laptop.png";
import Button from "./Button";
import leb from "../assets/images/leb.svg";

const Hero = () => {
  return (
    <HeroSection id="Home">
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
                action=""
                primary
                padding=".75em 1.25em"
                fz="var(--fz-5)"
                clr="rgb(var(--black))"
              />
              <Button
                text="Disclaimer"
                action=""
                padding=".75em 1.25em"
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
  padding-block: 15%;
  @media (max-width: 675px) {
    padding-block: 40vh;
  }
  @media (max-width: 1100px) {
    padding-block: 25%;
  }
  height: 100vh;
`;

const ContentIn = keyframes`
  from {
    transform: translateX(-)
  }
`;

const Content = styled.div`
  flex: 0.5;
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
`;

const Flex = styled.div`
  color: rgb(var(--white));
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 4rem;

  @media (max-width: 1100px) {
    flex-direction: column;
  }
`;

export default Hero;