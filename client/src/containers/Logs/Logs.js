import { React, useEffect, useState } from "react";
import { Log } from "../../components";
import { MdFormatListBulleted } from "react-icons/md";
import { getLogs } from "../../services/api";

/*---------grouping the logs by their created date---------*/
function groupBy(array, property) {
  return array.reduce(function (newArray, obj) {
    let today = new Date();
    let date  = new Date(obj[property]);
    //var days = ['MONDAY','TUESDAY','WEDNESDAY','THURSDAY','FRIDAY','SATURDAY','SUNDAY'];
    //var months = ['JANUARY','FEBRUARY','MARCH','APRIL','MAY','JUNE','JULY','AUGUST','SEPTEMBER','OCTOBER','NOVEMBER','DECEMBER'];
    var days = ['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday'];
    var months = ["January","February","March","April","May","June","July","August","September","October","November","December"];
    var key = "";
    if(date.toDateString() == today.toDateString()){
      key = "Today";
    }

    /*--------get the indexes of the new array to be in "day, date month" format (Ex:Monday, 9 January)---------*/
    else key = days[date.getDay()] + ", " + date.getDate() + " " + months[date.getMonth()];
    //console.log(key);
    if (!newArray[key]) {
      newArray[key] = [];
    }
    newArray[key].push(obj);
    return newArray;
  }, []);
}

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