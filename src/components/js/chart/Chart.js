import React from "react";

import ChartBar from "./ChartBar";
import "./Chart.css";

const Chart = (props) => {
//   let totalMaximum = 500;
//   props.barData.map((content) => (totalMaximum += content.value));

  return (
    <div className="chart">
      {props.dataPoints.map((data) => (
        <ChartBar
          key={data.label}
          value={data.value}
          maxValue={props.totalMaximum}
          label={data.label}
        />
      ))}
    </div>
  );
};

export default Chart;
