import styled from "styled-components";

const CreditButton = ({ icon, name, url }) => {
  return (
    <Div>
      <a href={url} target="_blank" rel="noreferrer">
        <span>{icon}</span>
        {name}

        <Svg
          width="397"
          height="93"
          viewBox="0 0 397 93"
          fill="none"
        >
          <path
            d="M89.5969 91.0608L90.0362 91.5001H90.6575H154.284V89.8807L155.283 90.8795L155.722 91.3188H156.343H393.5H395V89.8188V12.1042V10.6042H393.5H267.319L268.061 9.86304L260.65 2.44014L260.21 2H259.588H148.921V2.56021L148.92 2.55997L148.481 2.12063H147.86H77.8709H76.3709V3.62063V40.8296H47.1181H17.8578C17.1575 37.2046 13.9675 34.467 10.138 34.467C5.79561 34.467 2.27539 37.9872 2.27539 42.3296C2.27539 46.672 5.79561 50.1923 10.138 50.1923C13.9675 50.1923 17.1575 47.4546 17.8578 43.8296H47.1181H76.3709V81.3353V82.8353H77.8709H83.6578L82.5146 83.9784L89.5969 91.0608ZM147.238 82.8353L152.903 88.5001H91.2789L85.6141 82.8353H147.238ZM264.562 10.6042H156.965L151.36 5H258.966L264.562 10.6042Z"
            stroke="#FFCFF2"
            strokeWidth="3"
          />
        </Svg>
      </a>
    </Div>
  );
};

const Div = styled.div`
  position: relative;
  margin-left: 5rem;
  white-space: nowrap;

  & a {
    color: rgb(var(--fg2));
    font-size: var(--fz-5);
  }

  & span {
    margin-inline-end: 0.75rem;
  }

  & span > svg {
    width: calc(var(--icon-size) - 0.25rem);
    height: calc(var(--icon-size) - 0.25rem);
  }
`;

const Svg = styled.svg`
  position: absolute;
  inset: -0.75rem -2rem auto auto;
  width: 175%;
  height: 175%;

  & > path {
    stroke: rgb(var(--fg));
    transition: fill var(--transition-duration) var(--transition-timing-function),
       stroke var(--transition-duration) var(--transition-timing-function);
  }

  &:hover {
    & > path {
      stroke: rgb(var(--fg2));
      fill: rgba(var(--bg2), 25%);
    }
  }
`;

export default CreditButton;
