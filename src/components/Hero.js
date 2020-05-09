import React from "react";

const Hero = ({ children }) => {
  return (
    <>
      <div className="hero-center">
        <header className="hero">{children}</header>
      </div>
    </>
  );
};

export default Hero;
