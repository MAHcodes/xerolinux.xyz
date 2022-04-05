import styled from "styled-components";
import Button from "./Button";

const Announcements = () => {
  const announce = () => {
    console.log("POPUP");
  };

  return (
    <Div>
      <div className="container">
        <P>Major Project Announcements</P>
        <Button fz="var(--fz-6)" primary text="read more" action={announce} />
      </div>
    </Div>
  );
};

const Div = styled.div`
  background-color: rgb(var(--important));
  padding: 0.75rem;

  & .container {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: row;
    gap: 0.5em;
    text-align: center;
  }
`;

const P = styled.p`
  margin-inline-end: 1em;
  color: rgb(var(--white));
  font-size: var(--fz-5);
`;

export default Announcements;
