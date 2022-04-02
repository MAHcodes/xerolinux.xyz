import styled, { css } from "styled-components";

const Button = ({ text, action, primary, themed }) => {
  return (
    <StyledButton primary={primary} themed={themed} onClick={action}>
      {text}
    </StyledButton>
  );
};

const StyledButton = styled.button`
  padding: .5em 1em;
  border-radius: var(--border-radius);
  background-color: transparent;
  color: rgb(var(--bg));
  border-width: var(--border);
  border-color: rgb(var(--bg));
  border-style: solid;
  white-space: nowrap;
  cursor: pointer;
  transition: var(--transition-duration) ease-in-out;
    
  &:hover,
  &:focus {
    box-shadow: 3px 4px 0 0px rgba(var(--black), 55%);
    transform: translate(-1px, -2px);
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
  }}

`;

export default Button;
