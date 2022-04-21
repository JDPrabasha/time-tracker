import { React, useEffect, useState } from "react";
import "./Insights.scss";
import { MdLightbulbOutline } from "react-icons/md";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Doughnut } from "react-chartjs-2";

ChartJS.register(ArcElement, Tooltip, Legend);

function Insights() {
  const axios = require("axios");
  const [data, setData] = useState([]);
  const [chartData, setChartData] = useState({
    labels: ["red", "blue", "green"],
    datasets: [
      {
        label: "time spent",
        data: [4, 6, 7, 7],
        backgroundColor: [
          "rgba(255, 99, 132, 0.2)",
          "rgba(54, 162, 235, 0.2)",
          "rgba(255, 206, 86, 0.2)",
          "rgba(75, 192, 192, 0.2)",
        ],
        borderColor: [
          "rgba(255, 99, 132, 1)",
          "rgba(54, 162, 235, 1)",
          "rgba(255, 206, 86, 1)",
          "rgba(75, 192, 192, 1)",
        ],
        borderWidth: 1,
      },
    ],
  });

  useEffect(() => {
    axios.get("http://localhost:3000/project/log").then((response) => {
      setData(response.data);
      const labels = data.map((project) => {
        return project.name;
      });
      console.log(labels);

      const counts = data.map((project) => {
        return project.logs.length;
      });
      console.log(counts);
      setChartData({
        labels: labels || [],

        ...chartData,
      });

      console.log(chartData.labels);
      console.log(chartData);
    });
  }, []);

  console.log(data);

  return (
    <div className="insights">
      <div className="insights__container">
        <div className="insights__header row">
          <MdLightbulbOutline className="bulb" />
          <h1 className="insights__title"> Insights</h1>
        </div>
        <Doughnut data={chartData} key={Math.random()} />
      </div>
    </div>
  );
}

export default Insights;
