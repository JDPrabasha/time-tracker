import { React, useEffect, useState } from "react";
import "./Logs.scss";
import { Log } from "../../components";
import { MdFormatListBulleted } from "react-icons/md";

function Logs() {
  const axios = require("axios");
  const [logs, setLogs] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:3000/logs").then((response) => {
      setLogs(response.data);
      console.log(logs);
    });
  }, []);

  return (
    <div className="logs">
      <div className="logs__container">
        <div className="row logs__header">
          <MdFormatListBulleted className="bullets" />

          <h1 className="logs__title">Logs</h1>
        </div>
        {logs.map((log) => (
          <Log
            name={log.project.name}
            entry={log.description}
            date={log.date}
            beginTime={log.beginTime}
            endTime={log.endTime}
            key={log.id}
            id={log.id}
          />
        ))}
      </div>
    </div>
  );
}

export default Logs;
