import Button from "./Button";
import Buttons from "./Buttons";
import { PopUpContext } from "../contexts/PopUpContext";
import { useContext } from "react";

const XeroGButtons = () => {
  
    const { setPopUp } = useContext(PopUpContext);

    const openDonate = () => {
        setPopUp("Donate");
    };  

    return (  
        <Buttons justify="space-evenly" mb="1rem .5rem">
            <a href="https://github.com/xerolinux/xero_g_iso" target="_blank" rel="noreferrer noopener">
            <Button
                text="Build"
                primary
                clr="rgb(var(--black))"
                padding=".75em 1.75em"
                fz="var(--fz-5)"
                float="right"
                bg={"rgb(var(--white))"}
            />
            </a>
            <Button
                text="$ Donate $"
                themed
                padding=".75em 1.75em"
                fz="var(--fz-5)"
                clr="rgb(var(--white))"
                action={openDonate}
                />
        </Buttons>
    );
};

export default XeroGButtons;