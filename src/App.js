import Announcements from "./components/Announcements";
import Header from "./components/Header";
import styled from "styled-components";

function App() {
  return (
    <div className="App">
      <Wrapper>
        <Announcements />
        <Header />
      </Wrapper>
    </div>
  );
}

const Wrapper = styled.div`
  position: sticky;
  inset: 0 0 auto;
`;

export default App;
