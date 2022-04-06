import styled from "styled-components";

const Buttons = (props) => {
  return <Div>{props.children}</Div>;
};

const Div = styled.div`
  margin-block: 2rem;
  display: flex;
  align-items: stretch;
  justify-conetent: center;
  gap: 1rem;
  text-align: center;

  @media (max-width: 800px) {
    flex-direction: column;
  }
`;

export default Buttons;
