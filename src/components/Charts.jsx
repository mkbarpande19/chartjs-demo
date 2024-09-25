import React from "react";
import Chart from "chart.js/auto";
import { Bar, Line } from "react-chartjs-2";

const Charts = ({ chartConfigObj, type }) => {
  const {
    datasets,
    labels
  } = chartConfigObj;


  const getChart = () => {
    switch (type) {
      case "bar":
        return <Bar data={data} />;

      case "line":
        return <Line data={data} />;
      default:
        break;
    }
  };

  const data = {
    labels: labels,
    datasets:datasets,
  };
  return getChart(type);
};

export default Charts;
