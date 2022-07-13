import AnnouncementsContent from "../content/AnnouncementsContent.md";
import { useState, useEffect } from "react";
import { marked } from "marked";

const AnnouncementsPopUP = () => {
  const [content, setContent] = useState("");
  useEffect(() => {
    fetch(AnnouncementsContent)
      .then((response) => response.text())
      .then((content) => {
        setContent(content);
      });
  }, []);

  return <div dangerouslySetInnerHTML={{ __html: marked.parse(content)}}></div>
};

export default AnnouncementsPopUP;
