import styled from "styled-components";
import YTVideos from "../content/YoutubeVideos.json";

const Download = () => {
  return (
    <DownloadSection id="Download" className="container">
      <Video>
        <svg width="634" height="27" viewBox="0 0 634 27" fill="none">
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M118.684 0.788818C111.483 2.73973 103.888 4.32484 98.4667 5.45613C97.2687 5.70613 96.1769 5.93397 95.2191 6.1387L0 22.4431C2.75765 23.854 7.9509 23.6774 12.0219 23.539L12.022 23.539C13.1519 23.5006 14.1954 23.4651 15.0764 23.4673L26.9787 24.4915H74.5883L86.4906 25.5156H131.72L145.209 26.5398H184.884C191.923 26.5232 194.038 23.5528 197.758 18.3274C198.638 17.0913 199.607 15.7291 200.753 14.25L211.183 0.788818H118.684ZM422.817 0.788818L433.247 14.25C434.392 15.7289 435.362 17.091 436.242 18.3269L436.242 18.3274C439.962 23.5529 442.077 26.5232 449.116 26.5398H488.791L500.693 25.5156H547.509L560.999 24.4915H605.434L618.13 23.4673H634C631.267 21.6674 626.538 21.0952 622.633 20.6226C621.583 20.4956 620.593 20.3758 619.717 20.2412L593.532 16.1446L535.607 5.45248C534.006 5.10687 532.399 4.76926 530.789 4.43097L530.783 4.42977C525.522 3.32446 520.225 2.21179 514.996 0.788818H422.817Z"
            fill="white"
          />
        </svg>
        <iframe
          loading="lazy"
          width="560"
          height="315"
          src={`https://www.youtube.com/embed/${YTVideos.Installation_Guide_Video}`}
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
        <svg width="634" height="27" viewBox="0 0 634 27" fill="none">
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M118.684 0.788818C111.483 2.73973 103.888 4.32484 98.4667 5.45613C97.2687 5.70613 96.1769 5.93397 95.2191 6.1387L0 22.4431C2.75765 23.854 7.9509 23.6774 12.0219 23.539L12.022 23.539C13.1519 23.5006 14.1954 23.4651 15.0764 23.4673L26.9787 24.4915H74.5883L86.4906 25.5156H131.72L145.209 26.5398H184.884C191.923 26.5232 194.038 23.5528 197.758 18.3274C198.638 17.0913 199.607 15.7291 200.753 14.25L211.183 0.788818H118.684ZM422.817 0.788818L433.247 14.25C434.392 15.7289 435.362 17.091 436.242 18.3269L436.242 18.3274C439.962 23.5529 442.077 26.5232 449.116 26.5398H488.791L500.693 25.5156H547.509L560.999 24.4915H605.434L618.13 23.4673H634C631.267 21.6674 626.538 21.0952 622.633 20.6226C621.583 20.4956 620.593 20.3758 619.717 20.2412L593.532 16.1446L535.607 5.45248C534.006 5.10687 532.399 4.76926 530.789 4.43097L530.783 4.42977C525.522 3.32446 520.225 2.21179 514.996 0.788818H422.817Z"
            fill="white"
          />
        </svg>
      </Video>
    </DownloadSection>
  );
};

const DownloadSection = styled.div`
  padding-block: var(--padding-section);
`;

const Video = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  flex: 0.35;
  max-width: 50rem;
  margin-inline: auto;

  & > iframe {
    width: 100%;
    aspect-ratio: 16/9;
    height: unset;
    border-radius: 10px;
    border: var(--border) solid rgb(var(--fg));
    position: relative;
  }

  & svg {
    width: 100%;
    height: 100%;
  }

  & > svg:first-of-type {
    transform: translateY(1px) rotate(180deg);
  }

  & > svg:last-of-type {
    transform: translateY(-1px);
  }

  & path {
    height: 100%;
    fill: rgb(var(--fg));
  }
`;

export default Download;
