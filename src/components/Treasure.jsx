import { useState, useEffect } from "react";
import { marked } from "marked";
import TreasureContent from "../content/TreasureContent.md";
import Img from "./Img";

const Changelog = () => {
  const [content, setContent] = useState("");

  useEffect(() => {
    fetch(TreasureContent)
      .then((response) => response.text())
      .then((content) => {
        setContent(content);
      });
  }, []);

  return <div >
    <div dangerouslySetInnerHTML={{ __html: marked.parse(content) }} />
    <Img src="https://i.imgur.com/4B6IwBb.jpeg" alt="XeroG" maxWidth="70%" />
  </div>
};

export default Changelog;
