import React, { useContext } from "react";
// import { FaWindowClose } from "react-icons/fa";
import { NavLink } from "react-router-dom";
import { PostContext } from "../context";

function SideNav() {
  const context = useContext(PostContext);
  const { isOpen, closeHandler, removeOverlay } = context;
  console.log(isOpen, closeHandler, removeOverlay);
  console.log(context);
  return (
    <>
      <div
        className={isOpen ? "menu-overlay transparent-bcg" : "menu-overlay"}
        onClick={closeHandler}
      />
      <div className={isOpen ? "menu show-menu" : "menu"}>
        <div className="menu-header">
          <div>benkih</div>
          <span className="close-menu">
            {/* <button
              type="button"
              className="side-nav-btn"
              onClick={closeHandler}
            >
              <FaWindowClose className="side-nav-icon" />
            </button> */}
          </span>
        </div>
        <div className="menu-nav">
          <ul className="side-nav-links">
            <li className="side-nav-item">
              <NavLink exact activeClassName="active" to="/">
                home
              </NavLink>
            </li>
            <li className="side-nav-item">
              <NavLink activeClassName="active" to="/posts">
                posts
              </NavLink>
            </li>
            <li className="side-nav-item">
              <NavLink activeClassName="active" to="/about">
                about
              </NavLink>
            </li>
            <li className="side-nav-item">
              <NavLink activeClassName="active" to="/contact">
                contact
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}

export default SideNav;
