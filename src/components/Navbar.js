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
        <div className="nav-header">
          <div className={isFixed ? "nav-logo nav-logo-fixed" : "nav-logo"}>
            <Link to="/" className="peter-logo">
              <img src={logo} alt="logo" />
            </Link>
          </div>
          <div className="nav-group">
            <Link to="/" className="peter-logo">
              <img src={logo} alt="logo" className="image2" />
            </Link>
            <button type="button" className="nav-btn">
              <FaAlignRight className="nav-icon" />
            </button>
            <ul className={isFixed ? "nav-links nav-links-fixed" : "nav-links"}>
              <li className="nav-item">
                <Link>home</Link>
              </li>
              <li className="nav-item">
                <Link>posts</Link>
              </li>
              <li className="nav-item">
                <Link>about</Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
