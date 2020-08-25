import React, { useState } from "react";
import ReactCardFlip from "react-card-flip";

// Images

const ProjectCard = ({ data }) => {
  const [isFlipped, setIsFlipped] = useState(false);

  const handleFlip = (event) => {
    event.preventDefault();
    setIsFlipped(!isFlipped);
  };

  return (
    <ReactCardFlip isFlipped={isFlipped} flipDirection="vertical">
      <div className="card-front">
        <h2>{data.name}</h2>
        <div className="content">
          <img
            src={require(`../images/${data.image}`)}
            alt="Screenshot of website"
          ></img>
          <div className="details">
            <p>{data.description}</p>
            <button className="more-info" onClick={handleFlip}>
              Click for more information
            </button>
          </div>
        </div>
      </div>
      <div onMouseLeave={handleFlip} className="card-back">
        <div className="content">
          <h1>Technology Used</h1>
          <div className="project">
            <div className="stack">
              <div className="front-end-stack">
                <h2>Front-end</h2>
                <ul>
                  {data.tech_stack.frontend.map((res) => {
                    return <li>{res}</li>;
                  })}
                </ul>
              </div>
              <div className="back-end-stack">
                <h2>Back-end</h2>
                <ul>
                  {data.tech_stack.backend.map((res) => {
                    return <li>{res}</li>;
                  })}
                </ul>
              </div>
            </div>
          </div>
          <div className="project-info">
            <h2>Details</h2>
            <hr
              style={{ width: "198px", color: "#197278", marginLeft: "50px" }}
            />
            <ul>
              {data.details.map((res) => {
                return <li>{res}</li>;
              })}
            </ul>
          </div>
          <div className="card-back-links">
            <a href={data.repository} target="_blank" rel="noopener noreferrer">
              View Code
            </a>
            <a href={data.site_link} target="_blank" rel="noopener noreferrer">
              View Deploy
            </a>
          </div>
        </div>
      </div>
    </ReactCardFlip>
  );
};

export default ProjectCard;
