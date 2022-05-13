import styled from "styled-components"
import Title from "./Title";

const ReleaseCountdown = ({countdown}) => {
  return (
    <Div>
      <div className="container">
        <H1></H1>
        <Title text="New Release in" />
        <Wrapper>
        <p>{countdown.days}<br />days</p>
        <p>{countdown.hours}<br />hours</p>
        <p>{countdown.minutes}<br />minutes</p>
        <p>{countdown.seconds}<br />seconds</p>
        </Wrapper>
      </div>
    </Div>
  )
}

const Div = styled.div`
  color: rgb(var(--fg));
  text-align: center;
  padding-block: var(--padding-section);
`

const H1 = styled.h1`
  font-size: var(--fz-2);
  font-weight: bold;
  margin-block: 1em;
`

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 2rem;
`

export default ReleaseCountdown
