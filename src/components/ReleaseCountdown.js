import styled from "styled-components"

const ReleaseCountdown = () => {
  return (
    <Div>
      <P>New release in <br /> x days</P>
    </Div>
  )
}

const Div = styled.div`
  position: fixed;
  inset: auto auto 5% 0;
  z-index: 8000;
  background-color: rgb(var(--fg));
  border-radius: 0 var(--border-radius) var(--border-radius) 0;
  border: 2px solid rgb(var(--bg2));
`

const P = styled.p`
  color: rgb(var(--bg));
  text-align: right;
  padding: .5rem 1rem .5rem 8vw;
`

export default ReleaseCountdown
