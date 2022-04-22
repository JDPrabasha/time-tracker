import { React, useEffect, useState } from "react";
import "./Insights.scss";
import { MdLightbulbOutline } from "react-icons/md";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Doughnut } from "react-chartjs-2";

ChartJS.register(ArcElement, Tooltip, Legend);

function Insights() {
  const axios = require("axios");

  const [chartData, setChartData] = useState({});

  const chart = () => {
    axios.get("http://localhost:3000/project/log").then((response) => {
      const labels = response.data.map((project) => {
        return project.name;
      });
      console.log(labels);

      const counts = response.data.map((project) => {
        return project.logs.length;
      });
      console.log(counts);
      setChartData({
        labels: labels,
        datasets: [
          {
            label: "time spent",
            data: counts,
            backgroundColor: [
              "rgba(255, 99, 132, 0.2)",
              "rgba(54, 162, 235, 0.2)",
              "rgba(255, 206, 86, 0.2)",
              "rgba(75, 192, 192, 0.2)",
              "rgba(246, 158, 135,0.2)",
              "rgba(246, 35, 135,0.2)",
            ],
            borderColor: [
              "rgba(255, 99, 132, 1)",
              "rgba(54, 162, 235, 1)",
              "rgba(255, 206, 86, 1)",
              "rgba(75, 192, 192, 1)",
              "rgba(246, 158, 135,1)",
              "rgba(246, 35, 135,1)",
            ],
            borderWidth: 1,
          },
        ],
      });
    });
  };

  useEffect(() => {
    chart();
  }, []);

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
