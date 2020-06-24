import React from "react";
import Hero from "../components/Hero";
// import Banner from "../components/Banner";
// import { Link } from "react-router-dom";
import FeaturedPosts from "../components/FeaturedPosts";
// import PopularPosts from "../components/PopularPosts";
import CategoriesList from "../components/CategoriesList";
import HomePostContainer from "../components/HomePostContainer";
import HeaderCarousel from "../components/HeaderCarousel";

const Home = () => {
  return (
    <>
      <Hero>
        <HeaderCarousel />
        {/* <Banner name="peter ihimire" title="personal blog" className="banner">
          <Link to="/posts" className="post-btn">
            all posts
          </Link>
        </Banner> */}
      </Hero>

      <CategoriesList />
      <HomePostContainer />
      <FeaturedPosts />
      {/* <PopularPosts /> */}
    </>
  );
};

export default Home;
