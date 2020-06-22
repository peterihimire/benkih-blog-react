import React from "react";
import HomePostList from "../components/HomePostList";
import image from "../images/blog-header.jpg";
import { Link } from "react-router-dom";

const HomePostContainer = () => {
  return (
    <section className="home-post-container">
      <div className="home-post-container-center">
        <article className="main-article-left">
          <HomePostList />
        </article>
        <aside className="sidebar-right">
          {/* <h5>This is aside container</h5> */}
          <article className="home-post2">
            <h3>ABOUT ME</h3>
            <div className="home-post-center2">
              <div className="home-post-img-container2">
                <img src={image} alt="post" style={{ width: "100%" }} />
              </div>
              <div className="home-post-text">
                <div className="home-post-title">
                  {/* <small>
                    <strong>
                      peter ihimire <span> Oct 13, 2014</span>
                    </strong>
                  </small> */}
                  <div className="md-description2">
                    <span>
                      <p>
                        Maecenas luctus facilisis lacus, et aliquet arcu cursus
                        vitae. Nulla dolor erat, iaculis in gravida quis,
                        pellentesque sed tortor. Aliquam varius euismod orci
                      </p>
                    </span>
                    <Link to="/">read more</Link>
                  </div>
                </div>
              </div>
            </div>
          </article>
        </aside>
      </div>
    </section>
  );
};

export default HomePostContainer;
