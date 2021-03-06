import React, { useState } from "react";

function MobileNav() {
  const [open, setOpen] = useState(true);

  let menu;
  if (open) {
    menu = (
      <div className="mobile-nav">
        <button
          style={{
            color: "#030027",
            fontSize: "2.5rem",
            border: "none",
            backgroundColor: "white",
            margin: "1rem",
          }}
          onClick={() => {
            setOpen(false);
          }}
        >
          <i className="fas fa-bars"></i>
        </button>
      </div>
    );
  } else {
    menu = (
      <div className="mobile-nav">
        <nav>
          <button
            style={{
              color: "#030027",
              fontSize: "2.5rem",
              border: "none",
              backgroundColor: "white",
              margin: "1rem",
            }}
            onClick={() => {
              setOpen(true);
            }}
          >
            <i className="fas fa-bars"></i>
          </button>
          <a href="#about">
            <div className="nav-button">
              <i
                className="fas fa-male"
                style={{ color: "#030027", fontSize: "2rem" }}
              ></i>
              <h3>About</h3>
            </div>
          </a>
          <span className="divider"></span>
          <a href="#projects">
            <div className="nav-button">
              <i
                className="fas fa-project-diagram"
                style={{ color: "#030027", fontSize: "2rem" }}
              ></i>
              <h3> My Work</h3>
            </div>
          </a>
          <span className="divider"></span>
          <a href="#blog">
            <div className="nav-button">
              <i
                className="fab fa-dev"
                style={{ color: "#030027", fontSize: "2rem" }}
              ></i>
              <h3>Blog</h3>
            </div>
          </a>
          <span className="divider"></span>
          <a href="#contact">
            <div className="nav-button">
              <i
                className="fas fa-address-book"
                style={{ color: "#030027", fontSize: "2rem" }}
              ></i>
              <h3>Contact Me</h3>
            </div>
          </a>
          <span className="divider"></span>
          <a href="https://resume.creddle.io/resume/9arzwzj2asf">
            <div className="nav-button">
              <i
                className="fas fa-file"
                style={{ color: "#030027", fontSize: "2rem" }}
              ></i>
              <h3>Resume</h3>
            </div>
          </a>
        </nav>
      </div>
    );
  }

  return menu;
}

export default MobileNav;
