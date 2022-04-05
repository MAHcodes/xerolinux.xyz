import styled from "styled-components";
import Box from "./Box";
import Title from "./Title";

const Features = () => {
  return (
    <FeaturesSection id="Features">
      <div className="container">
        <Title text="Features" />
        <Box></Box>
      </div>
    </FeaturesSection>
  );
};

const FeaturesSection = styled.div`
  padding-block: var(--padding-section);
`;

export default Features;
