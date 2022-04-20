import React from "react";
import "./Log.scss";

function Log() {
  return (
    <div className="log">
      <div className="row">
        <div className="log__time">
          <h2 className="log__time__duration">22:30 - 22:40</h2>
          <p className="log__time__date">21.12.12</p>
        </div>

        <div className="log__entry">
          <h4 className="log__entry__project">Flutter</h4>
          <p className="log__entry__activity">UI/UX Video</p>
        </div>
      </div>
    </div>
  );
}

export default Log;
