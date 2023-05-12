import styled from "styled-components";
import bg from "../assets/images/herobg.avif";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

const SpinsGallery = () => {

    const images = [
        {
            img: "https://i.imgur.com/BHiW12e.png",
            alt: "text goes here"
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
        }];

    return (
        <Spinning id="Home">
            <div className="container">
                <Carrot>
                    <Carousel
                        autoPlay={false}
                        centerMode={true}
                        infiniteLoop={true}
                        labels={false}
                        showThumbs={true}
                        showArrows={true}
                        showStatus={false}
                        centerSlidePercentage={100}>
                        {images.map((URL, index) => (
                            <div className="slide">
                                <img alt={URL.alt} src={URL.img} key={index} />
                            </div>))}
                    </Carousel>
                </Carrot>
            </div>
        </Spinning>
    );

};

const Spinning = styled.section`
  padding-block: var(--padding-section);
  min-height: min(80vh, 100vw);
  position: relative;
  margin-top: -3.5rem;
  overflow: hidden;

  @media (max-width: 1200px) {
    padding-block: calc(var(--padding-section) * 1.5);
  }

  display: grid;
  place-items: center;

  background-image: url(${bg});
  background-position: bottom;
  background-repeat: no-repeat;
  background-size: cover;
`;

const Carrot = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 40px
`;

export default SpinsGallery