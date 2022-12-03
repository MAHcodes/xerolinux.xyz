import styled from "styled-components";
import Box from "./Box";
import SocialLinks from "./SocialLinks";

const Footer = () => {
  return (
    <Div>
      <Box noBR>
        <Container className="container">
          <p>
            Made with ❤️ by{" "}
            <a
              href="https://github.com/MAHcodes"
              target="_blank"
              rel="noreferrer"
            >
              MAH.codes
            </a>
          </p>
          <p>XeroLinux all rights reserved &copy; {new Date().getFullYear()}</p>
          <SocialLinks />
        </Container>
      </Box>
    </Div>
  );
};

const Div = styled.div`
  color: rgb(var(--low));
`;

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  @media (max-width: 1100px) {
    flex-direction: column;
  }

  & p {
    padding-block: 0.75rem;
  }

  & a {
    text-decoration: underline;
  }
`;

export default Footer;
