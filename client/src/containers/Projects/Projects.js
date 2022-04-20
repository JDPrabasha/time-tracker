import React from "react";
import { useEffect, useState } from "react";
import "./Projects.scss";
import { Project } from "../../components";
import { HiOutlineClipboardList } from "react-icons/hi";

function Projects() {
  const axios = require("axios");
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:3000/project")
      .then((response) => setProjects(response.data));
  }, []);

  console.log(projects);

  return (
    <div className="projects">
      <div className="projects__container">
        <div className="row projects__header">
          <HiOutlineClipboardList className="clipboard" />

          <h1 className="projects__title">Quick add</h1>
        </div>
        {projects.map((project) => (
          <Project name={project.name} key={project.id} id={project.id} />
        ))}
      </div>
    </div>
  );
}

export default Projects;
