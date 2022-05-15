import { React, useEffect, useState } from "react";
import { Log } from "../../components";
import { MdFormatListBulleted } from "react-icons/md";
import { getLogs } from "../../services/api";

function Logs() {
  const [logs, setLogs] = useState([]);

  useEffect(() => {
    getLogs().then((response) => {
      setLogs(response.data);
    });
  }, [logs]);

  return (
    <div className="logs w-6/12 ml-8 border rounded-lg p-3 shadow-sm">
      <div className="logs__container">
        <div className="flex gap-3 items-center logs__header mb-4">
          <MdFormatListBulleted className="bullets text-2xl" />

          <h1 className="logs__title text-2xl font-bold">Logs</h1>
        </div>
        {logs.map((log) => (
          <Log
            name={log.project.name}
            entry={log.description}
            color={log.project.color}
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
