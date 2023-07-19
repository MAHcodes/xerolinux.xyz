import { useState } from "react";
import styled from "styled-components";
import Box from "./Box";
import Button from "./Button";
import Title from "./Title";
import { marked } from "marked";

const FAQ = ({ faqs }) => {
  const [openedQ, setOpenedQ] = useState(undefined);

  const handleClick = (index) => {
    if (index === openedQ) {
      setOpenedQ(undefined);
    } else {
      setOpenedQ(index);
    }
  };

  return (
    <Div id="FAQ" className="container">
      <Title text="F.A.Q" />
      <Wrapper>
        {faqs.map((faq, i) => (
          <div key={i}>
            <Box noBR>
              <Question
                className={openedQ === i ? "active" : undefined}
                onClick={() => handleClick(i)}
              >
                <h2>
                  {i + 1}. &#9;{faq.q}
                </h2>
                <svg width="36" height="36" viewBox="0 0 36 36" fill="none">
                  <path
                    d="M3.68099 11.9093C4.10292 11.4874 4.67512 11.2505 5.27174 11.2505C5.86836 11.2505 6.44055 11.4874 6.86249 11.9093L18 23.0468L29.1375 11.9093C29.5618 11.4994 30.1302 11.2726 30.7201 11.2777C31.3101 11.2829 31.8744 11.5195 32.2916 11.9367C32.7087 12.3538 32.9454 12.9182 32.9505 13.5081C32.9556 14.098 32.7288 14.6664 32.319 15.0908L19.5907 27.819C19.1688 28.2408 18.5966 28.4778 18 28.4778C17.4034 28.4778 16.8312 28.2408 16.4092 27.819L3.68099 15.0908C3.25918 14.6688 3.02222 14.0966 3.02222 13.5C3.02222 12.9034 3.25918 12.3312 3.68099 11.9093Z"
                    fill="white"
                  />
                </svg>
              </Question>
            </Box>
            <Answer className={`markdown ${openedQ === i ? "active" : undefined}`}>
              <p dangerouslySetInnerHTML={{ __html: marked.parse(faq.a) }} />
              <a href={faq.more} target="_blank" rel="noreferrer">
                <Button primary themed text="read more" />
              </a>
            </Answer>
          </div>
        ))}
      </Wrapper>
    </Div>
  );
};

const Div = styled.div`
  padding-block: var(--padding-section);
`;

const Wrapper = styled.div`
  border: var(--border) solid rgb(var(--fg));
  border-radius: var(--border-radius);
  overflow: hidden;
`;

const Question = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-inline: 1rem;

  cursor: pointer;
  color: rgb(var(--low));

  &.active > svg {
    transform: rotate(-180deg);
  }

  & > svg {
    width: 1.5rem;
    transition: transform var(--transition-duration)
      var(--transition-timing-function);
    & > path {
      fill: rgb(var(--fg));
    }
  }
`;

const Answer = styled.div`
  height: 0;
  overflow: hidden;
  color: rgb(var(--fg));
  border-block: calc(var(--border) / 2) solid rgb(var(--fg));
  padding-inline: 2rem;
  transition: padding var(--transition-duration)
    var(--transition-timing-function);

  & > p {
    margin-block-end: 1rem;
    opacity: 0;
    transition: opacity var(--transition-duration)
      var(--transition-timing-function);
  }

  & > a {
    float: right;
  }

  &.active {
    height: auto;
    padding-block: 2rem;
    border-block: var(--border) solid rgb(var(--fg));
    & p {
      opacity: 1;
    }
  }

  &:last-of-type {
    border-bottom: none;
  }
`;

export default FAQ;
