import React from "react";
import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <div className="nav">
      <div>
        <h1>Task Tracker with React</h1>
      </div>
      <div>
        <ul>
          <li>
            <NavLink to="/" exact={true}>
              Dashboard
            </NavLink>
          </li>
          <li>
            <NavLink to="/create">Add Task</NavLink>
          </li>
        </ul>
      </div>
    </div>
  );
};

export { Header };
