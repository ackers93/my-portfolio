import React from "react";
import Blog from "./blog";
import Projects from "./projects";
function Overview() {
  return (
    <div className="overview">
      <div className="about-me">
        <h2>About Me</h2>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam
          laboriosam odit adipisci tempore eaque facilis harum, iure delectus
          vel non libero dolore fuga quaerat, voluptatibus quos porro in,
          tempora neque.
        </p>
      </div>
      <Projects />
      <Blog />
    </div>
  );
}

export default Overview;
