import React from "react";
import Skills from "./skills";

function Nav() {
  return (
    <div className="nav-div">
      <nav>
        <i
          class="fas fa-glasses"
          style={{ color: "#030027", fontSize: "3rem" }}
        ></i>
        <a href=".about">
          <div className="nav-button">
            <i
              class="fas fa-male"
              style={{ color: "#030027", fontSize: "2rem" }}
            ></i>
            <h3>About</h3>
          </div>
        </a>
        <span className="divider"></span>
        <a href=".projects">
          <div className="nav-button">
            <i
              class="fas fa-project-diagram"
              style={{ color: "#030027", fontSize: "2rem" }}
            ></i>
            <h3> My Work</h3>
          </div>
        </a>
        <span className="divider"></span>
        <a href=".blog">
          <div className="nav-button">
            <i
              className="fab fa-dev"
              style={{ color: "#030027", fontSize: "2rem" }}
            ></i>
            <h3>Blog</h3>
          </div>
        </a>
        <span className="divider"></span>
        <a href=".contact">
          <div className="nav-button">
            <i
              class="fas fa-address-book"
              style={{ color: "#030027", fontSize: "2rem" }}
            ></i>
            <h3>Contact Me</h3>
          </div>
        </a>
        <span className="divider"></span>
        <a href="">
          <div className="nav-button">
            <i
              class="fas fa-file"
              style={{ color: "#030027", fontSize: "2rem" }}
            ></i>
            <h3>Resume</h3>
          </div>
        </a>
        <Skills />
      </nav>
    </div>
  );
}

export default Nav;
