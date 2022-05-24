export function groupBy(array, property) {
      return array.reduce(function (newArray, obj) {
        let today = new Date();
        let date = new Date(obj[property]);
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
        if (!newArray[key]) {
          newArray[key] = [];
        }
        newArray[key].push(obj);
        return newArray;
      }, []);
    }