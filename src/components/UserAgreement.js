import { html } from "../content/UserAgreementContent";

const UserAgreement = () => {
  const createMarkup = () => {
    return { __html: html };
  };

  return <div dangerouslySetInnerHTML={createMarkup()}></div>;
};

export default UserAgreement;
