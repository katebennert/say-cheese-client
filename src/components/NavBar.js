import React from "react";
import { NavLink } from "react-router-dom";

function NavBar() {
  return (
    <div className="navbar">
        <NavLink exact to="/">🍔</NavLink>
        <NavLink to="/jobs">Jobs</NavLink>
        <NavLink to="/freelancers">Freelancers</NavLink>
        <NavLink to="/create-job">Create New Job</NavLink>
    </div>
  )
}

export default NavBar;