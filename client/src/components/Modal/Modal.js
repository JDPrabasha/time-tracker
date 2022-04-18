import { React, useState } from "react";
import styles from "./Modal.module.scss";
import { RiCloseLine } from "react-icons/ri";
import axios from "axios";

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
      <div className={styles.darkBG} onClick={() => setIsOpen(false)} />
      <div className={styles.centered}>
        <div className={styles.modal}>
          <div className={styles.modalHeader}>
            <h5 className={styles.heading}>Add Log</h5>
          </div>
          <button className={styles.closeBtn} onClick={() => setIsOpen(false)}>
            <RiCloseLine style={{ marginBottom: "-3px" }} />
          </button>
          <form className={styles.form} onSubmit={handleSubmit}>
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

            <div className={styles.modalActions}>
              <div className={styles.actionsContainer}>
                <button className={styles.deleteBtn} type="submit">
                  Add
                </button>
                <button
                  className={styles.cancelBtn}
                  onClick={() => setIsOpen(false)}
                >
                  Cancel
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default Modal;
