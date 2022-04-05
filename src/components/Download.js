import styled from "styled-components";
import xframe from "../assets/images/xframe.svg";
import Title from "./Title";

const Download = () => {
  return (
    <DownloadSection className="container">
      <Title text="Download" />
      <Wrapper>
        <Video>
          <iframe
            width="560"
            height="315"
            src="https://www.youtube.com/embed/sqUzODS_p38"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
          ></iframe>
        </Video>
      </Wrapper>
    </DownloadSection>
  );
};

const DownloadSection = styled.div`
  padding-block: var(--padding-section);
`;

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-direction: column;
`;

const Video = styled.div`
  position: relative;
  width: fit-content;
  //&::before {
  //content: url(${xframe});
  //position: absolute;
  //top: 1px;
  //left: 0;
  //margin: auto;
  //z-index: 100;
  //transform: translateY(-100%) rotate(180deg);
  //}
  & > iframe {
    border-radius: 10px;
    border: var(--border) solid rgb(var(--fg));
    position: relative;
  }
`;

export default Download;
