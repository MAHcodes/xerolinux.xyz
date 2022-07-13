import { useState, useEffect } from "react";
import { marked } from "marked";
import ChangelogContent from "../content/ChangelogContent.md";

const Changelog = () => {
  const [content, setContent] = useState("");
  useEffect(() => {
    fetch(ChangelogContent)
      .then((response) => response.text())
      .then((content) => {
        setContent(content);
      });
  }, []);

  return <div dangerouslySetInnerHTML={{ __html: marked.parse(content)}}></div>
};

export default Changelog;
