import React from "react";
import { useEffect, useState } from "react";
import { Project } from "../../components";
import { HiOutlineClipboardList } from "react-icons/hi";

import { getProjects } from "../../services/api";
import { Modal } from "@mantine/core";
import { ColorInput } from "@mantine/core";
import { addProject } from "../../services/api";

function Projects() {
  const [projects, setProjects] = useState([]);
  const [isOpen, setIsOpen] = useState(false);
  const [opened, setOpened] = useState(false);
  const [value, setValue] = useState("");
  const [name, setName] = useState("");

  const handleSubmit = () => {
    addProject({ name: name, color: value }).then(function (response) {
      console.log(response);
      setOpened(false);
    });
  };

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
            name="name"
            class="form-input text-sm rounded"
            onChange={(event) => setName(event.target.value)}
          />
        </div>
        <label className="text-xs ">Project Color</label>
        <ColorInput className="mb-4 mt-2" value={value} onChange={setValue} />

        <div className="buttons flex justify-center gap-6 mt-4">
          <a
            onClick={handleSubmit}
            className="text-sm bg-blue-500 text-white px-3 py-2 cursor-pointer hover:bg-blue-300 rounded-sm"
          >
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
        <div className="flex gap-3 items-center projects__header">
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
      </div>
    </div>
  );
}

export default Projects;
