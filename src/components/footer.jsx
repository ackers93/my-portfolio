import React from "react";

function Footer() {
  return (
    <div className="footer">
      <footer>
        <div id="contact">
          <a href="https://github.com/ackers93">
            <i
              class="fab fa-github"
              style={{ color: "black", fontSize: "2rem" }}
            ></i>
          </a>
          <a href="https://www.linkedin.com/in/andrew-ackerman-89743018b/">
            <i
              class="fab fa-linkedin"
              style={{ color: "black", fontSize: "2rem" }}
            ></i>
          </a>
          <a href="https://twitter.com/ackers93">
            <i
              class="fab fa-twitter-square"
              style={{ color: "black", fontSize: "2rem" }}
            ></i>
          </a>
          <a href="https://dev.to/ackers93">
            <i
              class="fab fa-dev"
              style={{ color: "black", fontSize: "2rem" }}
            ></i>
          </a>
        </div>
      </footer>
    </div>
  );
}

export default Footer;
