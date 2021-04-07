import React, { Component } from "react";
import "./App.css";
import AboutMe from "./components/Aboutme";
import FooterPage from "./components/Footer";
import Home from "./components/Home";
import NavbarPage from "./components/Navbar";
import Wrapper from "./components/Wrapper";
import Title from "./components/Title";
import Portfolio from "./components/Portfolio";
import Project from "./Project.json";

class App extends Component {
  state = {
    Project,
  };

  render() {
    console.log(this.state);
    return (
      <Wrapper>
        <NavbarPage />
        <Home />
        <AboutMe />
        <Title>My Portfolio</Title>
        {this.state.Project.map((Projects) => (
          <Portfolio
            id={Projects.id}
            key={Projects.id}
            name={Projects.name}
            image={Projects.image}
            decription={Projects.decription}
            linkgit={Projects.linkgit}
            linkapp={Projects.linkapp}
            languages={Projects.languages}
          />
        ))}
        <FooterPage />
      </Wrapper>
    );
  }
}
export default App;
