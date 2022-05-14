import React from "react";

import { BsCircleFill } from "react-icons/bs";

function Log(props) {
  return (
    <div className="log border rounded-lg px-3 py-1 mb-4 hover:-translate-y-1 transition-all ease-linear">
      <div className="flex items-center">
        <div className="log__entry">
          <p className="log__entry__activity font-semibold">{props.entry}</p>
          <div className="flex gap-1 items-center  ">
            <BsCircleFill size={10} />
            <h4 className="log__entry__project text-sm">{props.name}</h4>
          </div>
        </div>
        <div className="log__time ml-auto mr-3">
          <a className="log__time__duration">
            <span>{props.beginTime}</span>
            <span> - </span>
            <span>{props.endTime}</span>
          </a>
          <p className="log__time__date text-sm text-gray-800">
            {props.date.split("T")[0]}
          </p>
        </div>
      </div>
    </div>
  );
}

export default Log;
