import React, { useState } from "react";
import uuid from "uuid";

import { TasksTable } from "../tables/TasksTable";
import { AddTaskForm } from "../forms/AddTaskForm";
import { EditTaskForm } from "../forms/EditTaskForm";

const App = () => {
  const tasksData = [
    {
      id: uuid(),
      name: "Task1",
      description: "work on d3.js",
      estimate: 25,
      state: "Planned"
    },
    {
      id: uuid(),
      name: "Task2",
      description: "data analytics new project",
      estimate: 12,
      state: "In Progress"
    }
  ];

  const initialFormState = { id: null, name: "", description: "" };

  const [tasks, setTasks] = useState(tasksData);
  const [editing, setEditing] = useState(false);
  const [currentTask, setCurrentTask] = useState(initialFormState);

  const addTask = task => {
    task.id = uuid();
    setTasks([...tasks, task]);
  };

  const deleteTask = id => {
    setEditing(false);
    setTasks(tasks.filter(task => task.id !== id));
  };

  const editRow = task => {
    setEditing(true);
    setCurrentTask({
      id: task.id,
      name: task.name,
      description: task.description,
      estimate: task.estimate,
      state: task.state
    });
  };

  const updateTask = (id, updatedTask) => {
    setEditing(false);
    setTasks(tasks.map(task => (task.id === id ? updatedTask : task)));
  };

  return (
    <div className="container">
      <h1>Task Tracker with React</h1>
      <div className="flex-row">
        <div className="flex-large">
          {editing ? (
            <div>
              <h2>Edit task</h2>
              <EditTaskForm
                editing={editing}
                setEditing={setEditing}
                currentTask={currentTask}
                updateTask={updateTask}
              />
            </div>
          ) : (
            <div>
              <h2>Add Task</h2>
              <AddTaskForm addTask={addTask} />
            </div>
          )}
        </div>
        <div className="flex-large">
          <h2>View Tasks</h2>
          <TasksTable tasks={tasks} editRow={editRow} deleteTask={deleteTask} />
        </div>
      </div>
    </div>
  );
};

export { App };
