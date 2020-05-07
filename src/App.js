import React from "react";
import "./styles/style.css";
import Nav from "./components/nav";
import Title from "./components/title";
import Overview from "./components/overview";
import Footer from "./components/footer";

function App() {
  return (
    <div className="App">
      <Nav />
      <div className="main-content">
        <Title />
        <Overview />
        <Footer />
      </div>
    </div>
  );
}

export default App;
