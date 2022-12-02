import styled, { css } from "styled-components";

const Button = ({
  text,
  action,
  primary,
  themed,
  padding,
  fz,
  clr,
  icon,
  float,
  bg,
  underline
}) => {
  return (
    <StyledButton
      primary={primary}
      theme={themed}
      padding={padding || ".5em 1em"}
      clr={clr}
      icon={icon}
      fz={fz || ".75rem"}
      onClick={action}
      float={float}
      bg={bg}
      underline={underline}
    >
      {icon && icon}
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
  float: ${(props) => props.float};
  padding: ${(props) => props.padding};
  font-size: ${(props) => props.fz};
  border-color: ${(props) => props.clr || "rgb(var(--bg))"};
  text-decoration: ${(props) => props.underline ? "underline" : "none"};
  user-select: none;

  ${(props) =>
    props.icon &&
    css`
      display: flex;
      align-items: center;
      justify-content: center;
    `}

  & img {
    width: 1.5rem;
    object-fit: contain;
    display: block;
    margin-inline-end: 0.5em;
  }

  & svg {
    margin-inline-end: 0.5em;
    width: 2rem;
    height: 2rem;
    object-fit: contain;
    & path {
      fill: rgb(var(--bg));
    }
  }

  &:focus {
    box-shadow: 3px 4px 0 0px rgba(var(--black), 55%);
  }

  &:hover {
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
    props.theme &&
    css`
      background-color: ${props.bg || "rgb(var(--fg))"};
      border-color: ${props.bg || "rgb(var(--fg))"};
      color: rgb(var(--high));
    `}

  color: ${(props) => props.clr};
`;

export default Button;
