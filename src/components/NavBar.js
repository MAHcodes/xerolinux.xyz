import styled from "styled-components";
import { PopUpContext } from "../contexts/PopUpContext";
import { useContext } from "react";
import { GoHome } from "react-icons/go";
import { RiContactsLine } from "react-icons/ri";
import { FaTheaterMasks } from "react-icons/fa";
import { AiOutlineYoutube } from "react-icons/ai";
import { MdOutlineQuestionAnswer } from "react-icons/md";
import { GiComputerFan } from "react-icons/gi";
import darkbg from "../assets/images/darkbg.png";

const NavBar = ({ menu }) => {
  const { setPopUp } = useContext(PopUpContext);
  const popUpPcBuild = () => {
    setPopUp("PCBuild");
  };

  return (
    <StyledNav className={menu ? undefined : "close"}>
      <Blur />
      <ul>
        <a href="#Home">
          <li>
            <GoHome />
            <p>Home</p>
          </li>
        </a>
        <a href="#Features">
          <li>
            <RiContactsLine />
            <p>Features</p>
          </li>
        </a>
        <a href="#Customization">
          <li className="padPlus">
            <FaTheaterMasks />
            <p>Customiztion</p>
          </li>
        </a>
        <a href="#Videos">
          <li>
            <AiOutlineYoutube />
            <p>Videos</p>
          </li>
        </a>
        <a href="#FAQ">
          <li>
            <MdOutlineQuestionAnswer />
            <p>F.A.Q</p>
          </li>
        </a>
        <li onClick={popUpPcBuild} className="padPlus">
          <GiComputerFan />
          <p>My Pc Build</p>
        </li>
      </ul>
    </StyledNav>
  );
};

const Blur = styled.div`
  position: absolute;
  inset: 0;
  z-index: -1;
  opacity: 0.75;
  background: url(${darkbg});
  @media (min-width: 1400px) {
    display: none;
  }
`;

const StyledNav = styled.nav`
  color: rgb(var(--white));
  font-size: var(--fz-6);
  text-align: center;
  position: relative;
  overflow: hidden;
  @media (max-width: 1400px) {
    border-radius: var(--border-radius);
    border: 1px solid rgb(255, 175, 200);
    order: 1;
    flex-basis: 100%;
    position: absolute;
    inset: calc(100% + 1rem) 0 auto 0;
    background-color: rgba(var(--bar), 60%);
    backdrop-filter: blur(15px);
    &.close {
      display: none;
    }
  }
  & ul {
    padding-block: 0.5rem;
    & a:hover li {
      border-bottom: 2px solid rgb(var(--white));
    }
    @media (max-width: 1400px) {
      margin: auto;
      flex-direction: column;
      & a:hover li {
        border-bottom: 2px solid transparent;
      }
    }
    display: flex;
    align-items: stretch;
    justify-content: center;
     
    @media (min-width: 1400px) {
      padding-block: 0;
    }
    & > * {
      display: block;
      line-height: 2;
    }
    & li {
      padding: 1em 1.5em;
      height: 100%;
      cursor: pointer;
      white-space: nowrap;
      border-bottom: 2px solid transparent;
      display: flex;
      align-items: center;
      justify-content: center;
      gap: 1rem;
      &:hover {
        @media (min-width: 1400px) {
          border-bottom: 2px solid rgb(var(--white));
        }
      }
      @media (max-width: 1400px) {
        border-radius: var(--border-radius);
      }
      &:hover {
        background-color: rgba(var(--bar), 30%);
      }
    }
    & li.padPlus {
      padding: 1em 2em;
    }  
  }
`;

export default NavBar;
