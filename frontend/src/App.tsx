import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./App.css";
import { AppBar, Footer } from "./components";
import Landing from "./pages/Landing";

function App() {
  return (
    <div className="App">
      <AppBar />
      <Landing />
      <Footer />
    </div>
  );
}

export default App;
