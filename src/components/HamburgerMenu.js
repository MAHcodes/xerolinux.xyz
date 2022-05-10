import styled from "styled-components";

const HamburgerMenu = ({ menu, setMenu }) => {
  const toggleMenu = () => {
    setMenu(!menu);
  };
  return (
    <Hamburger className={menu && "active"} onClick={toggleMenu}></Hamburger>
  );
};

const Hamburger = styled.div`
  position: ralative;
  width: 1.25rem;
  height: 1.25rem;
  border-top: 2px solid;
  border-bottom: 2px solid;
  color: rgb(var(--white));
  font-size: 0;
  cursor: pointer;
  &:before,
  &:after {
    content: '';
    position: absolute;
    display: block;
    width: 1.25rem;
    height: 2px;
    top: 50%;
    background: currentColor;
    transform: translateY(-50%);
    transition: transform var(--transition-duration) var(--transition-timing-function);
  }
  &.active {
    border-color: transparent;
      &:before {
        transform: translateY(-50%) rotate(45deg);
      }
      &:after {
        transform: translateY(-50%) rotate(-45deg);
      }
    }
  }
  @media (min-width: 1400px) {
    display: none;
  }
`;

export default HamburgerMenu;
