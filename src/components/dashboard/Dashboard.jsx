import React from "react";
import { Link } from "react-router-dom";

import { TasksTable } from "../tables/TasksTable";
import Diagram from "../charts/Diagram";

const DashboardPage = props => {
  return (
    <div className="container">
      <div>
        <h2>View Tasks</h2>
        <div>
          Filter by:
          <button onClick={() => props.filterBy("All")}>Show All</button>
          <button onClick={() => props.filterBy("Planned")}>Planned</button>
          <button onClick={() => props.filterBy("In Progress")}>
            In Progress
          </button>
          <button onClick={() => props.filterBy("Completed")}>Completed</button>
        </div>
        <TasksTable
          tasks={props.tasks}
          editRow={props.editRow}
          deleteTask={props.deleteTask}
        />
        <Link to="/create">Add New Task</Link>
        <Diagram tasks={props.tasks} />
      </div>
    </div>
  );
};

export { DashboardPage };
