import React from "react";
import { useEffect, useState } from "react";
import "./Projects.scss";
import { Project, ProjectModal } from "../../components";
import { HiOutlineClipboardList } from "react-icons/hi";
import { AnimatePresence } from "framer-motion";
import { getProjects } from "../../services/api";

function Projects() {
  const [projects, setProjects] = useState([]);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    getProjects().then((response) => setProjects(response.data));
  }, [projects]);

  console.log(projects);

  return (
    <div className="projects w-3/12 border border-blue-300 p-3 rounded-xl">
      <div className="projects__container">
        <div className="row projects__header">
          <HiOutlineClipboardList className="clipboard text-2xl" />

          <h1 className="projects__title text-2xl font-bold ">Quick Add</h1>
        </div>
        <h5
          className="projects__add bg-blue-400 font-semibold px-2 py-1 my-4 rounded-lg w-fit"
          onClick={() => setIsOpen(true)}
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
