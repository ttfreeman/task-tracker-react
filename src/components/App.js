import React, { useState } from "react";
import uuid from "uuid";
import { Route, Switch } from "react-router-dom";
import { DashboardPage } from "../components/dashboard/Dashboard";
import { AddTaskForm } from "../components/forms/AddTaskForm";
import { EditTaskForm } from "../components/forms/EditTaskForm";
import { Header } from "../components/Header";
import NotFoundPage from "../components/NotFoundPage";

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
  const isFiltered = false;
  const initialFormState = { id: null, name: "", description: "" };

  const [tasks, setTasks] = useState(tasksData);
  const [editing, setEditing] = useState(false);
  const [currentTask, setCurrentTask] = useState(initialFormState);
  let [filtered, setFiltered] = useState(tasksData);
  const [isF, setIsF] = useState(isFiltered);

  const addTask = task => {
    task.id = uuid();
    setTasks([...tasks, task]);
  };

  const deleteTask = id => {
    setEditing(false);
    setTasks(tasks.filter(task => task.id !== id));
  };

  const filterBy = fil => {
    if (fil === "All") {
      setIsF(false);
    } else {
      setIsF(true);
      setFiltered(tasks.filter(task => task.state === fil));
    }
  };

  const unFilter = () => {
    setIsF(false);
  };

  const editRow = task => {
    setEditing(true);
    setCurrentTask({
      id: task.id,
      name: task.name,
      description: task.description,
      estimate: parseFloat(task.estimate),
      state: task.state
    });
  };

  const updateTask = (id, updatedTask) => {
    setEditing(false);
    setTasks(tasks.map(task => (task.id === id ? updatedTask : task)));
  };
  return (
    <div>
      <Header />
      <Switch>
        <Route
          path="/"
          render={() => (
            <DashboardPage
              tasks={isF === false ? tasks : filtered}
              editRow={editRow}
              deleteTask={deleteTask}
              filterBy={filterBy}
            />
          )}
          exact={true}
        />
        <Route
          path="/create"
          render={() => <AddTaskForm addTask={addTask} />}
        />
        <Route
          path="/edit/:id"
          render={() => (
            <EditTaskForm
              editing={editing}
              setEditing={setEditing}
              currentTask={currentTask}
              updateTask={updateTask}
              unFilter={unFilter}
            />
          )}
        />
        <Route component={NotFoundPage} />
      </Switch>
    </div>
  );
};

export { App };
