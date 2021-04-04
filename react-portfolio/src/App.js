import React from "react";
import "./App.css";
import AboutMe from "./components/Aboutme";
import FooterPage from "./components/Footer";
import Home from "./components/Home";
import NavbarPage from "./components/Navbar";
import Portfolio from "./components/Portfoilio";

function App() {
  return (
    <div className="App">
      <Home />
      <FooterPage />
      <NavbarPage />
      <AboutMe />
      <Portfolio />
    </div>
  );
}

export default App;
