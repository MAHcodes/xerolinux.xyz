import styled, { keyframes } from "styled-components";
import Title from "./Title";
import { useState } from "react";
import Box from "./Box";
import XeroCherry from "../assets/images/XeroCherry.png";
import XeroDracul from "../assets/images/XeroDracul.jpg";
import XeroLayan from "../assets/images/XeroLayan.jpg";
import XeroSweet from "../assets/images/XeroSweet.jpg";
import XeroNord from "../assets/images/XeroNord.jpg";
import Button from "./Button";

const Customization = () => {
  const [rice, setRice] = useState({
    name: "XeroCherry",
    url: "https://github.com/xerolinux/xero-cherry-git",
  });

  return (
    <div className="container">
      <Title text="Customization" />
      <Title sec text="Rices/Themes" />
      <Container ltr>
        <List ltr>
          <li
            onClick={() =>
              setRice({
                name: "XeroCherry",
                url: "https://github.com/xerolinux/xero-cherry-git",
              })
            }
          >
            XeroCherry
          </li>
          <li
            onClick={() =>
              setRice({
                name: "XeroDracul",
                url: "https://github.com/xerolinux/xero-dracul-git",
              })
            }
          >
            XeroDracul
          </li>
          <li
            onClick={() =>
              setRice({
                name: "XeroLayan",
                url: "https://github.com/xerolinux/xero-layan-git",
              })
            }
          >
            XeroLayan
          </li>
          <li
            onClick={() =>
              setRice({
                name: "XeroSweet",
                url: "https://github.com/xerolinux/xero-sweet-git",
              })
            }
          >
            XeroSweet
          </li>
          <li
            onClick={() =>
              setRice({
                name: "XeroNord",
                url: "https://github.com/xerolinux/xero-nord-git",
              })
            }
          >
            XeroNord
          </li>
        </List>
        <Box>
          <Content>
            <ImgWrapper>
              {rice.name === "XeroCherry" && (
                <img src={XeroCherry} alt="XeroCherry Preview" />
              )}
              {rice.name === "XeroDracul" && (
                <img src={XeroDracul} alt="XeroDracul Preview" />
              )}
              {rice.name === "XeroLayan" && (
                <img src={XeroLayan} alt="XeroLayan Preview" />
              )}
              {rice.name === "XeroSweet" && (
                <img src={XeroSweet} alt="XeroSweet Preview" />
              )}
              {rice.name === "XeroNord" && (
                <img src={XeroNord} alt="XeroNord Preview" />
              )}
            </ImgWrapper>
            <ContentWrapper>
              {rice.name === "XeroCherry" && (
                <P>
                  This is our latest Rice. Proudly created by 2 guys from
                  Lebanon, me and "GamerKing64". We are very proud of this one
                  as it is the lightest yet.
                  <br />
                  <br /> It's so light on resources, your machine will fly ! We
                  love the Color Scheme used. Credit to{" "}
                  <A
                    href="https://github.com/nullxception/cherry-kde-theme"
                    target="_blank"
                    rel="noreferrer"
                  >
                    NullXception{" "}
                  </A>
                  for creating such an awesome theme for us to use.. We hope you
                  like it too 😉{" "}
                </P>
              )}
              {rice.name === "XeroDracul" && (
                <P>
                  This rice is a bit complex, uses Latte for everything
                  including side bars. It is intended to be mainly used on
                  XeroLinux. Also is based on the Dracula Theme hence the name.
                  Have fun.
                </P>
              )}
              {rice.name === "XeroLayan" && (
                <P>
                  This rice is the main one used on my Distro, uses Latte for
                  both Panels & Dock. It is intended to be mainly used on
                  XeroLinux. I made scripts to install on "Debian" (KDENeon) and
                  "Fedora KDE Spin"... Test it out and let me know...
                </P>
              )}
              {rice.name === "XeroSweet" && (
                <P>
                  This rice is super simple, based on the SweetKDE theme with
                  Candy Icons, not very complex easy on resources. It is
                  intended to be mainly used on XeroLinux. Have fun.
                </P>
              )}
              {rice.name === "XeroNord" && (
                <P>
                  This rice is one of my faves, it's based on the Nordic theme
                  with quite a unique layout. Latte all of course. It is
                  intended to be mainly used on XeroLinux. Have fun.
                </P>
              )}
              <a href={rice.url} target="_blank" rel="noreferrer">
                <Button
                  text="Installation Guide"
                  primary
                  themed
                  fz="var(--fz-6)"
                  padding=".75em 1.5em"
                />
              </a>
            </ContentWrapper>
          </Content>
        </Box>
      </Container>
    </div>
  );
};

const A = styled.a`
  text-decoration: underline;
`;

const Container = styled.div`
  display: flex;
  align-items: stretch;
  justify-content: center;
  border: var(--border) solid rgb(var(--fg));

  background-color: rgb(var(--fg));

  border-radius: var(--border-radius);
`;

const List = styled.ul`
  color: rgb(var(--bg));
  display: flex;
  align-items: stretch;
  justify-content: center;
  flex-direction: column;

  & > li {
    cursor: pointer;
    padding: 0.75em 1.25em;
    border-radius: ${(props) =>
      props.ltr
        ? "var(--border-radius) 0 0 var(--border-radius)"
        : "0 var(--border-radius) var(--border-radius) 0"};
  }

  & > li:hover {
    background-color: rgb(var(--bg2));
    color: rgb(var(--fg));
  }
`;

const fadeIn = keyframes`
  from {
    opacity: 0;
  }
`;

const Content = styled.div`
  display: flex;
  align-items: stretch;
  justify-content: center;
  padding: 1rem;
  gap: 2rem;

  @media (max-width: 1100px) {
    flex-direction: column;
  }
`;

const ImgWrapper = styled.div`
  overflow: hidden;
  flex: 0.4;

  & > img {
    width: 100%;
    border-radius: var(--border-radius);
    border: var(--border) solid rgb(var(--fg));
    animation: ${fadeIn} 500ms var(--transition-timing-function);
  }
`;

const P = styled.p`
  color: rgb(var(--fg));
  font-size: var(--fz-5);
  margin-block-end: 1em;
  animation: ${fadeIn} 500ms var(--transition-timing-function);
`;

const ContentWrapper = styled.div`
  display: flex;
  align-items: end;
  justify-content: space-between;
  flex-direction: column;
  flex: 0.6;
`;

export default Customization;
