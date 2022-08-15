import styled from "styled-components";
import SteamDeckImg from "../assets/images/steamdeck.png";

const DonateInfo = () => {
  return (
    <Div>
      <Img src={SteamDeckImg} alt="Steam Deck Image" />
      <p>
        "We think that XeroLinux has finally reached its potential when it comes
        to Desktops and laptops. So we have decided to target other devices,
        like the new <span><a href="https://store.steampowered.com/steamdeck">SteamDeck</a></span> as we feel that SteamOS has too many
        restrictions, and we want to unleash more power by giving you, the user
        more freedom when it comes to adding features and using it as a portable
        Desktop ;)"
      </p>
    </Div>
  );
};

const Div = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`

const Img = styled.img`
  width: 50%;
  margin: auto;
  padding-block-end: 1rem;
  object-fit: contain;
`;

export default DonateInfo;
