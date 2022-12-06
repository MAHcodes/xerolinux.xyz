import styled from "styled-components";
import SteamDeckImg from "../assets/images/help.png";

const DonateInfo = () => {
  return (
    <Div>
      <Img src={SteamDeckImg} alt="Steam Deck Image" />
      <p>
        <strong>- Help project to continue :</strong><br /><br />


My country, <span>(Lebanon)</span> is currently going through a bad economic & political crisis. In light of the current situation, maintaining the project is harder than it should be. Your contributions will go a long way into sustaining it for a long time to come.<br /><br />

Select from the options below, how you would like to support the project. Keep in mind that <span>FundRazr</span> and <span>PayPal</span> are one time donations while <span>Patreon</span> will be monthly recurring contributions with various tiers, unlocking early access to future projects & more...
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
