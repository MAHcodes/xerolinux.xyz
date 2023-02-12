import Button from "./Button";
import Buttons from "./Buttons";
import { PopUpContext } from "../contexts/PopUpContext";
import { useContext } from "react";
import Title from "./Title";
import Box from "./Box";
import styled, { keyframes, css } from "styled-components";

const XeroGOptions = ({ helping }) => {

    const { setPopUp } = useContext(PopUpContext);

    const openDonate = () => {
        setPopUp("Donate");
    };

    return (
        <Div helping={helping}>
            <Box>
                <Title text=".: Select an Option :." />
                <Wrapper>
                    <P>
                        Select from the options below, how you would like to support the project. Opting for the one-time dono on Fundrazr will unlock access to the ISO, just make sure to let me know via private message there. Whereas if you decide to support project on a monthly basis use Patreon Tier 2 and above.
                    </P>
                </Wrapper>
                <Buttons justify="space-evenly" mb="1rem .5rem">
                    <a href="https://github.com/xerolinux/xero_g_iso" target="_blank" rel="noreferrer noopener">
                        <Button
                            text="Build"
                            padding=".75em 2em"
                            fz="var(--fz-5)"
                            primary
                            themed
                            bg="#00cc00"
                            clr="rgb(var(--black))"
                        />
                    </a>
                    <Button
                        text="Donate"
                        padding=".75em 2em"
                        fz="var(--fz-5)"
                        primary
                        themed
                        bg="#aa00ff"
                        clr="rgb(var(--white))"
                        action={openDonate}
                    />
                </Buttons>
            </Box>
        </Div>);
};

const popIn = keyframes`
  from {
    transform: rotateX(90deg);
  }
`;

const Div = styled.div`
  border: var(--border) solid rgb(var(--fg));
  border-radius: var(--border-radius);
  margin-block: 2rem;
  background-color: rgb(var(--bg2));
  transform-origin: center bottom;
  animation: ${popIn} 400ms var(--transition-timing-function);
  display: none;

  ${(props) =>
    props.helping &&
    css`
      display: block;
    `}
`;

const Wrapper = styled.div`
  display: flex;
  align-items: stretch;
  justify-content: space-between;
  gap: 1rem;

  @media (max-width: 800px) {
    flex-direction: column;
  }
`;

const P = styled.p`
  margin-block: 0.5em;
  & > a {
    color: rgb(var(--fg2));
    text-decoration: underline;
  }
`;

export default XeroGOptions;