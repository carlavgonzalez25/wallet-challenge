import "./App.css";
import styled from "styled-components";
import Header from "./Components/Header";
import Sidebar from "./Components/Sidebar";
import Panel from "./Pages/Panel";
import { useEffect } from "react";

function App() {
  return (
    <Container className="App">
      <Header />
      <Content>
        <Sidebar />
        <Panel />
      </Content>
    </Container>
  );
}

export default App;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
`;

const Content = styled.div`
  display: flex;
  height: 95%;
`;
