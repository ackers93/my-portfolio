import React from "react";
import ProjectCard from "./projectCard";
import ProjectData from "../data/projects.json";

function Projects(props) {
  return (
    <div className="projects">
      <h1>Projects</h1>
      <div className="project-list">
        {ProjectData.map((data) => {
          return <ProjectCard data={data} />;
        })}
      </div>
    </div>
  );
}

export default Projects;
