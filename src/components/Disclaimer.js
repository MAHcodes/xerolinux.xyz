import { html } from "../content/DisclaimerContent";

const Disclaimer = () => {
  const createMarkup = () => {
    return { __html: html };
  };

  return <div dangerouslySetInnerHTML={createMarkup()}></div>;
};

export default Disclaimer;
