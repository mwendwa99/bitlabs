import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./App.css";
import { AppBar, Button } from "./components";
import Landing from "./pages/Home/Landing";
import Contact from "./pages/Contact";

function App() {
  return (
    <div className="App">
      <AppBar />
      <Landing />
      <Contact />
    </div>
  );
}

export default App;
