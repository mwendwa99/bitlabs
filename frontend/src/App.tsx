import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./App.css";
import { Grid, Typography } from "@mui/material";
import { AppBar, Button } from "./components";
import Landing from "./pages/Home/Landing";
import man from "./assets/man.svg";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Landing />,
  },
]);

function App() {
  return (
    <div className="App">
      <AppBar />
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
