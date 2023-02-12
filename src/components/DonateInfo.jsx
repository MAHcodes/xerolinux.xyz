import styled from "styled-components";
import SteamDeckImg from "../assets/images/help.png";

const DonateInfo = () => {
  return (
    <Div>
      <Img src={SteamDeckImg} alt="Steam Deck Image" />
      <p>
        <strong>- Help project to continue :</strong><br /><br />

My country, <span>(Lebanon)</span> is currently going through a bad economic & political crisis. In light of the current situation, maintaining the project, or any extra ones, pro-bono, is harder than it should be. Your contributions will go a long way into sustaining it for a long time to come.<br /><br />

<strong>- Which Service to use :</strong><br /><br />

Select from the options below, how you would like to support the project. <span>Fundrazr</span> is a one-time donation system with no perks, whereas <span>Patreon</span> is a monthly recurring subscribption model where you will get access to future projects, private support, and much more, for as long as you are subscribed...
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
