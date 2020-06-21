import React from "react";
import { Link } from "react-router-dom";
import img from "../images/blog-header.jpg";

const category = props => {
  console.log(props);
  const { title, image } = props.category;
  console.log(title, image);
  return (
    <article className="category-center">
      <img src={image} alt="category" className="main-img" />
      <Link to="/">
        <div className="category-img">
          <Link to="/" className="category-title">
            {title}
          </Link>
        </div>
      </Link>
    </article>
  );
};

export default category;
