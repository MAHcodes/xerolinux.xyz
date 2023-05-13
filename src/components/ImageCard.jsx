import styled from "styled-components";
import { marked } from "marked";
import Button from "./Button";
import Buttons from "./Buttons";

const ImageCard = ({ title, icon, alt, text, btn1Text, btn2Text, btn1Action, btn2Action, detailsLink }) => {

  return (
    <Div>
      <Img src={icon} alt={alt} />
      <H2>{title}</H2>
      <P className="markdown" dangerouslySetInnerHTML={{ __html: marked.parse(text) }} />
      <Buttons justify="center"> 
        <Button
          text={btn1Text}
          themed
          padding=".75em 1.75em"
          fz="var(--fz-5)"
          clr="rgb(var(--white))"
          action={() => window.open(btn1Action, '_blank')}
        />
        <Button
          text={btn2Text}
          themed
          padding=".75em 1.75em"
          fz="var(--fz-5)"
          clr="rgb(var(--white))"
          action={() => window.open(btn2Action, '_blank')}
        />
        <Button
          text="Details"
          themed
          padding=".75em 1.75em"
          fz="var(--fz-5)"
          clr="rgb(var(--white))"
          action={() => window.open(detailsLink, '_blank')}
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

const Img = styled.img`
  width: 60%;
  height: 60%;
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
