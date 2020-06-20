import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { PostContext } from "../context";
import NavLinksList from "./NavLinksList";

const FixedNav = () => {
  const context = useContext(PostContext);
  console.log(context);
  const { isFixed, isOpen, openHandler } = context;
  console.log(isFixed, isOpen, openHandler);

  return (
    <nav className={isFixed ? "navbar-fixed " : "navbar-f"}>
      <div className="nav-center">
        <div className="nav-header-f">
          <div className="nav-btn-logo">
            <Link to="/" className="p-logo-fixed">
              {/* <img src={logo} alt="logo" className="image2" /> */}benkih
            </Link>
          </div>
          <ul className={isFixed ? "nav-links nav-links-fixed" : "nav-links"}>
            <NavLinksList />
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default FixedNav;
