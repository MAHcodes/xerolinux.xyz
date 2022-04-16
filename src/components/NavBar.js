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

const NavBar = ({ menu }) => {
  const { setPopUp } = useContext(PopUpContext);
  const popUpPcBuild = () => {
    setPopUp("PCBuild");
  };

  return (
    <StyledNav className={menu ? undefined : "close"}>
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

  & #Vector,
  & #arrow {
    delay: var(--delay-duration);
    transform: scale(0.85);
    transform-origin: center;
  }
  &:hover #arrow {
    transform: translate(2px, -2px) scale(0.9);
  }
  &: active #arrow {
    transform: translate(3px, -3px);
  }
  &:hover #Vector {
    transform: scale(0.75);
    transform-origin: center;
  }
  & img {
    width: 1.15rem;
    object-fit: contain;
  }
`;

const StyledNav = styled.nav`
  color: rgb(var(--white));
  font-size: var(--fz-6);
  text-align: center;
  @media (max-width: 1200px) {
    order: 1;
    flex-basis: 100%;
    &.close {
      display: none;
    }
  }

  & ul {
    padding-block: 0.5rem;
    & a:focus li {
      border-bottom: 2px solid rgb(var(--white));
      font-weight: bold;
    }

    display: grid;
    align-items: stretch;
    justify-items: stretch;

    @media (min-width: 1200px) {
      grid-template-columns: repeat(8, 1fr);
      padding-block: 0;
    }

    & > * {
      display: block;
      line-height: 2;
    }
    & li {
      padding: 1em;
      height: 100%;
      cursor: pointer;
      white-space: nowrap;
      border-bottom: 2px solid transparent;

      &.active {
        @media (min-width: 1200px) {
          border-bottom: 2px solid rgb(var(--white));
          font-weight: bold;
        }
      }

      @media (max-width: 1200px) {
        border-radius: var(--border-radius);
      }

      &:hover {
        background-color: rgba(var(--bar), 30%);
      }
    }
  }
`;

export default NavBar;
