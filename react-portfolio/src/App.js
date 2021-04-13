import React, { Component, Fragment } from "react";
// import "./App.css";
// import AboutMe from "./components/Aboutme";
import FooterPage from "./components/Footer";
import Home from "./components/Home";
// import NavbarPage from "./components/Navbar";
// import Wrapper from "./components/Wrapper";
import Title from "./components/Title";
// import Portfolio from "./components/Portfolio";
import Project from "./Project";
import "./App.css";
import ProjectItem from "./components/ProjectItem";
class App extends Component {
  state = {
    Project,
  };

  render() {
    console.log(this.state);
    return (
      // <Wrapper>
      <Fragment>
        {/* <NavbarPage /> */}
        <Home />
        {/* <AboutMe /> */}
        {/* <Title>My Portfolio</Title>
        {this.state.Project.map((Projects) => (
          // <Portfolio
          //   id={Projects.id}
          //   key={Projects.id}
          //   name={Projects.name}
          //   image={Projects.image}
          //   decription={Projects.decription}
          //   linkgit={Projects.linkgit}
          //   linkapp={Projects.linkapp}
          //   languages={Projects.languages}
          // />
          <ProjectItem title={Projects.name} />
        ))} */}
        <FooterPage />
        {/* </Wrapper> */}
      </Fragment>
    );
  }
}
export default App;
