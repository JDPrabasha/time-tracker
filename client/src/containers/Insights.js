import { React, useEffect, useState } from "react";
import { MdLightbulbOutline } from "react-icons/md";
import { Chart } from "../components";

function Insights() {
  const axios = require("axios");

  const [chartData, setChartData] = useState({});

  const chart = () => {
    axios.get("http://localhost:3000/project/log").then((response) => {
      const labels = response.data.map((project) => {
        return project.name;
      });

      const counts = response.data.map((project) => {
        return project.logs.length;
      });

      const colors = response.data.map((project) => {
        return project.color;
      });

      setChartData({
        labels: labels,
        datasets: [
          {
            label: "time spent",
            data: counts,
            backgroundColor: colors,

            borderWidth: 1,
            cutout: "70%",
          },
        ],
      });
    });
  };

  useEffect(() => {
    chart();
  }, [chartData]);

  return (
    <div className="insights border-gray-800 bg-gray-900 w-4/12 mr-6 ml-8 p-3 border rounded-lg shadow-sm">
      <div className="insights__container">
        <div className="insights__header flex items-center gap-4 mb-6">
          <MdLightbulbOutline className="bulb text-2xl" />
          <h1 className="insights__title font-heading text-2xl"> Insights</h1>
        </div>
        <Chart data={chartData} />
      </div>
    </div>
  );
}

export default Insights;
