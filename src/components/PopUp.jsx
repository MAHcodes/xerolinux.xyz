import styled, { keyframes } from "styled-components";
import UserAgreement from "./UserAgreement";
//import ThemeIcon from "./ThemeIcon";
import { useContext, useEffect, useState, useRef } from "react";
import { PopUpContext } from "../contexts/PopUpContext";
import Close from "./Close";
import Button from "./Button";
import AnnouncementsPopUP from "./AnnouncementsPopUp";
//import PCBuild from "./PCBuild";
import Changelog from "./Changelog";
import AgreedOptions from "./AgreedOptions";
import XeroGOptions from "./XeroG";
import Buttons from "./Buttons";
import DonateInfo from "./DonateInfo";
import Treasure from "./Treasure";
import { Fireworks } from "@fireworks-js/react";
import Settings from "../content/Settings.json";
import DonateButtons from "./Donate";

const PopUp = () => {
  const [agreed, setAgreed] = useState(false);
  const [helping, setHelping] = useState(false);
  const ref = useRef(null);

  const { popUp, setPopUp } = useContext(PopUpContext);
  const closePopup = () => {
    setPopUp("");
  };

  useEffect(() => {
    const handleKeyup = (e) => {
      if (e.keyCode === 27 || e.key === "Escape") {
        setPopUp("");
      }
    };

    document.documentElement.addEventListener("keyup", handleKeyup);

    return () => {
      document.documentElement.removeEventListener("keyup", handleKeyup);
    };
  }, [setPopUp]);

  return (
      <>
        <Div fitHight={popUp === "Donate"}>
          <Wrapper>
            <Panel>
              {/* <ThemeIcon dark /> */}
              <Close action={closePopup} />
            </Panel>
            <Content className="markdown">
              {popUp === "UserAgreement" && <UserAgreement />}
              {popUp === "Announcements" && <AnnouncementsPopUP />}
              {/* {popUp === "PCBuild" && <PCBuild />} */}
              {popUp === "Treasure" && <Treasure />}
              {popUp === "Changelog" && <Changelog />}
              {popUp === "Donate" && <DonateInfo />}
              {popUp === "Treasure" && (Settings.fireworks ?
                      <Fireworks
                          ref={ref}
                          options={{
                            rocketsPoint: {
                              min: 0,
                              max: 100,
                            },
                          }}
                          style={{
                            top: 0,
                            left: 0,
                            width: "100%",
                            height: "100%",
                            position: "fixed",
                            background: "#0000",
                            opacity: 1,
                            zIndex: 10091,
                            pointerEvents: "none",
                          }}
                      /> : null
              )}
            </Content>
            <Actions>
              {popUp === "PCBuild" ? (
                  <a
                      href="https://pcpartpicker.com/user/TechXero/saved/QCtmgs"
                      target="_blank"
                      rel="noreferrer"
                  >
                    <Button float="right" text="learn more" primary themed />
                  </a>
              ) : popUp === "Treasure" ? (
                      <Button
                          text="Back"
                          clr="rgb(var(--fg))"
                          padding=".75em 2.15em"
                          fz="var(--fz-5)"
                          action={() => setPopUp("UserAgreement")}
                      />)
                  : popUp === "Donate" ?
                      <DonateButtons />
                      : popUp === "Changelog" ? (
                              <Buttons mb="0">
                                <Button
                                    text="Back"
                                    clr="rgb(var(--fg))"
                                    padding=".75em 2.15em"
                                    fz="var(--fz-5)"
                                    action={() => setPopUp("UserAgreement")}
                                />
                              </Buttons>
                          )
                          : popUp === "UserAgreement" && (
                          <>
                            <AgreedOptions agreed={agreed} />
                            <XeroGOptions helping={helping} />
                            <Buttons justify="space-between" mb="0">
                              {!agreed && !helping && (
                                  <>
                                    {/* <Button
                                        padding=".75em 2.5em"
                                        fz="var(--fz-5)"
                                        text="XeroG"
                                        clr="rgb(var(--fg))"
                                        themed
                                        action={() => setHelping(!helping)}
                                    /> */}
                                    <Button
                                        text="Changelog"
                                        padding=".75em 2em"
                                        fz="var(--fz-5)"
                                        clr="rgb(var(--fg))"
                                        action={() => setPopUp("Changelog")}
                                    />
                                    <Button
                                        padding=".75em 2.5em"
                                        fz="var(--fz-5)"
                                        text="Download"
                                        float="right"
                                        primary={!agreed}
                                        clr="rgb(var(--bg))"
                                        themed
                                        action={() => setAgreed(!agreed)}
                                    />
                                  </>
                              )}
                              {helping && (
                                  <>
                                    <Button
                                        padding=".75em 2.5em"
                                        fz="var(--fz-5)"
                                        text="Close"
                                        float="right"
                                        primary={!helping}
                                        clr="inherit"
                                        themed
                                        action={() => setHelping(!helping)}
                                    />
                                  </>
                              )}
                              {agreed && (
                                  <>
                                    <Button
                                        padding=".75em 2.5em"
                                        fz="var(--fz-5)"
                                        text="Close"
                                        float="right"
                                        primary={!agreed}
                                        clr="inherit"
                                        themed
                                        action={() => setAgreed(!agreed)}
                                    />
                                  </>
                              )}
                            </Buttons>
                          </>
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
  align-self: end;
  width: 100%;
`;

const Wrapper = styled.div`
  display: flex;
  align-items: stretch;
  justify-content: space-between;
  flex-direction: column;
  height: 100%;
`;

const Content = styled.div`
  background-color: rgb(var(--bg));
  overflow: hidden auto;
  flex-grow: 2;
  padding: 0 1rem 1rem;
`;

const overIn = keyframes`
  from {
    opacity: 0;
  }
`;

const Overlay = styled.div`
  position: fixed;
  inset: 0;
  background-color: rgba(var(--black), 80%);
  z-index: 10090;
  backdrop-filter: blur(1rem);
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
  inset: 0;
  margin: auto;
  z-index: 10099;
  border-radius: var(--border-radius);
  border: var(--border) solid rgb(var(--fg));
  color: rgb(var(--fg));
  overflow: hidden;
  animation: ${popIn} var(--transition-duration)
  var(--transition-timing-function);
  /* max-height: 90%; */
  height: ${props => props.fitHight ? "fit-content" : "90%"};

  & p {
    margin-bottom: ${props => props.fitHight && "0"}
  }
`;

export default PopUp;
