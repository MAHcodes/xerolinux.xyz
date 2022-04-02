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
