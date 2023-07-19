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
    <br />
    <ImgContainer>
        <center><img src="https://i.imgur.com/m3CMdCP.png" alt="XeroLinux" /></center>
      </ImgContainer>
      <div dangerouslySetInnerHTML={{ __html: marked.parse(content)}}></div>
      </>
  );
};

const Svg = styled.svg`
  position: absolute;
  inset: auto auto 0 -3rem;
  width: 100%;
  transform: translateY(25%);

  & > path {
    fill: rgb(var(--fg));
    font-size: var(--fz-10);
  }
`;

const ImgContainer = styled.div`
  width: 65%;
  display: block;
  margin-left: auto;
  margin-right: auto;
  margin-block-start: -1rem;
  margin-block-end: 1rem;
`;

export default Disclaimer;
