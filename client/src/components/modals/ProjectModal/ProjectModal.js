import { React, useState } from "react";
import "./ProjectModal.scss";
import { RiCloseLine } from "react-icons/ri";
import { addProject } from "../../../services/api";

function ProjectModal({ setIsOpen }) {
  const [projectValue, setprojectValue] = useState({
    name: "",
    color: "",
  });

  const handleChange = (event) => {
    setprojectValue({
      ...projectValue,
      [event.target.name]: event.target.value,
    });
    console.log(projectValue);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(projectValue);

    addProject({
      ...projectValue,
    })
      .then(function (response) {
        console.log(response);
        setIsOpen(false);
      })
      .catch(function (error) {
        console.log(error);
        setIsOpen(false);
      });
  };
  return (
    <div className="project__modal">
      <div className="project__modal__bg">
        <div className="project__modal__container">
          <RiCloseLine
            onClick={() => setIsOpen(false)}
            style={{ marginBottom: "-3px" }}
            className="project__modal__close"
          />
          <div>
            <h4 className="project__modal__title">Another One?</h4>
            <form className="form" onSubmit={handleSubmit}>
              <div class="field">
                <label className="project__modal__label">Project Title</label>
                <input
                  type="text"
                  placeholder="Eg: Flutter Project"
                  required
                  name="name"
                  onChange={handleChange}
                ></input>
              </div>
              <div class="field">
                <label className="project__modal__label">Tag Color</label>
                <input
                  placeholder="Eg: #ffffff"
                  type="text"
                  name="color"
                  required
                  onChange={handleChange}
                ></input>
              </div>
              <div className="button__container">
                <button className="project__modal__button" type="submit">
                  Add Project
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProjectModal;
