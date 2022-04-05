import styled from "styled-components";

const Card = ({ title, icon, text }) => {
  return (
    <Div>
      {icon}
      <H2>{title}</H2>
      <P>{text}</P>
    </Div>
  );
};

const Div = styled.div`
  color: rgb(var(--fg));
  text-align: center;

  & > svg {
    width: 6rem;
  }

  & > svg > path {
    fill: rgb(var(--fg));
  }
`;

const H2 = styled.h2`
  font-size: var(--fz-2);
  font-weight: bold;
  margin-block: 1em;
`;

const P = styled.p``;

export default Card;
