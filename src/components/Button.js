import styled, { css } from "styled-components";

const Button = ({ text, action, primary, themed, padding, fz, clr }) => {
  return (
    <StyledButton
      primary={primary}
      themed={themed}
      padding={padding || ".5em 1em"}
      clr={clr}
      fz={fz || ".75rem"}
      onClick={action}
    >
      {text}
    </StyledButton>
  );
};

const StyledButton = styled.button`
  border-radius: var(--border-radius);
  background-color: transparent;
  border-width: var(--border);
  border-style: solid;
  white-space: nowrap;
  cursor: pointer;
  transition: var(--transition-duration) ease-in-out;
  }}
  padding: ${(props) => props.padding};
  font-size: ${(props) => props.fz};
  border-color: ${(props) => props.clr || "rgb(var(--bg))"};
  user-select: none;

  &:focus{
    box-shadow: 3px 4px 0 0px rgba(var(--black), 55%);
  }
    
  &:hover{
    box-shadow: 3px 4px 0 0px rgba(var(--black), 55%);
    transform: translate(-1px, -2px);
  z-index: 1;
  }
  &:active {
    box-shadow: 1px 2px 0 0px rgba(var(--black), 55%);
    transform: translate(0, 0);
  }
   
  ${(props) =>
    props.primary &&
    props.themed &&
    css`
      background-color: rgb(var(--bg2));
      border-color: rgb(var(--bg2));
      color: rgb(var(--fg));
    `}
  ${(props) =>
    props.primary &&
    !props.themed &&
    css`
      background-color: rgb(var(--white));
      border-color: rgb(var(--white));
      color: rgb(var(--important));
    `}

  color: ${(props) => props.clr};
  `;

export default Button;
