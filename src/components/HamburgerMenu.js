import styled from "styled-components";

const HamburgerMenu = ({ menu, setMenu }) => {
  const toggleMenu = () => {
    setMenu(!menu);
  };
  return (
    <Hamburger className={menu && "active"} onClick={toggleMenu}>
      <span></span>
      <span></span>
      <span></span>
    </Hamburger>
  );
};

const Hamburger = styled.div`
  width: 26px;
  min-width: 26px;
  aspect-ratio: 1;
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-direction: column;
  border-radius: var(--border-radius);
  cursor: pointer;

  @media (min-width: 800px) {
    display: none;
  }

  & span {
    display: inline-block;
    width: 100%;
    height: 3px;
    background-color: rgb(var(--white));
    border-radius: var(--border-radius);
    transition: var(--transition-duration) var(--transition-timing-function);
    transform-origin: center;
  }

  &.active {
    & span:nth-child(1) {
      transform: translateY(13px) rotate(-45deg);
    }
    & span:nth-child(2) {
      transform: scale(0);
      opacity: 0;
    }
    & span:nth-child(3) {
      transform: rotate(45deg) translate(-7px, -7px);
    }
  }
`;

export default HamburgerMenu;
