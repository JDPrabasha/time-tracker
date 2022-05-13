import "./Project.scss";
import { default as LogModal } from "../modals/LogModal/LogModal";
import { React, useState } from "react";
import { AnimatePresence } from "framer-motion";
import { RiAddLine } from "react-icons/ri";
import { Modal, Input, Button } from "@mantine/core";
import { TimeInput } from "@mantine/dates";
import { BiTimeFive } from "react-icons/bi";

function Project(props) {
  const [isOpen, setIsOpen] = useState(false);
  const [opened, setOpened] = useState(false);
  return (
    <div className="project">
      <Modal
        centered
        opened={opened}
        onClose={() => setOpened(false)}
        title="Add Log Entry"
      >
        <div className="flex gap-12">
          <TimeInput
            label="Start time"
            placeholder="Pick time"
            icon={<BiTimeFive size={16} />}
            defaultValue={new Date()}
            className="flex-1"
          />
          <TimeInput
            label="End time"
            placeholder="Pick time"
            icon={<BiTimeFive size={16} />}
            defaultValue={new Date()}
            className="ml-auto flex-1"
          />
        </div>
        <Input placeholder="Add task description" className="mt-4" />
        <div className="buttons flex justify-center gap-6 mt-4">
          <a className="text-sm bg-blue-500 text-white px-3 py-2 cursor-pointer hover:bg-blue-300 rounded-sm">
            Add Entry
          </a>
          <a className="text-sm bg-red-500 text-white px-3 py-2 cursor-pointer rounded-sm hover:bg-red-300 ">
            Cancel
          </a>
        </div>
      </Modal>

      <div className="row">
        <p className="project__title">{props.name}</p>

        <RiAddLine
          style={{ marginBottom: "-3px" }}
          className="project__add"
          onClick={() => setOpened(true)}
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
