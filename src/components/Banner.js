import React from "react";

const Banner = ({ name, title, children }) => {
  return (
    <div className="banner">
      <h1>{name}</h1>
      <p>{title}</p>
      {children}
    </div>
  );
};

export default Banner;
