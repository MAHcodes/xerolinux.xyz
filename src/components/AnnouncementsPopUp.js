import { html } from "../content/AnnouncementsContent";

const AnnouncementsPopUP = () => {
  const createMarkup = () => {
    return { __html: html };
  };

  return <div dangerouslySetInnerHTML={createMarkup()}></div>;
};

export default AnnouncementsPopUP;
