import React from "react";
import { Link } from "react-router-dom";
import img from "../images/blog-header.jpg";

const category = props => {
  console.log(props);
  const { title, image } = props.category;
  console.log(title, image);
  return (
    <article className="category">
      <div className="category-center">
        <img src={image} alt="category" style={{ width: "100%" }} />
        <div className="category-img">
          <div className="category-title">
            <p>{title}</p>
          </div>
        </div>
      </div>
    </article>
  );
};

export default category;
