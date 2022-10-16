import styled from "styled-components";
import { marked } from "marked";

const Card = ({ title, icon, text }) => {
  return (
    <Div>
      {icon}
      <H2>{title}</H2>
      <P className="markdown" dangerouslySetInnerHTML={{ __html: marked.parse(text) }} />
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

export default Card;
