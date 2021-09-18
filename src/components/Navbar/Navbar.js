import React from "react";
import { NavLink } from "react-router-dom";

export const Navbar = () => (
  <nav className="navbar navbar-dark bg-dark navbar-expand-lg p-4">
    <div className="navbar-brand">Github Search</div>
    <ul className="navbar-nav">
      <li className="nav-item">
        <NavLink exact to='/'  className="nav-link">Home</NavLink>
      </li>
      <li className="nav-item">
        <NavLink to="/information" className="nav-link">Information</NavLink>
      </li>
      <li className="nav-item">
        <NavLink to="/profile/:name" className="nav-link">Profile</NavLink>
      </li>
    </ul>
  </nav>
);
