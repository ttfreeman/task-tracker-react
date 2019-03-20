import React from "react";
import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <nav>
      <div className="nav-wrapper blue" style={{ padding: "0 1rem" }}>
        <a className="brand-logo">Task Tracker with React</a>
        <ul className="right ">
          <li>
            {" "}
            <NavLink to="/" exact={true}>
              Dashboard
            </NavLink>
          </li>
          <li>
            <NavLink to="/create">Add New Task</NavLink>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export { Header };
