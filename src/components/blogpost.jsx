import React from "react";

function Blogpost(props) {
  return (
    <div className="post">
      <a href={props.url}>
        <h4>{props.title}</h4>
        <p>{props.description}</p>
      </a>
    </div>
  );
}

export default Blogpost;
