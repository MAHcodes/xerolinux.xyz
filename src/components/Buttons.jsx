import styled from "styled-components";

const Buttons = (props) => {
  return (
    <Div justify={props.justify} mb={props.mb || "2rem"}>
      {props.children}
    </Div>
  );
};

const Div = styled.div`
  margin-block: ${(props) => props.mb};
  display: flex;
  align-items: stretch;
  justify-content: ${(props) => props.justify || "start"};
  gap: 1rem;
  text-align: center;
  flex-wrap: wrap;

  & > a > button {
    width: 100%;
  }

  @media (max-width: 800px) {
    flex-direction: column;
  }
`;

export default Buttons;
