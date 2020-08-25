import React from "react";
import MobileSkills from "./mobileSkills";

import profilepic from "../images/profilepic.png";

function AboutMe() {
  return (
    <div id="about-me">
      <h2>About Me</h2>
      <img src={profilepic} alt="Andrew Ackerman Kayaking in New Zealand" />
      <p>
        Hi I'm Andrew, I'm a full-stack web developer with a particular interest
        in front-end development. 💻 My specialties include Javascript, React,
        Node, Express and Ruby on Rails.
      </p>
      <p>
        I've spent most of my professional life working in Construction, 🔨
        which I believe has helped me create a strong work ethic and ability to
        work with a wide range of tasks. I also used to be in charge of training
        apprentices which helped create a passion for passing my skills on to
        others.
      </p>
      <p>
        Aside from tech, my passions include hiking, 🥾 traveling, 🌏 reading
        non-fiction 📖 and cooking. 🍳
      </p>
      <MobileSkills />
    </div>
  );
}

export default AboutMe;
