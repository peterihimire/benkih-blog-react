import React, { useContext } from "react";
import { PostContext } from "../context";
import { Link } from "react-router-dom";
import Loading from "../components/Loading";
// import Title from "../components/Title";
// import { readableDate } from "../components/helpers";

const FeaturedPosts = () => {
  const context = useContext(PostContext);
  console.log(context);
  const { loading, featuredPosts } = context;
  // const { title, image, slug, author, date, id } = featuredPosts;
  console.log(featuredPosts);

  return (
    <section className="featured-posts">
      {/* <Title title="editors pick" /> */}
      <div className="featured-posts-center">
        {loading ? (
          <Loading />
        ) : (
          featuredPosts.map(featuredPost => {
            return (
              <article key={featuredPost.id} className="single-featured">
                <div className="img-container">
                  <img src={featuredPost.image} alt="background-featured" />

                  <div className="single-featured-hovered-div">
                    <h3>{featuredPost.title}</h3>
                    <p>{featuredPost.description}</p>
                    {/* <div className="featured-btn-div"> */}
                    <Link
                      to={`/posts/${featuredPost.slug}`}
                      className="featured-link featured-btn"
                    >
                      read
                    </Link>
                    {/* </div> */}
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
export default FeaturedPosts;
