import { useContext, useEffect } from "react";
import styled from "styled-components";
import { ThemeContext } from "../contexts/ThemeContext";
import Box from "./Box";
import Button from "./Button";
import Buttons from "./Buttons";
import Title from "./Title";

const Donate = () => {
  const { theme } = useContext(ThemeContext);

  useEffect(() => {
    document.body.classList = theme ? "light" : "dark";
    localStorage.setItem("theme", JSON.stringify(theme));
  }, [theme]);

  return (
    <Div className="container">
      <Title text="Donate" />
      <Box>
        <P>Help Us Raise Funds For The Steam Deck<br />
        Feel free to support us on the below platforms :</P>
        <Buttons justify="center" mb="0">
          <a
            href="https://fnd.us/523mC5"
            target="_blank"
            rel="noreferrer noopener"
          >
            <Button text="FundRazr" primary themed fz="var(--fz-6)" />
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
              fz="var(--fz-6)"
              icon={
                <svg aria-label="PayPal" role="img" viewBox="0 0 512 512">
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
              primary
              themed
              fz="var(--fz-6)"
              icon={
                <svg width="32" height="31" viewBox="0 0 32 31" fill="none">
                  <g clipPath="url(#clip0_82_18)">
                    <path
                      d="M31.6625 11.7689C31.6625 17.889 26.6843 22.8732 20.5582 22.8732C14.414 22.8732 9.41768 17.895 9.41768 11.7689C9.41768 5.63073 14.414 0.634399 20.5582 0.634399C26.6843 0.634399 31.6625 5.63073 31.6625 11.7689ZM0.72998 30.2982H6.16734V0.634399H0.72998V30.2982Z"
                      fill="white"
                    />
                  </g>
                  <defs>
                    <clipPath id="clip0_82_18">
                      <rect
                        width="30.9326"
                        height="30.9326"
                        fill="white"
                        transform="translate(0.72998)"
                      />
                    </clipPath>
                  </defs>
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
  & button {
    height: 100%;
  }
  & > div {
    padding:2rem;
  }
`;

const P = styled.p`
  margin-block-end: 2rem;
`;

export default Donate;
