import React, { useState, useEffect } from "react";

const EditTaskForm = props => {
  const [task, setTask] = useState(props.currentTask);

  useEffect(() => {
    setTask(props.currentTask);
  }, [props]);

  const handleInputChange = event => {
    const { name, value } = event.target;

    setTask({ ...task, [name]: value });
  };

  const handleSubmit = event => {
    event.preventDefault();
    if (!task.name || !task.description || !task.estimate) return;

    props.updateTask(task.id, task);
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>Name {props.currentTask.name}</label>
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
      <button>Update task</button>
      <button
        onClick={() => props.setEditing(false)}
        className="button muted-button"
      >
        Cancel
      </button>
    </form>
  );
};

export { EditTaskForm };
