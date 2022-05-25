export function getTimeDiff(logs) {

Object.keys(logs).map((item) => {
      {
        let index = ""+item+"";
        logs[index].map((log, i) => {
          
          var begin_time = new Date(
            "01/01/2007 " + logs[index][i].beginTime
          );
  
          console.log(begin_time);
  
          var end_time = new Date(
            "01/01/2007 " + logs[index][i].endTime
          );
  
          let timeDiff =
            (end_time.getTime() - begin_time.getTime()) / (1000 * 3600);
          let hours = Math.floor(timeDiff);
          let minutes = Math.floor((timeDiff - hours) * 60);
          logs[index][i].hours = hours;
          logs[index][i].minutes = minutes;

          return logs;
        });
      }
    })

}