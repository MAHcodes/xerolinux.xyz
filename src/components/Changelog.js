import { html } from "../content/ChangelogContent";

const Changelog = () => {
  const createMarkup = () => {
    return { __html: html };
  };

  return <div dangerouslySetInnerHTML={createMarkup()}></div>;
};

export default Changelog;
