import styled from "styled-components";
import logo from "../assets/images/logo.svg";
import HamburgerMenu from "./HamburgerMenu";
import NavBar from "./NavBar";
import { useLayoutEffect, useState } from "react";

const Header = () => {
  const [menu, setMenu] = useState(true);

  useLayoutEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 600) {
        setMenu(false);
      } else {
        setMenu(true);
      }
    };
    window.addEventListener("resize", handleResize);
    handleResize();

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
      </div>
    </StyledHeader>
  );
};

const StyledHeader = styled.header`
  background-color: rgba(var(--bar), 50%);
  color: rgb(var(--whtie));
  border-radius: 0 0 var(--border-radius) var(--border-radius);
  & .container {
    display: flex;
    align-items: stretch;
    justify-content: space-between;
    flex-direction: column;
    @media (min-width: 600px) {
      flex-direction: row;
    }
  }
`;

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const P = styled.p`
  font-size: var(--fz-4);
  color: rgb(var(--white));
  font-weight: bold;
`;

const Logo = styled.img`
  width: 46px;
  object-fit: contain;
`;

const Brand = styled.a`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export default Header;
