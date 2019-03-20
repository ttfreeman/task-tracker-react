import React from "react";
import { Link } from "react-router-dom";

import { TasksTable } from "../tables/TasksTable";
import Diagram from "../charts/Diagram";

const DashboardPage = props => {
  return (
    <div className="container">
      <div className="row">
        <div className="section">
          <h3 className="col s12 center">View Tasks</h3>
          <div
            className="col s12 center"
            style={{ borderBottom: "1px solid grey" }}
          >
            <button
              className="btn-flat teal-text text-darken-2"
              onClick={() => props.filterBy("All")}
            >
              Show All
            </button>
            <button
              className="btn-flat teal-text text-darken-2"
              onClick={() => props.filterBy("Planned")}
            >
              Planned
            </button>
            <button
              className="btn-flat teal-text text-darken-2"
              onClick={() => props.filterBy("In Progress")}
            >
              In Progress
            </button>
            <button
              className="btn-flat teal-text text-darken-2"
              onClick={() => props.filterBy("Completed")}
            >
              Completed
            </button>
          </div>
        </div>

        <div className="divider" style={{ borderBottom: "1px solid grey" }} />
        <div className="section">
          <div className="col s8">
            <TasksTable
              tasks={props.tasks}
              filteredTasks={props.filteredTasks}
              editRow={props.editRow}
              deleteTask={props.deleteTask}
            />
          </div>
          <div className="col s4">
            <Diagram tasks={props.tasks} />
          </div>
        </div>
        <div className="fixed-action-btn" style={{ margin: "4rem" }}>
          <Link to="/create" className="btn-floating btn-large teal">
            <i className="large material-icons">add</i>
          </Link>
        </div>
      </div>
    </div>
  );
};

export { DashboardPage };
