import React, { useContext } from "react";
import Title from "./Title";
import { PostContext } from "../context";
import { Link } from "react-router-dom";
import Loading from "../components/Loading";

const PopularPosts = () => {
  const context = useContext(PostContext);
  console.log(context);
  const { loading, popularPosts } = context;
  console.log(popularPosts);
  return (
    <section className="popular-post">
      <Title title="popular post" />
      <div className="popular-post-center">
        {loading ? (
          <Loading />
        ) : (
          popularPosts.map(popularPost => {
            return (
              <article key={popularPost.id} className="single-popular">
                <div className="img-container">
                  <img src={popularPost.image} alt="background-popular" />
                  <Link
                    to={`/posts/${popularPost.slug}`}
                    className="popular-link popular-btn"
                  >
                    read
                  </Link>
                </div>
                <div className="popular-info">
                  <h4>{popularPost.title}</h4>
                  <div className="popular-author">
                    <small>{`by ${popularPost.author}`}</small>
                  </div>
                </div>
              </article>
            );
          })
        )}
      </div>
    </section>
  );
};
export default PopularPosts;
