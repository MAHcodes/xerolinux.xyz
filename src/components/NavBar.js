import styled from "styled-components";
import { PopUpContext } from "../hooks/PopUpContext";
import { useContext } from "react";
import { GoHome, GoDesktopDownload } from "react-icons/go";
import { RiContactsLine } from "react-icons/ri";
import { FaTheaterMasks, FaForumbee } from "react-icons/fa";
import { AiOutlineYoutube } from "react-icons/ai";
import { MdOutlineQuestionAnswer } from "react-icons/md";
import { GiComputerFan } from "react-icons/gi";
import {} from "react-icons/fa";

const NavBar = () => {
  const { setPopUp } = useContext(PopUpContext);
  const popUpPcBuild = () => {
    setPopUp("PCBuild");
  };

  return (
    <StyledNav>
      <ul>
        <a href="#Home">
          <Li>
            <GoHome />
            <p>Home</p>
          </Li>
        </a>
        <a href="#Features">
          <Li className="nofill">
            <RiContactsLine />
            <p>Features</p>
          </Li>
        </a>
        <a href="#Download">
          <Li>
            <GoDesktopDownload />
            <p>Download</p>
          </Li>
        </a>
        <a href="#Customization">
          <Li>
            <FaTheaterMasks />
            <p>Customization</p>
          </Li>
        </a>
        <a href="#Videos">
          <Li>
            <AiOutlineYoutube />
            <p>Videos</p>
          </Li>
        </a>
        <a href="#FAQ">
          <Li className="nofill">
            <MdOutlineQuestionAnswer />
            <p>FAQ</p>
          </Li>
        </a>
        <Li className="button" onClick={popUpPcBuild}>
          <GiComputerFan />
          <p>My PC Build</p>
        </Li>
        <a href="https://forum.xerolinux.xyz/" target="_blank" rel="noreferrer">
          <Li>
            <FaForumbee />
            <p>Forum</p>
          </Li>
        </a>
      </ul>
    </StyledNav>
  );
};

const StyledNav = styled.div``;

const Li = styled.li`
  display: flex;
  aling-items: center;
  justify-content: start;
  padding-block: 0.65rem;
  border-block: var(--border) solid transparent;
  transition: var(--transition-duration) var(--transition-timing-function);

  &:hover {
    padding-block: 1.3rem;
    border-block: var(--border) solid rgba(var(--fg), 35%);
  }

  &.button {
    cursor: pointer;
  }

  & > p {
    line-height: var(--icon-size);
    font-size: var(--fz-6);
    margin-inline-start: 1rem;
  }
  & > svg {
    width: var(--icon-size);
    height: var(--icon-size);
  }
  &:not(.nofill) > svg path {
    fill: rgb(var(--low));
  }
  &.nofill > svg path + path {
    fill: rgb(var(--low));
  }
`;

export default NavBar;
