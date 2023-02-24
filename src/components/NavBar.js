import React from "react";
import { NavLink } from "react-router-dom";

function NavBar() {
  return (
    <div className="nav-buttons">
        <NavLink exact to="/"><button className="style-1">home 🍔</button></NavLink>
        <NavLink to="/jobs"><button className="style-1">jobs 💼</button></NavLink>
        <NavLink to="/freelancers"><button className="style-1">freelancers 👩‍🍳</button></NavLink>
        <NavLink to="/create-job"><button className="style-1">✨ create new job ✨</button></NavLink>
    </div>
  )
}

export default NavBar;