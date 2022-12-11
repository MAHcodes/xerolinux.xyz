import styled from "styled-components";
import Title from "./Title";

const ReleaseCountdown = ({ countdown }) => {
  return (
    <Div id="Countdown">
      <div className="container">
        <Title text="Please be patient," />
        <Title text="New Release Will be Available in :" />
        <Wrapper>
          <p>
            <span>{`${countdown.days}`.padStart(2, "0")}</span>
            <br />
            days
            <Svg width="884" height="224" viewBox="0 0 884 224" fill="none">
              <path
                d="M255.292 221.723L222.545 188.957V134.125L240.589 152.179V184.277L259.302 203H495.218L513.931 221.723H255.292Z"
                fill="#FFCFF2"
              />
              <path
                d="M124.302 222H60.8119L2 163.155V60.845L60.8119 2H163.733L222.545 60.845V134.125M882 199.657H835.218L813.163 221.723H513.931M513.931 221.723H255.292L222.545 188.957V134.125M513.931 221.723L495.218 203H259.302L240.589 184.277V152.179L222.545 134.125"
                stroke="#FFCFF2"
                stroke-width="4"
                stroke-linecap="round"
              />
            </Svg>
          </p>
          <p>
            <span>{`${countdown.hours}`.padStart(2, "0")}</span>
            <br />
            hours
          </p>
            <p>:</p>
          <p>
            <span>{`${countdown.minutes}`.padStart(2, "0")}</span>
            <br />
            minutes
          </p>
          <p>:</p>
          <p>
            <span>{`${countdown.seconds}`.padStart(2, "0")}</span>
            <br />
            seconds
          </p>
        </Wrapper>
        <P>According to Lebanon timezone (GMT+3)</P>
      </div>
    </Div>
  );
};

const Div = styled.div`
  color: rgb(var(--fg));
  text-align: center;
  padding-block: var(--padding-section);
  overflow-x: hidden;
`;

const Wrapper = styled.div`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  font-size: var(--fz-4);
  margin-block: var(--padding-section);
  gap: 1.5rem;

  @media (min-width: 800px) {
    gap: 2rem;
  }

  & p:nth-of-type(1) {
    color: rgb(var(--fg2));
  position: relative;
  }

  & p:nth-of-type(2) {
    margin-inline-start: 3rem;
  }

  & p > span {
    font-size: var(--fz-1);
    font-weight: bold;
  }
`;

const P = styled.p`
  margin-block-start: 1rem;
`

const Svg = styled.svg`
  height: 170%;
  width: auto;
  position: absolute;
  inset: -25% auto auto -95%;
  /* transform: translate(-10%, -10%); */
  & path:nth-of-type(1) {
    fill: rgb(var(--fg));
  }
  & path:nth-of-type(2) {
    stroke: rgb(var(--fg));
  }
`;

export default ReleaseCountdown;
