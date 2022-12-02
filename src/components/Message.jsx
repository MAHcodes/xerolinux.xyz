import { useQuery, gql } from "@apollo/client";
import styled, { keyframes } from "styled-components";

const MESSAGE_QUERY = gql`
  query Message {
    messages {
      message
    }
  }
`;

const Message = () => {
  const { data, loading, error } = useQuery(MESSAGE_QUERY);
  const msg = data?.messages[0]?.message;

  return (
    <Section className="container">
      <TextWrapper>
        <P>{loading ? "Loading..." : error ? error.message : msg}</P>
      </TextWrapper>
    </Section>
  );
};

const Section = styled.section`
  padding-block: var(--padding-section);
`;

const TextWrapper = styled.div`
  background-color: rgb(var(--fg));
  border-radius: var(--border-radius);
  overflow:hidden;
`;

const scroll = keyframes`
  to {
    transform: translateX(-100%);
  }
`;


const P = styled.p`
  color: rgb(var(--bg));
  padding-block: .5rem;
  font-size: var(--fz-5);
  transform: translateX(100%);
  white-space: nowrap;
  width: max-content;
  animation: ${scroll} linear 20s infinite;

  &:active,
  &:hover {
    animation-play-state: paused;
  }

  @media (min-width: 800px) {
    animation: ${scroll} linear 30s infinite;
  }

`;

export default Message;
