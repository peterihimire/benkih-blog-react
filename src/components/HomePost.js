import React from "react";
import { Link } from "react-router-dom";
import { readableDate } from "../components/helpers";
import { FaUser, FaCalendarAlt } from "react-icons/fa";
import MD from "react-markdown";
const HomePost = props => {
  console.log(props);
  const { author, date, image, slug, title, blog, description2 } = props.blog;
  console.log(author, date, image, slug, title, blog);
  return (
    <article className="home-post">
      <div className="home-post-center">
        <div className="home-post-img-container">
          <img src={image} alt="post" style={{ width: "100%" }} />
        </div>
        <div className="home-post-text">
          <div className="home-post-title">
            {/* <div className="category">
              <p>career</p>
            </div> */}
            <h3>{title}</h3>
            <small>
              <div className="home-post-author">
                <FaUser /> {author}
              </div>
              <div className="home-post-author">
                <FaCalendarAlt /> {readableDate(date)}
              </div>
            </small>
            <div className="md-description">
              <span>
                <MD source={description2} />
              </span>
              <Link to={`/posts/${slug}`} className="btn home-post-btn">
                read more
              </Link>
            </div>
          </div>
        </div>
      </div>
    </article>
  );
};

export default HomePost;
