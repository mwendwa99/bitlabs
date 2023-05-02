import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./App.css";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
import Landing from "./pages/Landing";

function App() {
  return (
    <div className="App">
      <NavBar />
      <Landing />
      <Footer />
    </div>
  );
}

export default App;
