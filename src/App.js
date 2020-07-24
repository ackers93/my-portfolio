import React from "react";
import "./styles/style.css";
import Nav from "./components/nav";
import Title from "./components/title";
// import Overview from "./components/overview";
import Footer from "./components/footer";
import Blog from "./components/blog";
import Projects from "./components/projects";
// import Resume from "./components/resume";
import AboutMe from "./components/aboutMe";

function App() {
  return (
    <div className="App">
      <Nav />
      <div className="main-content">
        <Title />
        <AboutMe />
        <Projects />
        <Blog />
        {/* <Resume /> */}
        <Footer />
      </div>
    </div>
  );
}

export default App;
