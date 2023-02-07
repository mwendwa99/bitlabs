import React from "react";
import "./App.css";
import { AppBar, Container } from "./components";

function App() {
  return (
    <div className="App">
      <AppBar />
      <Container>
        <div className="App-header">
          <h1>React + TypeScript + Material UI</h1>
        </div>
      </Container>
      <div></div>
    </div>
  );
}

export default App;
