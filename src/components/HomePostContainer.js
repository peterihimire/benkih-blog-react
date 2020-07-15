import React from "react";
import HomePostList from "../components/HomePostList";
import image from "../images/blog-header.jpg";
import { Link } from "react-router-dom";
import { PostConsumer } from "../context";
import { readableDate } from "../components/helpers";
import { FaCalendarAlt } from "react-icons/fa";
import Loading from "../components/Loading";
import Search from "../components/Search";

const HomePostContainer = () => {
  return (
    <section className="home-post-container">
      <div className="home-post-container-center">
        <article className="main-article-left">
          <HomePostList />
        </article>
        <aside className="sidebar-right">
          {/* <h5>This is aside container</h5> */}
          <Search />
          <article className="home-post2">
            <div className="aside-title">
              <h3>about me</h3>
            </div>
            <div className="home-post-center2">
              <div className="home-post-img-container2">
                <img src={image} alt="post" style={{ width: "100%" }} />
              </div>
              <div className="home-post-text">
                <div className="home-post-title2">
                  {/* <small>
                    <strong>
                      peter ihimire <span> Oct 13, 2014</span>
                    </strong>
                  </small> */}
                  <div className="md-description2">
                    <span>
                      <p>
                        Based in Nigeria, I am a seasoned front-end web
                        developer, passionate about building excellent softwares
                        that make a difference. I specialize...
                      </p>
                    </span>
                    <Link to="/about" className="btn aside-about-btn">
                      read more
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </article>
          <PostConsumer>
            {value => {
              console.log(value);
              const { popularPosts, loading } = value;
              console.log(popularPosts, loading);
              return (
                <div className="aside-popular-list">
                  <div className="aside-title">
                    <h3>popular post</h3>
                  </div>
                  <div className="aside-popular-list-center">
                    {loading ? (
                      <Loading />
                    ) : (
                      popularPosts.map(item => {
                        return (
                          <article className="aside-popular-post" key={item.id}>
                            <div className="aside-popular-post-center">
                              <Link to={`/posts/${item.slug}`}>
                                <img src={item.image} alt="popular" />
                              </Link>

                              <div className="aside-popular-post-title">
                                <Link to={`/posts/${item.slug}`}>
                                  <p>{item.title}</p>
                                </Link>

                                <small>
                                  <FaCalendarAlt />
                                  <span>{readableDate(item.date)}</span>
                                </small>
                              </div>
                            </div>
                          </article>
                        );
                      })
                    )}
                  </div>
                </div>
              );
            }}
          </PostConsumer>
        </aside>
      </div>
    </section>
  );
};

export default HomePostContainer;
