import React from "react";
import "./Project.scss";

function Project(props) {
  return (
    <div className="project">
      <div className="row">
        <h1 className="project__title">{props.name}</h1>
        <a className="add">+</a>
      </div>
    </div>
  );
}

Project.defaultProps = {
  name: "Default",
};

export default Project;
