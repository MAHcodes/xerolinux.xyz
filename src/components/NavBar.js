import styled from "styled-components";
import { PopUpContext } from "../hooks/PopUpContext";
import { useContext } from "react";

const NavBar = ({ menu }) => {
  const { setPopUp } = useContext(PopUpContext);
  const popUpPcBuild = () => {
    setPopUp("PCBuild");
  };

  return (
    <StyledNav className={menu ? undefined : "close"}>
      <ul>
        <a href="#Home">
          <li>Home</li>
        </a>
        <a href="#Features">
          <li>Features</li>
        </a>
        <a href="#Customization">
          <li>Customiztion</li>
        </a>
        <a href="#Videos">
          <li>Videos</li>
        </a>
        <a href="#FAQ">
          <li>FAQ</li>
        </a>
        <li onClick={popUpPcBuild}>My Pc Build</li>
        <a href="https://forum.xerolinux.xyz/" target="_blank" rel="noreferrer">
          <Li>
            Forum
            <svg
              style={{ marginLeft: "4px" }}
              width="30"
              height="30"
              viewBox="0 0 38 38"
              fill="none"
            >
              <g id="link">
                <path
                  id="Vector"
                  d="M27 16.23C26.6022 16.23 26.2206 16.388 25.9393 16.6693C25.658 16.9506 25.5 17.3322 25.5 17.73V28.5C25.5 28.8978 25.342 29.2794 25.0607 29.5607C24.7794 29.842 24.3978 30 24 30H7.5C7.10218 30 6.72064 29.842 6.43934 29.5607C6.15804 29.2794 6 28.8978 6 28.5V12C6 11.6022 6.15804 11.2206 6.43934 10.9393C6.72064 10.658 7.10218 10.5 7.5 10.5H18.27C18.6678 10.5 19.0494 10.342 19.3307 10.0607C19.612 9.77936 19.77 9.39782 19.77 9C19.77 8.60218 19.612 8.22064 19.3307 7.93934C19.0494 7.65804 18.6678 7.5 18.27 7.5H7.5C6.30653 7.5 5.16193 7.97411 4.31802 8.81802C3.47411 9.66193 3 10.8065 3 12V28.5C3 29.6935 3.47411 30.8381 4.31802 31.682C5.16193 32.5259 6.30653 33 7.5 33H24C25.1935 33 26.3381 32.5259 27.182 31.682C28.0259 30.8381 28.5 29.6935 28.5 28.5V17.73C28.5 17.3322 28.342 16.9506 28.0607 16.6693C27.7794 16.388 27.3978 16.23 27 16.23Z"
                  fill="#FAF4F9"
                />
                <path
                  id="arrow"
                  d="M32.0787 3.12C32.4452 3.27221 32.7365 3.56348 32.8887 3.93C32.9656 4.11033 33.0063 4.30398 33.0087 4.5V13.5C33.0087 13.8978 32.8507 14.2794 32.5694 14.5607C32.2881 14.842 31.9065 15 31.5087 15C31.1109 15 30.7293 14.842 30.448 14.5607C30.1667 14.2794 30.0087 13.8978 30.0087 13.5V8.115L14.5737 23.565C14.4343 23.7056 14.2684 23.8172 14.0856 23.8933C13.9028 23.9695 13.7067 24.0087 13.5087 24.0087C13.3107 24.0087 13.1146 23.9695 12.9318 23.8933C12.749 23.8172 12.5831 23.7056 12.4437 23.565C12.3031 23.4256 12.1915 23.2597 12.1154 23.0769C12.0392 22.8941 12 22.698 12 22.5C12 22.302 12.0392 22.1059 12.1154 21.9231C12.1915 21.7403 12.3031 21.5744 12.4437 21.435L27.8937 6H22.5087C22.1109 6 21.7293 5.84196 21.448 5.56066C21.1667 5.27936 21.0087 4.89782 21.0087 4.5C21.0087 4.10218 21.1667 3.72064 21.448 3.43934C21.7293 3.15804 22.1109 3 22.5087 3H31.5087C31.7047 3.00237 31.8984 3.04314 32.0787 3.12Z"
                  fill="#FAF4F9"
                />
              </g>
            </svg>
          </Li>
        </a>
      </ul>
    </StyledNav>
  );
};

const Li = styled.li`
  display: flex;
  align-items: center;
  justify-content: center;

  & svg {
    width: var(--fz-4);
    object-fit: contian;
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
  border-radius: var(--border-radius);
  backdrop-filter: blur(15px);
  @media (max-width: 1200px) {
    order: 1;
    flex-basis: 100%;
    position: absolute;
    inset: calc(100% + 1rem) 0 auto 0;
    background-color: rgba(var(--bar), 60%);
    &.close {
      display: none;
    }
  }

  & ul {
    padding-block: 0.5rem;
    & a:focus li {
      border-bottom: 2px solid rgb(var(--white));
    }
    @media (max-width: 1200px) {
      margin: auto;
    }

    display: grid;
    align-items: stretch;
    justify-items: stretch;

    @media (min-width: 1200px) {
      grid-template-columns: repeat(7, 1fr);
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

      &:hover {
        @media (min-width: 1200px) {
          border-bottom: 2px solid rgb(var(--white));
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
