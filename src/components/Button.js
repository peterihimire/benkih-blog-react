import React from "react";
import { Link } from "react-router-dom";

const Button = ({ post }) => {
  const { slug } = post;
  return (
    <>
      <Link to={`/posts/${slug}`} className="btn">
        read more
      </Link>
    </>
  );
};

export default Button;
