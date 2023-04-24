import styled from "styled-components";
import Box from "./Box";
import ImageCard from "./ImageCard";
import Title from "./Title";
import { useState, useEffect } from "react";
import SpinsIntro from "../content/SpinsIntro.md";
import { marked } from "marked";
import { CONTENT } from "../content/SpinsContent";

const SpinsIntroduction = () => {

    const [introContent, setIntroContent] = useState("");

    useEffect(() => {
      fetch(SpinsIntro)
        .then((response) => response.text())
        .then((introContent) => {
            setIntroContent(introContent);
        });
    }, []);

    return (
        <SpinsSection>
            <div className="container">
                <Box>
                    <P className="container markdown" dangerouslySetInnerHTML={{ __html: marked.parse(introContent) }} />
                    <Title text="Select Your Spin" />
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
    );
};



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

export default SpinsIntroduction;