import React, { useState } from "react";
import Skills from "./skills";

function MobileNav() {
  const [open, setOpen] = useState(open);

  let menu;
  if (open) {
    menu = (
      <div className="mobile-nav">
        <div>hello</div>
      </div>
    );
  } else {
    menu = (
      <div className="mobile-nav">
        <nav>
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
        </nav>
      </div>
    );
  }

  return menu;
}

export default MobileNav;
