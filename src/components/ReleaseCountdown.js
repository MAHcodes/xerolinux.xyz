import styled from "styled-components"

const ReleaseCountdown = () => {
  return (
    <Div>
      <P>New release in <br /> x days</P>
      <Svg width="420" height="73" viewBox="0 0 420 73" fill="none">
        <path d="M378.5 70.5H140L96.5 27H141.5L167.5 53H396L378.5 70.5Z" fill="#FFCFF2"/>
        <path d="M15 58.5L71.5 2L96.5 27M419 30L396 53M396 53L378.5 70.5H140L96.5 27M396 53H167.5L141.5 27H96.5" stroke="#FFCFF2" strokeWidth="2" strokeLinecap="round"/>
        <circle cx="9" cy="64" r="9" fill="#FFCFF2"/>
      </Svg>
    </Div>
  )
}

const Div = styled.div`
  position: fixed;
  inset: auto auto 10% 0;
  z-index: 8000;
`

const Svg = styled.svg`
  position: absolute; 
  inset: auto auto 0 0;
  width: 100%;
  & path:first-of-type {
    fill: rgb(var(--fg));
  }
  & path:nth-of-type(2) {
    stroke: rgb(var(--fg));
  }
`

const P = styled.p`
  color: rgb(var(--fg));
  text-align: right;
  min-width: 16rem;
  padding: 2rem;
`

export default ReleaseCountdown
