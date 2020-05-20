import React, { useContext } from "react";
import { PostContext } from "../Context";
import { Link } from "react-router-dom";
// import Title from "../components/Title";
// import { readableDate } from "../components/helpers";

const FeaturedPosts = () => {
  const context = useContext(PostContext);
  console.log(context);
  const { featuredPosts } = context;
  // const { title, image, slug, author, date, id } = featuredPosts;
  console.log(featuredPosts);

  return (
    <section className="featured-posts">
      {/* <Title title="featured post" /> */}
      <div className="featured-posts-center">
        {featuredPosts.map(featuredPost => {
          return (
            <article key={featuredPost.id} className="single-featured">
              <div className="img-container">
                <img src={featuredPost.image} alt="background-featured" />
                <Link
                  to={`/posts/${featuredPost.slug}`}
                  className="featured-link featured-btn"
                >
                  read
                </Link>
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
};
export default FeaturedPosts;
