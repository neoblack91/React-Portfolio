import React, { Component } from "react";
import "./App.css";
// import AboutMe from "./components/Aboutme";
import FooterPage from "./components/Footer";
import Home from "./components/Home";
import NavbarPage from "./components/Navbar";
import Wrapper from "./components/Wrapper";
import Title from "./components/Title";
import Portfolio from "./components/Portfolio";

// function App() {
//   return (
//     <div className="App">
//       {/* <Home /> */}

//       <NavbarPage />
//       {/* <AboutMe />
//       <Portfolio /> */}
//       <FooterPage />
//     </div>
//   );
// }
class App extends Component {
  state = {
    Portfolio,
    FooterPage,
    Home,
    NavbarPage,
  };

  render() {
    return (
      <Wrapper>
        <NavbarPage />
        {/* <Home /> */}
        <Title>My Portfolio</Title>
        {this.Portfolio.state.map((Project) => (
          <Portfolio
            id={Project.id}
            key={Project.id}
            name={Project.name}
            image={Project.image}
            occupation={Project.occupation}
            location={Project.location}
          />
        ))}
        <FooterPage />
      </Wrapper>
    );
  }
}
export default App;
