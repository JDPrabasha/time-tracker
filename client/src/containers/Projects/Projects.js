import React from "react";
import { useEffect, useState } from "react";
import { Project, ProjectModal } from "../../components";
import { HiOutlineClipboardList } from "react-icons/hi";
import { AnimatePresence } from "framer-motion";
import { getProjects } from "../../services/api";
import { Modal } from "@mantine/core";
import { ColorInput } from "@mantine/core";

function Projects() {
  const [projects, setProjects] = useState([]);
  const [isOpen, setIsOpen] = useState(false);
  const [opened, setOpened] = useState(false);
  const [value, setValue] = useState("");

  useEffect(() => {
    getProjects().then((response) => setProjects(response.data));
  }, [projects]);

  return (
    <div className="projects w-3/12 border  p-3 rounded-xl shadow-sm">
      <Modal
        centered
        opened={opened}
        onClose={() => setOpened(false)}
        title="Add New Project"
      >
        <div className="flex flex-col gap-2 mt-4 mb-2">
          <label className="text-xs">Project</label>
          <input
            placeholder="Add project name"
            name="description"
            class="form-input text-sm rounded"
          />
        </div>
        <label className="text-xs ">Project Color</label>
        <ColorInput className="mb-4 mt-2" value={value} onChange={setValue} />

        <div className="buttons flex justify-center gap-6 mt-4">
          <a className="text-sm bg-blue-500 text-white px-3 py-2 cursor-pointer hover:bg-blue-300 rounded-sm">
            Add Project
          </a>
          <a
            onClick={() => setOpened(false)}
            className="text-sm bg-red-500 text-white px-3 py-2 cursor-pointer rounded-sm hover:bg-red-300 "
          >
            Cancel
          </a>
        </div>
      </Modal>
      <div className="projects__container">
        <div className="row projects__header">
          <HiOutlineClipboardList className="clipboard text-2xl" />

          <h1 className="projects__title text-2xl font-bold ">Quick Add</h1>
        </div>
        <h5
          className="projects__add cursor-pointer hover:bg-blue-200 transition-all ease-linear bg-blue-400 font-semibold px-2 py-1 my-4 rounded-lg w-fit"
          onClick={() => setOpened(true)}
        >
          CREATE PROJECT
        </h5>
        {projects.map((project) => (
          <Project name={project.name} key={project.id} id={project.id} />
        ))}
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
          {isOpen && <ProjectModal setIsOpen={setIsOpen} />}
        </AnimatePresence>
      </div>
    </div>
  );
}

export default Projects;
