import styled from "styled-components";
import Button from "./Button";
import { useContext } from "react";
import { PopUpContext } from "../hooks/PopUpContext";

const Announcements = () => {
  const { setPopUp } = useContext(PopUpContext);

  const announce = () => {
    setPopUp("Announcements");
  };

  return (
    <Div>
      <div className="container">
        <P>Major Project Announcements</P>
        <Button
          fz="var(--fz-6)"
          padding=".5em 1em"
          primary
          text="read more"
          action={announce}
        />
      </div>
    </Div>
  );
};

const Div = styled.div`
  background-color: rgb(var(--important));
  padding-block: 0.4rem;
  box-shadow: 0 0 12px -7px rgb(var(--black));

  & .container {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: row;
    gap: 0.5em;
    text-align: center;
  }
`;

const P = styled.p`
  margin-inline-end: 1em;
  color: rgb(var(--white));
  font-size: var(--fz-5);
`;

export default Announcements;
