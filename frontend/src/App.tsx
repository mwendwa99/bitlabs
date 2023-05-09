import { Route, Routes } from "react-router-dom";
import "./App.css";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
import Landing from "./pages/Landing";

function App() {
  return (
    <div className="App">
      <NavBar />
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route
          path="*"
          element={
            //  return a 404 page
            <div>
              <h1>404</h1>
            </div>
          }
        />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
