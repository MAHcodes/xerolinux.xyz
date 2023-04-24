import styled from "styled-components";
import Box from "./Box";
import ImageCard from "./ImageCard";
import Title from "./Title";
import { marked } from "marked";
import { useState, useEffect } from "react";
import SpinsIntro from "../content/SpinsIntro.md";
import SpinsOutro from "../content/SpinsOutro.md";
import { CONTENT } from "../content/SpinsContent";
import bg from "../assets/images/herobg.avif";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

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

    const images = [
      {
        img: "https://i.imgur.com/BHiW12e.png",

      },
      {
        img: "https://i.imgur.com/1pjR59G.png",
        alt: "text goes here"
      },
      {
        img: "https://i.imgur.com/fAqRXtp.jpeg",
        alt: "text goes here"
      },
      {
        img: "https://i.imgur.com/IrEstqO.jpeg",
        alt: "text goes here"
      },
      {
        img: "https://i.imgur.com/Aq7gypv.png",
        alt: "text goes here" 
      }
    ];

    return (
        <Spinning id="Home">
            <SpinsIntroSection>

                <div className="container">
                <Carrot>
                  <Carousel
                    autoPlay={true}
                    centerMode={true}
                    width={960}
                    infiniteLoop={true}
                    labels={false}
                    showThumbs={true}
                    showArrows={true}
                    showStatus={false}
                    centerSlidePercentage={90}>
                      {images.map((URL, index) => (
                        <div className="slide">
                          <img alt={URL.alt} src={URL.img} key={index} />
                      </div>))}
                  </Carousel>
                </Carrot>  
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
                                text={CONTENT[0].text}
                                btn1Action={CONTENT[0].buttonLeftAction}
                                btn1Text={CONTENT[0].buttonLeftText}
                                btn2Action={CONTENT[0].buttonRightAction}
                                btn2Text={CONTENT[0].buttonRightText}
                                detailsLink={CONTENT[0].detailsAction}
                            />
                            <ImageCard
                                title={CONTENT[1].title}
                                text={CONTENT[1].text}
                                btn1Action={CONTENT[1].buttonLeftAction}
                                btn1Text={CONTENT[1].buttonLeftText}
                                btn2Action={CONTENT[1].buttonRightAction}
                                btn2Text={CONTENT[1].buttonRightText}
                                detailsLink={CONTENT[1].detailsAction}
                            />
                        </Cards>
                    </Box>
                </div>
            </SpinsSection>
            <SpinsOutroSection>
                <div className="container">
                    <Box>
                        <P className="container markdown" dangerouslySetInnerHTML={{__html: marked.parse(outroContent)}} />
                        {/* <IframesWrapper>
                          <iframe
                            loading="lazy"
                            width="560"
                            height="315"
                            src={`https://www.youtube.com/embed/${CONTENT[2].video}`}
                            title="YouTube video player"
                            frameBorder="0"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            allowFullScreen
                          ></iframe>
                        </IframesWrapper> */}
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

const Carrot = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
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

const IframesWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-block: 1em;

  & > iframe {
    border: var(--border) solid rgb(var(--fg));
    border-radius: var(--border-radius);
    aspect-ratio: 16/9;
    height: auto;
    width: 50%;
    flex-shrink: 4;
  }

  @media (max-width: 1100px) {
    flex-direction: column;
  }
`;

export default Spins