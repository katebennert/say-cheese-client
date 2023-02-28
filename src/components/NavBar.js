import React from "react";
import { NavLink } from "react-router-dom";

function NavBar() {
  return (
    <div className="header">
        <NavLink exact to="/" style={{ textDecoration: 'none' }}><h1>🍔 Say Cheese! 📷</h1></NavLink>
        <div className="nav-buttons">
            <NavLink to="/jobs"><button className="style-1">browse jobs 💼</button></NavLink>
            <NavLink to="/freelancers"><button className="style-1">📸 browse freelancers 👩‍🍳</button></NavLink>
            <NavLink to="/create-job"><button className="style-1">✨ create a new job ✨</button></NavLink>
        </div>
    </div>
  )
}

export default NavBar;