import { React, useEffect, useState } from "react";
import "./Logs.scss";
import { Log } from "../../components";

function Logs() {
  const axios = require("axios");
  const [logs, setLogs] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:3000/logs")
      .then((response) => setLogs(response.data));
  }, [logs]);

  console.log(logs);

  return (
    <div className="logs">
      <div className="logs__container">
        <h1 className="logs__title"> Logs</h1>
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
