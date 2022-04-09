import styled, { keyframes } from "styled-components";
import Disclaimer from "./Disclaimer";
import ThemeIcon from "./ThemeIcon";
import { useContext } from "react";
import { PopUpContext } from "../hooks/PopUpContext";
import Close from "./Close";
import Button from "./Button";
import AnnouncementsPopUP from "./AnnouncementsPopUp";

const PopUp = () => {
  const { popUp, setPopUp } = useContext(PopUpContext);
  const closePopup = () => {
    setPopUp("");
  };

  const neverShow = () => {
    closePopup();
    localStorage.setItem("popupclosed", JSON.stringify("true"));
  };

  return (
    <>
      <Div>
        <Wrapper>
          <Panel>
            <ThemeIcon dark />
            <Close action={closePopup} />
          </Panel>
          <Content>
            {popUp === "Disclaimer" && <Disclaimer />}
            {popUp === "Announcements" && <AnnouncementsPopUP />}
          </Content>
          <Actions>
            {popUp === "Disclaimer" && (
              <Button
                action={neverShow}
                primary
                themed
                text="Close and never show again"
              />
            )}
          </Actions>
        </Wrapper>
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
  padding: 0.5rem;
  & > * {
    float: right;
  }
  & > svg {
    width: 1.5rem;
  }
`;

const Actions = styled.div`
  padding: 0.5rem 1rem 1rem;
`;

const Wrapper = styled.div`
  display: flex;
  align-items: end;
  justify-content: space-between;
  flex-direction: column;
  height: 100%;
`;

const Content = styled.div`
  background-color: rgb(var(--bg));
  overflow: hidden auto;
  flex-grow: 2;
  padding: 1rem;
`;

const overIn = keyframes`
  from {
  opacity: 0;
  }
`;

const Overlay = styled.div`
  position: fixed;
  inset: 0;
  background-color: rgba(var(--black), 90%);
  z-index: 9999;
  animation: ${overIn} var(--transition-duration)
    var(--transition-timing-function);
`;

const popIn = keyframes`
  from {
    opacity: 0;
    transform: scale(.5);
  }
`;

const Div = styled.div`
  position: fixed;
  background-color: rgb(var(--bg));
  width: 85%;
  max-width: 1000px;
  height: fit-content;
  max-height: 90%;
  inset: 0;
  margin: auto;
  z-index: 10000;
  border-radius: var(--border-radius);
  border: var(--border) solid rgb(var(--fg));
  color: rgb(var(--fg));
  overflow: hidden;
  animation: ${popIn} var(--transition-duration)
    var(--transition-timing-function);
`;

export default PopUp;
