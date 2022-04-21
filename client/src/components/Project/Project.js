import "./Project.scss";
import { default as Modal } from "../Modal/Modal";
import { default as ProjectModal } from "../Modal/ProjectModal/ProjectModal";
import { React, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { RiAddLine } from "react-icons/ri";

function Project(props) {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="project">
      <div className="row">
        <p className="project__title">{props.name}</p>

        <RiAddLine
          style={{ marginBottom: "-3px" }}
          className="project__add"
          onClick={() => setIsOpen(true)}
        />
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
