import styled from "styled-components";
import NavBar from "./NavBar";
import ThemeIcon from "./ThemeIcon";
import XeroBranding from "./XeroBranding";

const Header = () => {
  return (
    <StyledHeader>
      <XeroBranding />
      <NavBar />
      <ThemeIcon dark />
    </StyledHeader>
  );
};

const StyledHeader = styled.div`
  position: fixed;
  inset: 0 auto 0 0;
  z-index: 9999999;
  width: calc(var(--icon-size) + 2rem);
  background-color: rgb(var(--bg));
  overflow: hidden;
  padding: 1rem;
  display: flex;
  flex-direction: column;
  align-items: stretch;
  justify-content: space-between;
  color: rgb(var(--fg));
  white-space: nowrap;
  flex-wrap: wrap;
  transition: all var(--transition-duration) var(--transition-timing-function);
  border-right: var(--border) solid rgb(var(--fg));

  &:hover {
    box-shadow: 0 0 30px -5px rgb(var(--black));
    width: 11.25rem;
  }
  & > * {
    width: fit-content;
  }
`;

export default Header;
