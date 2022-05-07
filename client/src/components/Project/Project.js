import "./Project.scss";
import { default as LogModal } from "../modals/LogModal/LogModal";
import { React, useState } from "react";
import { AnimatePresence } from "framer-motion";
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
        initial={false}
        exitBeforeEnter={true}
        onExitComplete={() => null}
      >
        {isOpen && <LogModal setIsOpen={setIsOpen} id={props.id} />}
      </AnimatePresence>
    </div>
  );
}

Project.defaultProps = {
  name: "Default",
};

export default Project;
