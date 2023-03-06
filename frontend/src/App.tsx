import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./App.css";
import { AppBar, Footer } from "./components";
import Landing from "./pages/Home/Landing";

function App() {
  return (
    <div className="App">
      <AppBar />
      <Footer />
      <Landing />
    </div>
  );
}

export default App;
