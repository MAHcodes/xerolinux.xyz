import styled from "styled-components";
import Disclaimer from "./Disclaimer";
import ThemeIcon from "./ThemeIcon";
import { useContext } from "react";
import { PopUpContext } from "../hooks/PopUpContext";
import Close from "./Close";

const PopUp = () => {
  const { popUp, setPopUp } = useContext(PopUpContext);
  const closePopup = () => {
    setPopUp("");
  };

  return (
    <>
      <Div>
        <Content>
          <Panel>
            <ThemeIcon dark />
            <Close action={closePopup} />
          </Panel>
          {popUp === "Disclaimer" && <Disclaimer />}
        </Content>
      </Div>
      <Overlay onClick={closePopup} />
    </>
  );
};

const Panel = styled.div`
  display: flex;
  align-items: center;
  justify-content: end;
  gap: 1rem;
  & > * {
    float: right;
  }
  & > svg {
    width: 1.5rem;
  }
`;

const Content = styled.div`
  padding: 1rem;
`;

const Overlay = styled.div`
  position: fixed;
  inset: 0;
  background-color: rgba(var(--black), 90%);
  z-index: 9999;
`;

const Div = styled.div`
  position: fixed;
  background-color: rgb(var(--bg));
  width: 85%;
  max-width: 900px;
  height: 85%;
  inset: 0;
  margin: auto;
  z-index: 10000;
  border-radius: var(--border-radius);
  border: var(--border) solid rgb(var(--fg));
  color: rgb(var(--fg));
  overflow: hidden;
`;

export default PopUp;
