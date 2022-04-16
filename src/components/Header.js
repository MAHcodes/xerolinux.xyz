import styled from "styled-components";
import logo from "../assets/images/logo.svg";
import HamburgerMenu from "./HamburgerMenu";
import NavBar from "./NavBar";
import { useState } from "react";
import ThemeIcon from "./ThemeIcon";

const Header = () => {
  const [menu, setMenu] = useState(false);

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
        <NavBar menu={menu} />
        <ThemeIcon />
      </div>
    </StyledHeader>
  );
};

const StyledHeader = styled.header`
  background-color: rgba(var(--bar), 50%);
  color: rgb(var(--whtie));
  border-radius: 0 0 var(--border-radius) var(--border-radius);
  position: sticky;
  top: 0;
  backdrop-filter: blur(15px);

  & .container {
    display: flex;
    align-items: stretch;
    justify-content: space-between;
    flex-direction: row;
    gap: 1.5rem;
    flex-wrap: wrap;
    @media (min-width: 1200px) {
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
  @media (max-width: 1200px) {
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
