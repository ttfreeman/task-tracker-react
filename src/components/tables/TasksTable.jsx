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
    <table>
      <thead>
        <tr>
          <th>Name</th>
          <th>Description</th>
          <th>Estimated Hour/Day</th>
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
                <button
                  onClick={() => {
                    props.editRow(task);
                  }}
                  className="button muted-button corrected"
                >
                  <Link to={"/edit/:" + task.id}>Edit</Link>
                </button>
                <button
                  onClick={() => handleDeleteTask(task.id)}
                  className="button muted-button corrected"
                >
                  Delete
                </button>
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
