import React, { Component } from "react";
import { Link } from "react-router-dom";
import { PostContext } from "../Context";
import MD from "react-markdown";
import { readableDate } from "../components/helpers";
// import SinglePost from "../components/SinglePost";

class MainBlog extends Component {
  constructor(props) {
    super(props);
    console.log(props);
    this.state = {
      slug: this.props.match.params.slug
    };
  }
  static contextType = PostContext;

  render() {
    const { getPost } = this.context;
    const post = getPost(this.state.slug);
    const copy = { ...post };
    console.log(copy);
    const { title, author, image, blog, date } = copy;
    console.log(blog);
    console.log(post, typeof post);
    console.log(getPost);
    return (
      <section className="single-post">
        <div className="single-post-center">
          <div className="single-post-content">
            <Link to="/" className="single-post-btn">
              back to all posts
            </Link>
            <div className="single-post-title">
              <h1>{title}</h1>
              <small>
                {author}/{readableDate(date)}
              </small>
            </div>

            <img
              src={image}
              width="100%"
              alt="single-post"
              className="single-post-image"
            />
            <div className="single-post-body">
              <MD source={blog} />
            </div>
          </div>
        </div>
      </section>
    );
  }
}
export default MainBlog;
