import styled from "styled-components";
import SteamDeckImg from "../assets/images/help.png";

const DonateInfo = () => {
  return (
    <Div>
      <Img src={SteamDeckImg} alt="Steam Deck Image" />
      <p>
        <strong>- Help project to continue :</strong><br /><br />

My country, <span>(Lebanon)</span> is currently going through a bad economic & political crisis. In light of the current situation, maintaining the project, or any extra ones, is harder than it should be. Your contributions will go a long way into sustaining it for a long time to come.<br /><br />

<center>Support me on <span>Ko-Fi</span>, or Become a Github <span>Sponsor</span>.</center>
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
