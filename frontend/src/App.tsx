import React from "react";
import "./App.css";
import { Grid, Typography } from "@mui/material";
import { AppBar, Button } from "./components";
import Landing from "./pages/Home/Landing";
import man from "./assets/man.svg";

function App() {
  return (
    <div className="App">
      <AppBar />
      <Landing />
    </div>
  );
}

export default App;
