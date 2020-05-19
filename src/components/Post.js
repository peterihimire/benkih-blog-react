import React from "react";
import { Link } from "react-router-dom";
// import Button from '../components/Button';
import { readableDate } from "../components/helpers";
import MD from "react-markdown";

const Post = ({ post }) => {
  console.log(post);
  const { title, image, slug, description, author, date } = post;

  console.log(post);
  return (
    <article className="post-card">
      <img src={image} alt="post-img" className="post-image" />
      <div>
        <div className="post-title">
          <h4>{title}</h4>
          <small>
            {`by ${author}`}/{` ${readableDate(date)}`}
          </small>
        </div>

        <div>
          <MD source={description} />
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
