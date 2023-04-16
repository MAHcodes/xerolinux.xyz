import UserAgreementContent from "../content/UserAgreementContent.md";
import styled from "styled-components";
import { useState, useEffect } from "react";
import { marked } from "marked";
import laptop from "../assets/images/laptop.avif";

const Disclaimer = () => {
  const [content, setContent] = useState("");
  useEffect(() => {
    fetch(UserAgreementContent)
      .then((response) => response.text())
      .then((content) => {
        setContent(content);
      });
  }, []);

  return (
    <>
      <Title>
        <Svg width="644" height="98" viewBox="0 0 644 98" fill="none">
          <path
            d="M22.1919 40.657C21.0203 41.8286 21.0203 43.7281 22.1919 44.8997C23.3634 46.0712 25.2629 46.0712 26.4345 44.8997L22.1919 40.657ZM64.0915 3V0H62.8489L61.9702 0.87868L64.0915 3ZM125.956 3L128.078 5.12132L133.199 0H125.956V3ZM93.0907 35.8657L90.9694 33.7444L88.848 35.8657L90.9694 37.987L93.0907 35.8657ZM151.476 94.2506L149.354 96.372L150.233 97.2506H151.476V94.2506ZM641 97.2506C642.656 97.2506 644 95.9075 644 94.2506C644 92.5938 642.656 91.2506 641 91.2506V97.2506ZM24.7459 51.3319C24.7459 56.5085 20.5495 60.7049 15.373 60.7049V66.7049C23.8632 66.7049 30.7459 59.8222 30.7459 51.3319H24.7459ZM15.373 60.7049C10.1964 60.7049 6 56.5085 6 51.3319H0C0 59.8222 6.88271 66.7049 15.373 66.7049V60.7049ZM6 51.3319C6 46.1554 10.1964 41.9589 15.373 41.9589V35.9589C6.88271 35.9589 0 42.8417 0 51.3319H6ZM15.373 41.9589C20.5495 41.9589 24.7459 46.1554 24.7459 51.3319H30.7459C30.7459 42.8417 23.8632 35.9589 15.373 35.9589V41.9589ZM26.4345 44.8997L66.2129 5.12132L61.9702 0.87868L22.1919 40.657L26.4345 44.8997ZM64.0915 6H125.956V0H64.0915V6ZM123.835 0.87868L90.9694 33.7444L95.212 37.987L128.078 5.12132L123.835 0.87868ZM90.9694 37.987L149.354 96.372L153.597 92.1293L95.212 33.7444L90.9694 37.987ZM151.476 97.2506H641V91.2506H151.476V97.2506Z"
            fill="#FFCFF2"
          />
        </Svg>
        <h1>Expectations</h1>
      </Title>
      <ImgContainer>
        <img src={laptop} alt="XeroLinux" />
      </ImgContainer>
      <div dangerouslySetInnerHTML={{ __html: marked.parse(content)}}></div>
    </>
  );
};

const Svg = styled.svg`
  position: absolute;
  inset: auto auto 0 -5rem;
  width: 130%;
  transform: translateY(25%);

  & > path {
    fill: rgb(var(--fg));
  }
`;

const Title = styled.div`
  position: relative;
  padding: 1rem;
  margin: 0 auto 2em;
  width: fit-content;
`;

const ImgContainer = styled.div`
  display: flex;
  align-items: cener;
  justify-content: center;
  position: relative;
  margin-block-end: 2rem;
`;

export default Disclaimer;
