import React, { useContext } from "react";
import { PostContext } from "../context";

const Hero = ({ children }) => {
  const context = useContext(PostContext);
  const { isFixed } = context;
  console.log(isFixed, context);
  return (
    <>
      <div className={isFixed ? "hero-center hero-padding-top" : "hero-center"}>
        <header className="hero">{children}</header>
      </div>
    </>
  );
};

export default Hero;
