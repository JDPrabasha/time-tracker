import { React, useState } from "react";
import "./LogModal.scss";
import { RiCloseLine } from "react-icons/ri";
import { motion } from "framer-motion";
import { addLog } from "../../../services/api";
import { TimeInput } from "@mantine/dates";

const Modal = ({ setOpened, id }) => {
  const [formValue, setformValue] = useState({
    beginTime: "",
    endTime: "",
    description: "",
  });

  const handleSubmit = async (event) => {
    event.preventDefault();

    addLog(id, { date: new Date(), ...formValue })
      .then(function (response) {
        console.log(response);
        setOpened(false);
      })
      .catch(function (error) {
        console.log(error);
        setOpened(false);
      });
  };

  const handleChange = (event) => {
    setformValue({
      ...formValue,
      [event.target.name]: event.target.value,
    });
  };

  return (
    <Modal
      centered
      opened={true}
      onClose={() => setOpened(false)}
      title="Add Log Entry"
      onChange={handleChange}
    >
      <div className="flex flex-col gap-2 mb-4">
        <label className="text-xs">Start time</label>
        <input
          onChange={handleChange}
          name="beginTime"
          type="time"
          class="form-input text-sm rounded "
        />
      </div>
      <div className="flex flex-col gap-2 mb-4">
        <label className="text-xs">End time</label>
        <input
          onChange={handleChange}
          type="time"
          name="endTime"
          class="form-input text-sm rounded "
        />
      </div>
      <div className="flex flex-col gap-2 mb-4">
        <label className="text-xs">Description</label>
        <input
          onChange={handleChange}
          placeholder="Add description"
          name="description"
          class="form-input text-sm rounded "
        />
      </div>

      <div className="buttons flex justify-center gap-6 mt-4">
        <a
          onClick={handleSubmit}
          className="text-sm bg-blue-500 text-white px-3 py-2 cursor-pointer hover:bg-blue-300 rounded-sm"
        >
          Add Entry
        </a>
        <a
          onClick={() => setOpened(false)}
          className="text-sm bg-red-500 text-white px-3 py-2 cursor-pointer rounded-sm hover:bg-red-300 "
        >
          Cancel
        </a>
      </div>
    </Modal>
  );
};

export default Modal;
