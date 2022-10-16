import styled, { keyframes } from "styled-components";
import { useState } from "react";
import Box from "./Box";
import Img from "./Img";
import Button from "./Button";
import { marked } from "marked";

const CustomizationBox = ({ content, ltr }) => {
  const [themeIndex, setThemeIndex] = useState(0);
  return (
    <Container ltr={ltr}>
      <List ltr={ltr}>
        {content.map((item, i) => (
          <li
            key={`${i}${item}`}
            className={themeIndex === i ? "active" : undefined}
            onClick={() => setThemeIndex(i)}
          >
            {content[i].name}
          </li>
        ))}
      </List>

      <Box>
        <Content ltr={ltr}>
          <ImgWrapper>
            <Img
              src={content[themeIndex].img_url}
              alt={`${content[themeIndex].name} Preview`}
            />
          </ImgWrapper>
          <ContentWrapper className="markdown">
            <P dangerouslySetInnerHTML={{ __html: marked.parse(content[themeIndex].description )}}/>
            <a
              href={content[themeIndex].guide_url}
              target="_blank"
              rel="noreferrer"
            >
              <Button
                text="Installation Guide"
                primary
                themed
                fz="var(--fz-6)"
                padding=".75em 1.5em"
              />
            </a>
          </ContentWrapper>
        </Content>
      </Box>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  align-items: stretch;
  justify-content: center;
  border: var(--border) solid rgb(var(--fg));
  margin-block-end: 2rem;

  flex-direction: ${(props) => !props.ltr && "row-reverse"};

  background-color: rgb(var(--fg));

  border-radius: var(--border-radius);
`;

const List = styled.ul`
  color: rgb(var(--bg));
  display: flex;
  align-items: stretch;
  justify-content: center;
  flex-direction: column;

  & > li {
    cursor: pointer;
    padding: 0.75em 1.25em;
    transition: background-color var(--transition-duration)
      var(--transition-timing-function);
    border-radius: ${(props) =>
      props.ltr
        ? "var(--border-radius) 0 0 var(--border-radius)"
        : "0 var(--border-radius) var(--border-radius) 0"};
  }

  & > li:hover {
    background-color: rgb(var(--fg2));
  }

  & > li.active {
    background-color: rgb(var(--bg2));
    color: rgb(var(--fg));
    font-weight: bold;
  }
`;

const fadeIn = keyframes`
  from {
    opacity: 0;
  }
`;

const Content = styled.div`
  display: flex;
  align-items: stretch;
  justify-content: center;
  padding: 1rem;
  gap: 2rem;
  flex-direction: ${(props) => !props.ltr && "row-reverse"};

  @media (max-width: 1100px) {
    flex-direction: column;
  }
`;

const ImgWrapper = styled.div`
  overflow: hidden;
  flex: 0.3;

  & > img {
    animation: ${fadeIn} 500ms var(--transition-timing-function);
  }
`;

const P = styled.p`
  color: rgb(var(--fg));
  font-size: var(--fz-5);
  margin-block-end: 1em;
  animation: ${fadeIn} 500ms var(--transition-timing-function);
`;

const ContentWrapper = styled.div`
  display: flex;
  align-items: end;
  justify-content: space-between;
  flex-direction: column;
  flex: 0.7;

  & > p > a {
    text-decoration: underline;
  }
`;
export default CustomizationBox;
