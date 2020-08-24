import React from "react";

function Footer() {
  return (
    <div className="footer">
      <footer>
        <h2>Contact me at any of these places:</h2>
        <div id="contact">
          <a href="https://github.com/ackers93">
            <i
              className="fab fa-github"
              style={{ color: "white", fontSize: "3rem", margin: "2rem" }}
            ></i>
          </a>
          <a href="https://www.linkedin.com/in/andrew-ackerman-89743018b/">
            <i
              className="fab fa-linkedin"
              style={{ color: "white", fontSize: "3rem", margin: "2rem" }}
            ></i>
          </a>
          <a href="https://twitter.com/ackers93">
            <i
              className="fab fa-twitter-square"
              style={{ color: "white", fontSize: "3rem", margin: "2rem" }}
            ></i>
          </a>
          <a href="https://dev.to/ackers93">
            <i
              className="fab fa-dev"
              style={{ color: "white", fontSize: "3rem", margin: "2rem" }}
            ></i>
          </a>
        </div>
      </footer>
    </div>
  );
}

export default Footer;
