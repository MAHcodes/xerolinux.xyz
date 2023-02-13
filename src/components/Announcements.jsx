import styled from "styled-components";
import Button from "./Button";
import { useContext } from "react";
import { PopUpContext } from "../contexts/PopUpContext";
import Settings from "../content/Settings.json";

const Announcements = () => {
  const { setPopUp } = useContext(PopUpContext);

  const announce = () => {
    setPopUp("Announcements");
  };

  const showBar = Settings.announcements

  if (showBar) {
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
                bg="rgb(var(--white))"
                clr="rgb(var(--black))"
            />
          </div>
        </Div>
    );
  }
};

const Div = styled.div`
  background-color: rgb(var(--important));
  padding: 0.5rem;

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
