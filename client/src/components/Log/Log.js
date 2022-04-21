import React from "react";
import "./Log.scss";

function Log(props) {
  return (
    <div className="log">
      <div className="row">
        <div className="log__time">
          <a className="log__time__duration">
            <span>{props.beginTime}</span>
            <span> - </span>
            <span>{props.endTime}</span>
          </a>
          <p className="log__time__date">{props.date.split("T")[0]}</p>
        </div>

        <div className="log__entry">
          <h4 className="log__entry__project">{props.name}</h4>
          <p className="log__entry__activity">{props.entry}</p>
        </div>
      </div>
    </div>
  );
}

export default Log;
