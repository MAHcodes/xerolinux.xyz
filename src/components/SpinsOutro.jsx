import styled from "styled-components";
import Box from "./Box";
import { marked } from "marked";
import { useState, useEffect } from "react";
import SpinsOutro from "../content/SpinsOutro.md";

const SpinsReasons= () => {

    const [outroContent, setOutroContent] = useState("");

    useEffect(() => {
        fetch(SpinsOutro)
          .then((response) => response.text())
          .then((outroContent) => {
            setOutroContent(outroContent);
          });
      }, []);

    return (
        <SpinsOutroSection>
            <div className="container">
                <Box>
                    <P className="container markdown" dangerouslySetInnerHTML={{ __html: marked.parse(outroContent) }} />
                </Box>
            </div>
        </SpinsOutroSection>
    );

};

const SpinsOutroSection = styled.div`
  flex: 0.5;
  padding-block: var(--padding-section);
`;

const P = styled.p`
  color: rgb(var(--white));
  font-size: var(--fz-5);
  margin-block: 1em;
  & > a {
    text-decoration: underline;
    font-weight: bold;
  }
`;

export default SpinsReasons;