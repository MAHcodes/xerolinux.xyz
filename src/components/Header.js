import styled from "styled-components";
import logo from "../assets/images/logo.svg";
import HamburgerMenu from "./HamburgerMenu";
import NavBar from "./NavBar";
import { useLayoutEffect, useState } from "react";
import ThemeIcon from "./ThemeIcon";

const Header = () => {
  const [menu, setMenu] = useState(false);

  useLayoutEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 800) {
        setMenu(false);
      } else {
        setMenu(true);
      }
    };
    window.addEventListener("resize", handleResize);
    window.addEventListener("load", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <StyledHeader>
      <div className="container">
        <Wrapper>
          <Brand href="#Home">
            <Logo src={logo} alt="XeroLinux Logo" />
            <P>XeroLinux</P>
          </Brand>
          <HamburgerMenu menu={menu} setMenu={setMenu} />
        </Wrapper>
        {menu && <NavBar />}
        <ThemeIcon />
      </div>
    </StyledHeader>
  );
};

const StyledHeader = styled.header`
  background-color: rgba(var(--bar), 50%);
  color: rgb(var(--whtie));
  border-radius: 0 0 var(--border-radius) var(--border-radius);
  position: relative;

  &::before {
    content: "";
    position: absolute;
    inset: 0;
    background-color: inherit;
    box-shadow: inset 0 0 0 3000px rgba(250, 250, 250, 0.15);
    border-radius: 0 0 var(--border-radius) var(--border-radius);
    filter: blur(5px);
    z-index: -1;
  }

  & .container {
    display: flex;
    align-items: stretch;
    justify-content: space-between;
    flex-direction: row;
    gap: 1.5rem;
    flex-wrap: wrap;
    @media (min-width: 800px) {
      flex-direction: row;
      flex-wrap: nowrap;
    }
  }
`;

const Wrapper = styled.div`
  display: flex;
  flex-grow: 1;
  align-items: center;
  justify-content: space-between;
  @media (max-width: 800px) {
    padding-block: 0.75rem;
  }
`;

const P = styled.p`
  font-size: var(--fz-4);
  color: rgb(var(--white));
  font-weight: bold;
`;

const Logo = styled.img`
  width: 2rem;
  object-fit: contain;
`;

const Brand = styled.a`
  display: flex;
  align-items: center;
  justify-content: center;
  order: -1;
`;

export default Header;
