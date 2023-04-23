import styled from "styled-components";
import { marked } from "marked";
import Img from "./Img";
import Button from "./Button";
import Buttons from "./Buttons";

const ImageCard = ({ title, image, alt, text, btn1Text, btn2Text, btn1Action, btn2Action }) => {
  return (
    <Div>
      <H2>{title}</H2>
      <Img src={image} alt={alt} maxWidth="65%" />
      <P className="markdown" dangerouslySetInnerHTML={{ __html: marked.parse(text) }} />
      <Buttons justify="center"> 
        <Button
          text={btn1Text}
          themed
          padding=".75em 1.75em"
          fz="var(--fz-5)"
          clr="rgb(var(--white))"
          action={btn1Action}
        />
        <Button
          text={btn2Text}
          themed
          padding=".75em 1.75em"
          fz="var(--fz-5)"
          clr="rgb(var(--white))"
          action={btn2Action}
        />
      </Buttons>
    </Div>
  );
};

const Div = styled.div`
  text-align: center;

  & > svg {
    width: 5rem;
  }

  & > svg > path {
    fill: rgb(var(--fg));
  }
`;

const H2 = styled.h2`
  color: rgb(var(--fg));
  font-size: var(--fz-2);
  font-weight: bold;
  margin-block: 1em;
`;

const P = styled.p`
  color: rgba(var(--fg), 90%);
`;

export default ImageCard;
