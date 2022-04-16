import styled from "styled-components";
import Title from "./Title";
import RicesJSON from "../content/Rices.json";
import GrubJSON from "../content/Grub.json";
import CustomizationBox from "./CustomizationBox";

const Customization = () => {
  return (
    <Div id="Customization" className="container">
      <Title text="Customization" />

      <Title sec text="Rices/Themes" />
      <CustomizationBox ltr content={RicesJSON} />

      <Title sec text="GRUB Themes" />
      <CustomizationBox content={GrubJSON} />
    </Div>
  );
};

const Div = styled.div`
  padding-block: var(--padding-section);
`;

export default Customization;
