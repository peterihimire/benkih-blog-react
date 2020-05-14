import React from "react";
import { NavLink } from "react-router-dom";

function NavLinksList() {
  return (
    <>
      <li className="nav-item">
        <NavLink activeClassName="active" to="/">
          home
        </NavLink>
      </li>
      <li className="nav-item">
        <NavLink activeClassName="active" to="/posts">
          posts
        </NavLink>
      </li>
      <li className="nav-item">
        <NavLink activeClassName="active" to="/about">
          about
        </NavLink>
      </li>
      <li className="nav-item">
        <NavLink activeClassName="active" to="/contact">
          contact
        </NavLink>
      </li>
    </>
  );
}

export default NavLinksList;
