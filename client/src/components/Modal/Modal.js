import { React, useState } from "react";
import "./Modal.scss";
import { RiCloseLine } from "react-icons/ri";
import axios from "axios";
import { motion } from "framer-motion";

const dropIn = {
  hidden: {
    y: "-100vh",
    opacity: 0,
  },
  visible: {
    y: "0",
    opacity: 1,
    transition: {
      duration: 0.1,
      type: "spring",
      damping: 25,
      stiffness: 400,
    },
  },
  exit: {
    y: "100vh",
    opacity: 0,
  },
};

const Modal = ({ setIsOpen, id }) => {
  const [formValue, setformValue] = useState({
    beginTime: "",
    endTime: "",
    description: "",
  });

  const handleSubmit = async (event) => {
    event.preventDefault();

    axios
      .post("http://localhost:3000/project/log/" + id, {
        date: new Date(),
        ...formValue,
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

  const handleChange = (event) => {
    setformValue({
      ...formValue,
      [event.target.name]: event.target.value,
    });
  };

  return (
    <>
      <div className="darkBG" onClick={() => setIsOpen(false)} />
      <div className="centered">
        <motion.div
          onClick={(e) => e.stopPropagation()}
          className="modal orange-gradient"
          variants={dropIn}
          initial="hidden"
          animate="visible"
          exit="exit"
        >
          <div className="modal">
            <div className="modalHeader">
              <h5 className="heading">Add Log</h5>
            </div>
            <button className="closeBtn" onClick={() => setIsOpen(false)}>
              <RiCloseLine style={{ marginBottom: "-3px" }} />
            </button>
            <form className="form" onSubmit={handleSubmit}>
              <div>
                <p>Select a time:</p>
                <input
                  type="time"
                  id="beginTime"
                  name="beginTime"
                  onChange={handleChange}
                ></input>
              </div>
              <div>
                <p>Select a time:</p>
                <input
                  type="time"
                  id="endTime"
                  name="endTime"
                  onChange={handleChange}
                ></input>
              </div>
              <div>
                <p>Enter description</p>
                <textarea name="description" onChange={handleChange}></textarea>
              </div>

              <div className="modalActions">
                <div className="actionsContainer">
                  <button className="deleteBtn" type="submit">
                    Add
                  </button>
                  <button
                    className="cancelBtn"
                    onClick={() => setIsOpen(false)}
                  >
                    Cancel
                  </button>
                </div>
              </div>
            </form>
          </div>
        </motion.div>
      </div>
    </>
  );
};

export default Modal;
