import { useContext, useEffect } from "react";
import styled from "styled-components";
import { ThemeContext } from "../contexts/ThemeContext";
import { PopUpContext } from "../contexts/PopUpContext";
import Box from "./Box";
import Button from "./Button";
import Buttons from "./Buttons";
import Title from "./Title";
import SteamDeckImg from "../assets/images/steamdeck.png";

const Donate = ({ img }) => {
  const { theme } = useContext(ThemeContext);
  const { setPopUp } = useContext(PopUpContext);

  useEffect(() => {
    document.body.classList = theme ? "light" : "dark";
    localStorage.setItem("theme", JSON.stringify(theme));
  }, [theme]);

  return (
    <Div className="container">
      <Title text="Donate" />
      {img && <Img src={SteamDeckImg} alt="Steam Deck Image" />}
      <Box>
        <Info onClick={() => setPopUp("Donate")}>i</Info>
        <P>Feel free to support us on the below platforms :</P>
        <Buttons justify="space-evenly" mb="0">
          <a
            href="https://fnd.us/523mC5"
            target="_blank"
            rel="noreferrer noopener"
          >
            <Button
              padding=".5rem 2rem"
              text="FundRazr"
              primary
              themed
              fz="var(--fz-6)"
              icon={
                <svg
                  aria-label="PayPal"
                  role="img"
                  viewBox="0 0 512 512"
                  width="32"
                  height="32"
                >
                  <path
                    fill="#002c8a"
                    d="M377 184.8L180.7 399h-72c-5 0-9-5-8-10l48-304c1-7 7-12 14-12h122c84 3 107 46 92 112z"
                  />
                  <path
                    fill="#009be1"
                    d="M380.2 165c30 16 37 46 27 86-13 59-52 84-109 85l-16 1c-6 0-10 4-11 10l-13 79c-1 7-7 12-14 12h-60c-5 0-9-5-8-10l22-143c1-5 182-120 182-120z"
                  />
                  <path
                    fill="#001f6b"
                    d="M197 292l20-127a14 14 0 0 1 13-11h96c23 0 40 4 54 11-5 44-26 115-128 117h-44c-5 0-10 4-11 10z"
                  />
                </svg>
              }
            />
          </a>
          <a
            href="https://paypal.me/3v3bank661"
            target="_blank"
            rel="noreferrer noopener"
          >
            <Button
              text="PayPal"
              primary
              themed
              padding=".5rem 2rem"
              fz="var(--fz-6)"
              icon={
                <svg
                  aria-label="PayPal"
                  role="img"
                  viewBox="0 0 512 512"
                  width="32"
                  height="32"
                >
                  <path
                    fill="#002c8a"
                    d="M377 184.8L180.7 399h-72c-5 0-9-5-8-10l48-304c1-7 7-12 14-12h122c84 3 107 46 92 112z"
                  />
                  <path
                    fill="#009be1"
                    d="M380.2 165c30 16 37 46 27 86-13 59-52 84-109 85l-16 1c-6 0-10 4-11 10l-13 79c-1 7-7 12-14 12h-60c-5 0-9-5-8-10l22-143c1-5 182-120 182-120z"
                  />
                  <path
                    fill="#001f6b"
                    d="M197 292l20-127a14 14 0 0 1 13-11h96c23 0 40 4 54 11-5 44-26 115-128 117h-44c-5 0-10 4-11 10z"
                  />
                </svg>
              }
            />
          </a>
          <a
            href="https://patreon.com/XeroLinux"
            target="_blank"
            rel="noreferrer noopener"
          >
            <Button
              text="Patreon"
              padding=".5rem 2rem"
              primary
              themed
              fz="var(--fz-6)"
              icon={
                <svg
                  width="32"
                  height="32"
                  viewBox="0 0 32 32"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M28 13.0086C28 17.9601 24.1375 21.9927 19.3844 21.9927C14.6172 21.9927 10.7406 17.965 10.7406 13.0086C10.7406 8.04237 14.6172 4 19.3844 4C24.1375 4 28 8.04237 28 13.0086ZM4 28H8.21875V4H4V28Z"
                    fill="white"
                  />
                </svg>
              }
            />
          </a>
        </Buttons>
      </Box>
    </Div>
  );
};

const Div = styled.div`
  padding-block: var(--padding-section);
  text-align: center;
  color: rgb(var(--fg));
  height: 100%;
  & button {
    height: 100%;
  }
  & > div {
    padding: 2rem;
    position: relative;
  }
`;

const Info = styled.span`
  position: absolute;
  top: 1rem;
  right: 1rem;
  border: 2px solid rgb(var(--fg));
  border-radius: 50%;
  cursor: pointer;
  width: 1.75rem;
  height: 1.75rem;
  font-weight: bold;
  z-index: 5;

  &:hover {
    background-color: rgb(var(--fg));
    color: rgb(var(--bg));
  }
`;

const P = styled.p`
  margin-block-end: 2rem;
`;

const Img = styled.img`
  padding-block: 2rem;
  object-fit: contain;
`;

export default Donate;
