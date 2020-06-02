import React from "react";
import Hero from "../components/Hero";
import Banner from "../components/Banner";
import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <Hero>
      <Banner name="404" title="page not found">
        <Link to="/" className="post-btn">
          back to home
        </Link>
      </Banner>
    </Hero>
  );
};

export default NotFound;
