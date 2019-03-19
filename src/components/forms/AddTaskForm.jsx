import React, { useState } from "react";

const AddTaskForm = props => {
  const initialFormState = { id: null, name: "", description: "" };
  const [task, setTask] = useState(initialFormState);

  const handleInputChange = event => {
    const { name, value } = event.currentTarget;
    setTask({ ...task, [name]: value });
  };

  const handleSubmit = event => {
    event.preventDefault();
    if (!task.name || !task.description) return;
    props.addTask(task);
    setTask(initialFormState);
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>Name</label>
      <input
        type="text"
        name="name"
        value={task.name}
        onChange={handleInputChange}
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
      />
      <label>State</label>
      <select name="state" value={task.state} onChange={handleInputChange}>
        <option value="Planned">Planned</option>
        <option value="In Progress">In progress</option>
        <option value="Completed">Completed</option>
      </select>
      <button>Add new task</button>
    </form>
  );
};

export { AddTaskForm };
