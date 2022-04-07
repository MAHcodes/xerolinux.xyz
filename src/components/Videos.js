import styled from "styled-components";
import Title from "./Title";

const Videos = ({ title, videos }) => {
  return (
    <Section>
      <Title>{title}</Title>
      <Container>
        <VideosWrapper></VideosWrapper>
      </Container>
    </Section>
  );
};

const Section = styled.section`
  padding-block: var(--padding-section);
`;

const VideosWrapper = styled.div``;

const Container = styled.div``;

export default Videos;
