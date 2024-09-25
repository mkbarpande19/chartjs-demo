import React from "react";
import { Data } from "../Data/Data";
import Charts from "./Charts";

const LineChart = () => {
  const dataSets = [
    {
      label: "LineChart 1",
      backgroundColor: "yellow",
      borderColor: "yellow",
      data: Data.map((y) => y.userGain),
    },
    {
      label: "LineChart 2",
      backgroundColor: "green",
      borderColor: "green",
      data: Data.map((y) => y.userLost),
    },
  ];

  const chartConfigObj = {
    labels: Data.map((x) => x.year),
    datasets: dataSets,
  };

  return (
    <div>
      <Charts chartConfigObj={chartConfigObj} type={"line"} />
    </div>
  );
};

export default LineChart;
