import React, { useEffect, useState } from "react";
import { Log } from "../../components";
import { MdFormatListBulleted } from "react-icons/md";
import { getLogs } from "../../services/api";
import { LogarithmicScale } from "chart.js";

/*---------grouping the logs by their created date---------*/
function groupBy(array, property) {
  return array.reduce(function (newArray, obj) {
    let today = new Date();
    let date = new Date(obj[property]);
    //var days = ['MONDAY','TUESDAY','WEDNESDAY','THURSDAY','FRIDAY','SATURDAY','SUNDAY'];
    //var months = ['JANUARY','FEBRUARY','MARCH','APRIL','MAY','JUNE','JULY','AUGUST','SEPTEMBER','OCTOBER','NOVEMBER','DECEMBER'];
    var days = [
      "Sunday",
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
    ];
    var months = [
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December",
    ];
    var key = "";
    if (date.toDateString() == today.toDateString()) {
      key = "Today";
    } else key = days[date.getDay()] + ", " + date.getDate() + " " + months[date.getMonth()];

    /*--------get the indexes of the new array to be in "day, date month" format (Ex:Monday, 9 January)---------*/
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
      let groupedLogs = groupBy(response.data, "date");
      setLogs(groupedLogs);
    });
  }, [logs]);

  /*---------get the time difference between beginTime and endTime in hours and minutes---------*/
  /*---------------------------and append the values to the objects---------------------------- */
  Object.keys(logs).map((item) => {
    {
      logs["" + item + ""].map((log, i) => {
        // console.log(logs["" + item + ""][i].beginTime);
        /*---------adding a random date to the time to get it as a date object----------- */
        var begin_time = new Date(
          "01/01/2007 " + logs["" + item + ""][i].beginTime
        );

        console.log(begin_time);

        var end_time = new Date(
          "01/01/2007 " + logs["" + item + ""][i].endTime
        );

        let timeDiff =
          (end_time.getTime() - begin_time.getTime()) / (1000 * 3600);
        let hours = Math.floor(timeDiff);
        let minutes = Math.floor((timeDiff - hours) * 60);
        logs["" + item + ""][i].hours = hours;
        logs["" + item + ""][i].minutes = minutes;
      });
    }
  });

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
