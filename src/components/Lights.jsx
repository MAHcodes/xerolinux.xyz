import styled, { keyframes } from "styled-components";
import Settings from "../content/Settings.json";
const config = {
  globeWidth: 11,
  globeHeight: 25,
  globeSpacing: 100,
  globeSpread: 4,
  globeLightOffOpacity: 0.4,
};

const Lights = () => {
  const lightsCount = 20;
  if (!Settings.lights) return null;

  return (
    <LightRope {...config}>
      {Array.from({ length: lightsCount }).map((_) => (
        <li />
      ))}
    </LightRope>
  );
};

const Flash1 = keyframes`
    0%, 100% { background: rgba(0,247,165,1);
    box-shadow: 0px ${config.globeHeight / 6}px ${config.globeWidth * 2}px ${config.globeSpread
  }px rgba(0,247,165,1);} 
    50% { background: rgba(0,247,165,${config.globeLightOffOpacity});
    box-shadow: 0px ${config.globeHeight / 6}px ${config.globeWidth * 2}px ${config.globeSpread
  }px rgba(0,247,165, 0.2);} 
}
`;
const Flash2 = keyframes`
    0%, 100% { background: rgba(0,255,255,1);
    box-shadow: 0px ${config.globeHeight / 6}px ${config.globeWidth * 2}px ${config.globeSpread
  }px rgba(0,255,255,1);} 
    50% { background: rgba(0,255,255,${config.globeLightOffOpacity});
    box-shadow: 0px ${config.globeHeight / 6}px ${config.globeWidth * 2}px ${config.globeSpread
  }px rgba(0,255,255,0.2);} `;
const Flash3 = keyframes`
    0%, 100% { background: rgba(247,0,148,1);
    box-shadow: 0px ${config.globeHeight / 6}px ${config.globeWidth * 2}px ${config.globeSpread
  }px rgba(247,0,148,1);} 
    50% { background: rgba(247,0,148,${config.globeLightOffOpacity});
    box-shadow: 0px ${config.globeHeight / 6}px ${config.globeWidth * 2}px ${config.globeSpread
  }px rgba(247,0,148,0.2);} 
`;

const LightRope = styled.ul`
  text-align: center;
  white-space: nowrap;
  overflow: hidden;
  position: fixed;
  z-index: 10101;
  margin: auto;
  padding: 0;
  inset: -45px 0 auto 0;
  pointer-events: none;
  width: 100vw;

  & li {
    position: relative;
    animation-fill-mode: both; 
    animation-iteration-count:infinite;
    list-style: none;
    margin: 0;
    padding: 0;
    display: block;
    width: ${(props) => props.globeWidth}px;
    height: ${(props) => props.globeHeight}px;
    border-radius: 50%;
    margin: ${(props) => props.globeSpacing / 2}px;
    display: inline-block;
    background: rgba(0,247,165,1);
    box-shadow: 0px ${(props) => props.globeHeight / 6}px ${(props) =>
    props.globeWidth * 2}px ${(props) => props.globeSpread}px rgba(0,247,165,1);
    animation-name: ${Flash1};
    animation-duration: 2s;
    &:nth-child(2n+1) {
      background: rgba(0,255,255,1);
      box-shadow: 0px ${(props) => props.globeHeight / 6}px ${(props) =>
    props.globeWidth * 2}px ${(props) => props.globeSpread}px rgba(0,255,255,0.5);
      animation-name: ${Flash2};
      animation-duration: 0.4s;
    }
    &:nth-child(4n+2) {
      background: rgba(247,0,148,1);
      box-shadow: 0px ${(props) => props.globeHeight / 6}px ${(props) =>
    props.globeWidth * 2}px ${(props) => props.globeSpread}px rgba(247,0,148,1);
      animation-name: ${Flash3};
      animation-duration: 1.1s;
    }
    &:nth-child(odd) {
      animation-duration: 1.8s;
    }
    &:nth-child(3n+1) {
      animation-duration: 1.4s;
    }
    &::before {
      content: "";
      position: absolute;
      background: rgb(var(--black));
      width: ${(props) => props.globeWidth - 2}px;
      height: ${(props) => props.globeHeight / 3}px;
      border-radius: 3px;
      top: ${(props) => 0 - props.globeHeight / 6}px;
      left: 1px;
    }
    &::after {
      content: "";
      left: ${(props) => props.globeWidth - 3}px;
      top: ${(props) => Math.round(- props.globeHeight / 2) }px;
      position: absolute;
      width: ${(props) => props.globeSpacing + 12}px;
      height: ${(props) => Math.round( props.globeHeight / 3 * 2)}px;
      border-bottom: solid rgb(var(--black)) 2px;
      border-radius: 50%;
    }
    &:last-child::after {
      content: none;
    }
    &:first-child {
      margin-left: ${(props) => -props.globeSpacing / 2}px;
    }
  }
}
`;

export default Lights;
