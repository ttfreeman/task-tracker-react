import React from "react";
import { Link } from "react-router-dom";

const TasksTable = props => {
  const handleDeleteTask = id => {
    let answer = window.confirm("Are you sure?");

    if (answer) {
      props.deleteTask(id);
    }
  };
  return (
    <table
      className="responsive-table centered highlight striped"
      style={{ marginTop: "1rem" }}
    >
      <thead>
        <tr>
          <th>Name</th>
          <th>Description</th>
          <th>Estimated Hours</th>
          <th>State</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
        {props.tasks.length > 0 ? (
          props.tasks.map(task => (
            <tr key={task.id}>
              <td>{task.name}</td>
              <td>{task.description}</td>
              <td>{task.estimate}</td>
              <td>{task.state}</td>
              <td>
                <div>
                  <Link to={"/edit/:" + task.id}>
                    <button
                      className="btn"
                      onClick={() => {
                        props.editRow(task);
                      }}
                    >
                      Edit
                    </button>
                  </Link>

                  <button
                    onClick={() => handleDeleteTask(task.id)}
                    className="btn red"
                  >
                    X
                  </button>
                </div>
              </td>
            </tr>
          ))
        ) : (
          <tr>
            <td colSpan={3}>No Tasks</td>
          </tr>
        )}
      </tbody>
    </table>
  );
};

export { TasksTable };
