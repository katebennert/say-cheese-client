import React from "react";
import { NavLink } from "react-router-dom";

function NavBar() {
  return (
    <div className="header">
        <NavLink exact to="/" style={{ textDecoration: 'none' }}><h1>🍔 Say Cheese! 📷</h1></NavLink>
        <div className="nav-buttons">
            <NavLink to="/jobs"><button className="nav-button">browse jobs 💼</button></NavLink>
            <NavLink to="/freelancers"><button className="nav-button">📸 browse freelancers 👩‍🍳</button></NavLink>
            <NavLink to="/create-freelancer"><button className="nav-button">✨ create a new freelancer ✨</button></NavLink>
            <NavLink to="/create-job"><button className="nav-button">✨ create a new job ✨</button></NavLink>
        </div>
    </div>
  )
}

export default NavBar;