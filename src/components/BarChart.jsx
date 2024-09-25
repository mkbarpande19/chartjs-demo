import React from "react";
import Charts from "./Charts";
import { Data } from "../Data/Data";
const BarChart = () => {
  const datasets = [
    {
      label: "Bar Chart Demo",
      backgroundColor: "red",
      borderColor: "green",
      data: Data.map((y) => y.userGain),
    },
  ];
  const chartConfigObj = {
    labels: Data.map((x) => x.year),
    datasets: datasets,
  };

  return (
    <div>
      <Charts chartConfigObj={chartConfigObj} type={"bar"} />
    </div>
  );
};
export default BarChart;
