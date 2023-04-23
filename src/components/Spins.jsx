import styled from "styled-components";
import Box from "./Box";
import ImageCard from "./ImageCard";
import Title from "./Title";
import { marked } from "marked";
import { useState, useEffect } from "react";
import SpinsIntro from "../content/SpinsIntro.md";
import SpinsOutro from "../content/SpinsOutro.md";
import { CONTENT } from "../content/SpinsContent";
import Img from "./Img";
import bg from "../assets/images/herobg.avif";

const Spins= () => {

    const [introContent, setIntroContent] = useState("");

    const [outroContent, setOutroContent] = useState("");

    useEffect(() => {
      fetch(SpinsIntro)
        .then((response) => response.text())
        .then((introContent) => {
            setIntroContent(introContent);
        });
    }, []);

    useEffect(() => {
        fetch(SpinsOutro)
          .then((response) => response.text())
          .then((outroContent) => {
            setOutroContent(outroContent);
          });
      }, []);

    return (
        <Spinning id="Home">
            <SpinsIntroSection>
                <Img src="https://i.imgur.com/4B6IwBb.jpeg" alt="XeroG" maxWidth="40%" />
                <div className="container">
                    <Box>
                        <P className="container markdown" dangerouslySetInnerHTML={{__html: marked.parse(introContent) }} />
                    </Box>
                </div>
            </SpinsIntroSection>
            <SpinsSection>
                <div className="container">
                    <Title text="Select Your Spin" />
                    <Box>
                        <Cards>
                            <ImageCard
                                title={CONTENT[0].title}
                                image={CONTENT[0].image}
                                text={CONTENT[0].text}
                                btn1Action={CONTENT[0].buttonLeftAction}
                                btn1Text={CONTENT[0].buttonLeftText}
                                btn2Action={CONTENT[0].buttonRightAction}
                                btn2Text={CONTENT[0].buttonRightText}
                            />
                            <ImageCard
                                title={CONTENT[1].title}
                                image={CONTENT[1].image}
                                text={CONTENT[1].text}
                                btn1Action={CONTENT[1].buttonLeftAction}
                                btn1Text={CONTENT[1].buttonLeftText}
                                btn2Action={CONTENT[1].buttonRightAction}
                                btn2Text={CONTENT[1].buttonRightText}
                            />
                        </Cards>
                    </Box>
                </div>
            </SpinsSection>
            <SpinsOutroSection>
                <div className="container">
                    <Box>
                        <P className="container markdown" dangerouslySetInnerHTML={{__html: marked.parse(outroContent)}} />
                    </Box>
                </div>
            </SpinsOutroSection>
        </Spinning>
    );

};

const Spinning = styled.div`
  padding-block: var(--padding-section);
  min-height: min(80vh, 100vw);
  position: relative;
  margin-top: -3.5rem;

  @media (max-width: 1200px) {
    padding-block: calc(var(--padding-section) * 1.5);
  }

  overflow: hidden;
  background-image: url(${bg});
  background-position: bottom;
  background-repeat: no-repeat;
  background-size: cover;
`;

const SpinsIntroSection = styled.div`
  padding-block: var(--padding-section);
`;

const SpinsOutroSection = styled.div`
  flex: 0.5;
  padding-block: var(--padding-section);
`;

const SpinsSection = styled.div`
  padding-block: var(--padding-section);
`;

const Cards = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-direction: column;
  gap: 4rem;
  padding: 2rem;

  @media (min-width: 1100px) {
    flex-direction: row;
  }
`;

const P = styled.p`
  color: rgb(var(--white));
  font-size: var(--fz-5);
  margin-block: 1em;
  & > a {
    text-decoration: underline;
    font-weight: bold;
  }
`;

const H2 = styled.h2`
  color: rgb(var(--fg));
  font-size: var(--fz-2);
  font-weight: bold;
  margin-block: 1em;
`;


export default Spins