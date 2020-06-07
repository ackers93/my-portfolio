import React from "react";

import ProjectData from "../data/projects.json";

function Projects(props) {
  return (
    <div className="projects">
      <h1>Projects</h1>
      <div className="project-list">
        <div className="project">
          <h4 className="project-title">Kansha</h4>
          <h6 className="description">
            A Workplace Recognition app for the purpose of showing appreciation
            within an organization and their teams
          </h6>
          <div className="tech-stack">
            React || Redux || NodeJS || PostgreSQL
          </div>
          <ul className="details">
            <li>
              Worked with a nine person team to produce Kansha over a two month
              period.
            </li>
            <li>
              Created an Admin Dashboard to closely follow user engagement and
              discover which employees are the most appreciated.
            </li>
            <li>
              Added the ability to create Teams for easier use between Team
              Members.
            </li>
            <li>
              Clean on-boarding experience for small and large organizations.
            </li>
          </ul>
          <div className="gh-links">
            <a href="https://github.com/Lambda-School-Labs/kansha-fe">
              Front-End Repo
            </a>
            <a href="https://github.com/Lambda-School-Labs/kansha-be">
              Back-End Repo
            </a>
          </div>
        </div>
        <div className="project">
          <h4 className="project-title">Capture - Expat Portfolio</h4>
          https://expatjournalapp.netlify.com/l…
          <h6 className="description">
            Photo Sharing site for travelers to display their favorite shots and
            memories.
          </h6>
          <div className="tech-stack">
            React || Redux || NodeJS || PostgreSQL || MaterialUI
          </div>
          <ul className="details">
            <li>Built with a team of eight over a one week period.</li>
            <li>
              I was part of a two person team for back-end work, and solely
              responsible for all back-end testing.
            </li>
            <li>
              I was also responsible for creating all documentation for the
              NodeJS endpoints.
            </li>
          </ul>
          <div className="gh-links">
            <a href="https://github.com/bw-exPatJournal/Front-End">
              Front-End Repo
            </a>
            <a href="https://github.com/bw-exPatJournal/Back-End">
              Back-End Repo
            </a>
          </div>
        </div>
        <div className="project">
          <h4 className="project-title">Big Brand Welcome Screen</h4>
          <h6 className="description">
            A building directory displaying a clock, calendar and weather
            updates for Big Brand Tire's headquarters located in Moorpark, CA.
          </h6>
          <div className="tech-stack">React || Sass || WeatherbitAPI</div>
          <ul className="details">
            <li>
              Side project created with some help from another junior developer
              over the space of two weeks.
            </li>
            <li>
              This was important for learning how to use information brought in
              from an external API to dynamically render SVG's depending on the
              weather.
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Projects;
