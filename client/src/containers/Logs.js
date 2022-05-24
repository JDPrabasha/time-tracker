import React, { useEffect, useState } from "react";
import { Log } from "../components";
import { MdFormatListBulleted } from "react-icons/md";
import { getLogs } from "../services/api";
import { groupBy } from "../utils/groupLogs";
import { getTimeDiff } from "../utils/timeDiff";

function Logs() {
  const [logs, setLogs] = useState([]);

  useEffect(() => {
    getLogs().then((response) => {
      let groupedLogs = groupBy(response.data, "date");
      setLogs(groupedLogs);
    });
  }, [logs]);

  getTimeDiff(logs);

  return (
    <div className="logs w-6/12 ml-8 border border-gray-800 bg-gray-900 rounded-lg p-3 shadow-sm">
      <div className="logs__container">
        <div className="flex gap-3 items-center logs__header mb-4">
          <MdFormatListBulleted className="bullets text-2xl" />

          <h1 className="logs__title text-2xl font-heading">Logs</h1>
        </div>
        <div>
          {Object.keys(logs).map((item, i) => (
            <>
              <h2 key={i} className="text-x1 mt-5">
                {item}
              </h2>
              {logs["" + item + ""].map((log) => (
                <Log
                  name={log.project.name}
                  entry={log.description}
                  color={log.project.color}
                  date={log.date}
                  hours={log.hours}
                  minutes={log.minutes}
                  key={log.id}
                  id={log.id}
                />
              ))}
            </>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Logs;
