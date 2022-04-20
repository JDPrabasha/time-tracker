import "./Project.scss";
import { default as Modal } from "../Modal/Modal";
import { React, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

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
      <AnimatePresence
        // Disable any initial animations on children that
        // are present when the component is first rendered
        initial={false}
        // Only render one component at a time.
        // The exiting component will finish its exit
        // animation before entering component is rendered
        exitBeforeEnter={true}
        // Fires when all exiting nodes have completed animating out
        onExitComplete={() => null}
      >
        {isOpen && <Modal setIsOpen={setIsOpen} id={props.id} />}
      </AnimatePresence>
    </div>
  );
}

Project.defaultProps = {
  name: "Default",
};

export default Project;
