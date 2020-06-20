import React, { useContext } from "react";
import { Link } from "react-router-dom";
// import logo from "../images/peter-logo.svg";
import { FaBars } from "react-icons/fa";
import { PostContext } from "../context";
import NavLinksList from "../components/NavLinksList";

const Navbar = () => {
  const context = useContext(PostContext);
  console.log(context);
  const { isFixed, isOpen, openHandler } = context;
  console.log(isFixed, isOpen, openHandler);
  return (
    <>
      {/* <div className="navbar-logo">
        <div className="navbar-logo-center">
          <div className={isFixed ? "nav-logo nav-logo-fixed" : "nav-logo"}>
            <Link to="/" className="peter-logo-1">
              <img src={logo} alt="logo" />
            </Link>
          </div>
        </div>
      </div> */}
      <nav className={isFixed ? "navbar-fixed " : "navbar "}>
        <div className="nav-center">
          <div className="nav-header">
            <div className="nav-btn-logo">
              <button type="button" className="nav-btn" onClick={openHandler}>
                <FaBars className="nav-icon" />
              </button>
              <Link to="/" className="peter-logo-2 peter-logo-2-v">
                {/* <img src={logo} alt="logo" className="image2" /> */}the
                benkih
              </Link>
            </div>
            <ul className={isFixed ? "nav-links nav-links-fixed" : "nav-links"}>
              <NavLinksList />
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
