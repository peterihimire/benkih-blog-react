import React, { useContext } from "react";
import { Link } from "react-router-dom";
import logo from "../images/peter-logo.svg";
import { FaAlignRight } from "react-icons/fa";
import { PostContext } from "../Context";

const Navbar = () => {
  const context = useContext(PostContext);
  console.log(context);
  const { isFixed } = context;
  console.log(isFixed);
  return (
    <nav className={isFixed ? "navbar-fixed navbar" : "navbar"}>
      <div className="nav-center">
        <div className={isFixed ? "nav-logo nav-logo-fixed" : "nav-logo"}>
          <Link to="/" className="peter-logo">
            <img src={logo} alt="logo" />
          </Link>
        </div>
        <div className="nav-header">
          <div className="nav-btn-logo">
            <button type="button" className="nav-btn">
              <FaAlignRight className="nav-icon" />
            </button>
            <Link to="/" className="peter-logo">
              <img src={logo} alt="logo" className="image2" />
            </Link>
          </div>
          <ul className={isFixed ? "nav-links nav-links-fixed" : "nav-links"}>
            <li className="nav-item">
              <Link to="/">home</Link>
            </li>
            <li className="nav-item">
              <Link to="/posts">posts</Link>
            </li>
            <li className="nav-item">
              <Link to="/about">about</Link>
            </li>
            <li className="nav-item">
              <Link to="/contact">contact</Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
