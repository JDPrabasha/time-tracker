import React from "react";
import "./Logs.scss";
import { Log } from "../../components";

function Logs() {
  return (
    <div className="logs">
      <div className="logs__container">
        <h1 className="logs__title"> Logs</h1>
        <Log />
        <Log />
        <Log />
        <Log />
        <Log />
      </div>
    </div>
  );
}

export default Logs;
