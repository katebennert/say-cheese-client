import React from "react";
import { NavLink } from "react-router-dom";

function NavBar() {
  return (
    <div className="navbar">
      <ul>
        <li><NavLink exact to="/">Home</NavLink></li>
        <li><NavLink to="/jobs">Jobs</NavLink></li>
        <li><NavLink to="/freelancers">Freelancers</NavLink></li>
        <li><NavLink to="/create-job">Create New Job</NavLink></li>
      </ul>
    </div>
  )
}

export default NavBar;