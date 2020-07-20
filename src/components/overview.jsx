import React from "react";
import Blog from "./blog";
import Projects from "./projects";
import Resume from "./resume";
import AboutMe from "./aboutMe";
function Overview() {
  return (
    <div className="overview">
      <AboutMe />
      <Projects />
      <Blog />
      <Resume />
    </div>
  );
}

export default Overview;
