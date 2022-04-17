import React from "react";
import { useEffect, useState } from "react";
import "./Projects.scss";
import { Project } from "../../components";

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
    <div>
      <h1>Quick add</h1>
      {projects.map((project) => (
        <Project name={project.name} key={project.id} />
      ))}
    </div>
  );
}

export default Projects;
