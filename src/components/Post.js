import React from "react";
import { Link } from "react-router-dom";
// import Button from '../components/Button';
import { readableDate } from "../components/helpers";

const Post = ({ post }) => {
  console.log(post);
  const { title, image, slug, description, author, date } = post;
  console.log(post);
  return (
    <article className="post-card">
      <img src={image} alt="post-img" className="post-image" />
      <div>
        <div className="post-title">
          <h2>{title}</h2>
          <small>
            {`by ${author}`}/{` ${readableDate(date)}`}
          </small>
        </div>

        <div>
          <p>{description}</p>
        </div>
        <div className="post-link">
          <Link to={`/posts/${slug}`} className="btn">
            Read More
          </Link>
        </div>
      </div>
    </article>
  );
};

export default Post;
