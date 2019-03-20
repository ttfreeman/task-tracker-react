import React from "react";
import { Chart } from "react-google-charts";

const Diagram = props => {
  const data = [];
  props.tasks.forEach(task => {
    console.log(task.estimate);

    if (!(task.state === "Completed")) {
      data.push([task.name, parseFloat(task.estimate)]);
    }
  });
  return (
    <div>
      <Chart
        width={"500px"}
        height={"300px"}
        chartType="PieChart"
        loader={<div>Loading Chart</div>}
        data={[["Task", "Hours per Day"], ...data]}
        options={{
          title: "Estimated Hour/Day for Uncompleted Tasks"
        }}
        rootProps={{ "data-testid": "1" }}
      />
    </div>
  );
};

export default Diagram;
