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
      <h2>Add Task</h2>
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
        <button>Add new task</button>
        <Link to="/">Cancel</Link>
      </form>
    </div>
  );
};

export { AddTaskForm };
