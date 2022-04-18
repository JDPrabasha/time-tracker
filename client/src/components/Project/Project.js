import "./Project.scss";
import { default as Modal } from "../Modal/Modal";
import { React, useState } from "react";

function Project(props) {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="project">
      <div className="row">
        <h1 className="project__title">{props.name}</h1>
        <a className="add" onClick={() => setIsOpen(true)}>
          +
        </a>
      </div>
      {isOpen && <Modal setIsOpen={setIsOpen} id={props.id} />}
    </div>
  );
}

Project.defaultProps = {
  name: "Default",
};

export default Project;
