import styled, { keyframes } from "styled-components";
import UserAgreement from "./UserAgreement";
import ThemeIcon from "./ThemeIcon";
import { useContext, useEffect, useState } from "react";
import { PopUpContext } from "../contexts/PopUpContext";
import Close from "./Close";
import Button from "./Button";
import AnnouncementsPopUP from "./AnnouncementsPopUp";
import PCBuild from "./PCBuild";
import Changelog from "./Changelog";
import AgreedOptions from "./AgreedOptions";
import Buttons from "./Buttons";

const PopUp = () => {
  const [agreed, setAgreed] = useState(false);

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
      <Div donate={popUp === "Donate"}>
        <Wrapper>
          <Panel>
            <ThemeIcon dark />
            <Close action={closePopup} />
          </Panel>
          <Content>
            {popUp === "UserAgreement" && <UserAgreement />}
            {popUp === "Announcements" && <AnnouncementsPopUP />}
            {popUp === "PCBuild" && <PCBuild />}
            {popUp === "Changelog" && <Changelog />}
            {popUp === "Donate" && (
              <p>
                "We think that XeroLinux has finally reached its potential when
                it comes to Desktops and laptops. So we have decided to target
                other devices, like the new SteamDeck as we feel that SteamOS
                has too many restrictions, and we want to unleash more power by
                giving you, the user more freedom when it comes to adding
                features and using it as a portable Desktop ;)"
              </p>
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
            ) : popUp === "UserAgreement" ? (
              <>
                <AgreedOptions agreed={agreed} />
                <Buttons justify="space-between" mb="0">
                  {!agreed && (
                    <Button
                      text="Disagree"
                      clr="rgb(var(--fg))"
                      padding=".75em 2em"
                      fz="var(--fz-5)"
                      action={() => setPopUp("")}
                    />
                  )}
                  <Button
                    padding=".75em 2em"
                    fz="var(--fz-5)"
                    text={agreed ? "Close" : "I agree"}
                    float="right"
                    primary={!agreed}
                    clr={agreed ? "inherit" : "rgb(var(--bg))"}
                    themed
                    action={() => setAgreed(!agreed)}
                  />
                </Buttons>
              </>
            ) : (
              <Button
                action={closePopup}
                float="right"
                primary
                themed
                text="Close"
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

  & center {
    text-align: center;
  }

  & p {
    margin-bottom: 2em;
  }

  & blockquote,
  & .bg {
    background-color: rgb(var(--fg));
    color: rgb(var(--bg));
    border-radius: var(--border-radius);
    padding: 1em;

    & span {
      color: rgba(var(--bg2), 85%);
    }
  }

  & h1,
  & h2,
  & h3,
  & h4,
  & h5 & h6 {
    font-weight: bold;
    color: rgb(var(--fg2));
  }

  & h1 {
    font-size: var(--fz-2);
  }
  & h2 {
    font-size: var(--fz-2);
    text-align: start;
  }
  & h3 {
    font-size: var(--fz-3);
  }
  & h4 {
    font-size: var(--fz-4);
  }
  & h5 {
    font-size: var(--fz-5);
  }
  & h6 {
    font-size: var(--fz-6);
  }

  & ul {
    list-style-type: disc;
  }

  & ol {
    list-style-type: numbers;
  }

  & ol,
  & ul {
    margin-inline-start: 1rem;
    margin-bottom: 2em;
    line-height: 1.7;
  }

  & span,
  & strong {
    font-weight: bold;
    color: rgba(var(--fg2), 85%);
  }

  & a {
    text-decoration: underline;
  }

  & summary {
    text-decoration: underline;
    margin-inline-start: 1rem;
    margin-block-end: 1rem;
    cursor: pointer;
    list-style: revert;
    font-weight: bold;
  }
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
  height: ${props => props.donate ? "max-content" : "90%"};

  & p {
    margin-bottom: ${props => props.donate && "0"}
  }
`;

export default PopUp;
