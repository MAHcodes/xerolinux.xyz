import { useState, useEffect } from "react";
import { marked } from "marked";
import TreasureContent from "../content/TreasureContent.md";

const Changelog = () => {
  const [content, setContent] = useState("");

  useEffect(() => {
    fetch(TreasureContent)
      .then((response) => response.text())
      .then((content) => {
        setContent(content);
      });
  }, []);

  return <div dangerouslySetInnerHTML={{ __html: marked.parse(content) }}></div>
};

export default Changelog;
