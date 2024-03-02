import React from "react";
import "./Navbar.css";
import { NavLink } from "react-router-dom";
function Navbar() {
  return (
    <div>
      <ul>
        <li>
          <NavLink to="/">home</NavLink>
        </li>
        <li>
          <NavLink to="/pricing">pricing</NavLink>
        </li>
        <li>
          <NavLink to="/about">about</NavLink>
        </li>
      </ul>
    </div>
  );
}
// npm i react-router-dom
export default Navbar;
