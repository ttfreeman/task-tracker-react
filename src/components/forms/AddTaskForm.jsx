import React, { useState } from "react";
import { Link, Redirect } from "react-router-dom";

const AddTaskForm = props => {
  const initialFormState = {
    id: null,
    name: "",
    description: "",
    estimate: ""
  };
  const toDashboard = false;

  const [task, setTask] = useState(initialFormState);
  const [toD, setToD] = useState(toDashboard);

  const handleInputChange = event => {
    const { name, value } = event.currentTarget;
    setTask({ ...task, [name]: value });
  };

  const handleSubmit = event => {
    event.preventDefault();
    if (!task.name || !task.estimate || !task.state) return;
    props.addTask(task);
    setTask(initialFormState);
    setToD(true);
  };

  if (toD === true) {
    return <Redirect to="/" />;
  }
  return (
    <div className="container">
      <div className="row">
        <div className="col s6 offset-s3">
          <h4 className="center">Add New Task</h4>
          <form onSubmit={handleSubmit}>
            <label>Name</label>
            <input
              type="text"
              name="name"
              value={task.name}
              onChange={handleInputChange}
              required
            />
            <label>Description</label>
            <input
              type="text"
              name="description"
              value={task.description}
              onChange={handleInputChange}
            />
            <label>Estimate</label>
            <input
              type="number"
              name="estimate"
              value={task.estimate}
              onChange={handleInputChange}
              required
            />
            <label>State</label>
            <select
              className="browser-default"
              style={{ marginBottom: "1.5rem" }}
              name="state"
              defaultValue=""
              value={task.state}
              onChange={handleInputChange}
              required
            >
              <option value="" />
              <option value="Planned">Planned</option>
              <option value="In Progress">In progress</option>
              <option value="Completed">Completed</option>
            </select>
            <button className="btn" style={{ margin: "1rem 1rem 1rem 0" }}>
              Add task
            </button>
            <Link className="btn grey lighten-1" to="/">
              Cancel
            </Link>
          </form>
        </div>
      </div>
    </div>
  );
};

export { AddTaskForm };
