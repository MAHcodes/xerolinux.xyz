import styled from "styled-components";

const Notes = () => {
  return <Iframe src="https://xerolinux.xyz/notes/">
  <p>Your browser does not support iframes.</p>
  <a href="https://xerolinux.xyz/notes/" target="_blank" rel="noreferrer noopener">Open site in new tab</a>
  </Iframe>
};

const Iframe = styled.iframe`
  height: 98%;
  width: 100%;
  border: var(--border) solid rgb(var(--fg));
  border-radius: var(--border-radius);
  overflow: hidden;
`;

export default Notes;
