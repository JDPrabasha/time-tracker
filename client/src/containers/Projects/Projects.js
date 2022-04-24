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
    <div className="projects">
      <div className="projects__container">
        <div className="row projects__header">
          <HiOutlineClipboardList className="clipboard" />

          <h1 className="projects__title">Quick Add</h1>
        </div>
        <h5 className="projects__add" onClick={() => setIsOpen(true)}>
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
