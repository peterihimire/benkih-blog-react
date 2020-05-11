import React from "react";
import PostContainer from "../components/PostContainer";
import Hero from "../components/Hero";
import Banner from "../components/Banner";
import { Link } from "react-router-dom";
import Footer from "../components/Footer";

const Home = () => {
  return (
    <>
      <Hero>
        <Banner name="peter ihimire" title="personal blog" className="banner">
          <Link to="/" className="post-btn">
            all posts
          </Link>
        </Banner>
      </Hero>
      <PostContainer />
    </>
  );
};

export default Home;
