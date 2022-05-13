import React from "react";
import "./Log.scss";

function Log(props) {
  return (
    <div className="log border rounded-lg px-3 py-1 mb-4">
      <div className="flex items-center">
        <div className="log__entry">
          <p className="log__entry__activity font-semibold">{props.entry}</p>
          <h4 className="log__entry__project text-sm">{props.name}</h4>
        </div>
        <div className="log__time ml-auto mr-3">
          <a className="log__time__duration">
            <span>{props.beginTime}</span>
            <span> - </span>
            <span>{props.endTime}</span>
          </a>
          <p className="log__time__date">{props.date.split("T")[0]}</p>
        </div>
      </div>
    </div>
  );
}

export default Log;
