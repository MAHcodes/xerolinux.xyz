import styled from "styled-components";
import SocialLinks from "./SocialLinks";

const Footer = () => {
  return (
    <Div>
      <Container className="container">
        <p>
          Made with ❤️ by{" "}
          <a
            href="https://github.com/mhmdali102"
            target="_blank"
            rel="noreferrer"
          >
            Mhmd Ali Hsen
          </a>
        </p>
        <p>XeroLinux all rights reserved &copy; 2022</p>
        <SocialLinks />
      </Container>
    </Div>
  );
};

const Div = styled.div`
  background-color: rgb(var(--bg2));
  color: rgb(var(--low));
  padding-block: 0.75rem;
`;

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  @media (max-width: 1100px) {
    flex-direction: column;
  }

  & p {
    padding: 0.75rem;
  }

  & a {
    text-decoration: underline;
  }
`;

export default Footer;
