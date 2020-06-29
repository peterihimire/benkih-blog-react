import React, { useContext } from "react";
import { PostContext } from "../context";
import { Link } from "react-router-dom";

const Logo = () => {
  const context = useContext(PostContext);
  console.log(context);
  const { isFixed, isOpen, openHandler } = context;
  console.log(isFixed, isOpen, openHandler);

  return (
    <div className="navbar-logo">
      <div className="navbar-logo-center">
        <div className={isFixed ? "nav-logo nav-logo-fixed" : "nav-logo"}>
          <Link to="/" className="peter-logo-1">
            {/* <img src={logo} alt="logo" /> */}benkih
          </Link>
          <small>
            your blog for everything programming, career, fashion...
          </small>
        </div>
      </div>
    </div>
  );
};

export default Logo;
