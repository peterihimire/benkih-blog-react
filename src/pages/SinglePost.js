import React, { Component } from "react";
import { Link } from "react-router-dom";
import { PostContext } from "../Context";

class SinglePost extends Component {
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
    const { title, author, image, body, date } = copy;
    console.log(post, typeof post);
    console.log(getPost);
    return (
      <>
        <section className="single-post">
          <div className="single-post-center">
            <div className="single-post-content">
              <Link to="/" className="single-post-btn">
                back to all posts
              </Link>
              <div className="single-post-title">
                <h1>{title}</h1>
                <small>
                  {author}/{date}
                </small>
              </div>

              <img
                src={image}
                alt="single-post"
                className="single-post-image"
              />
              <p>{body}</p>
            </div>
          </div>
        </section>
      </>
    );
  }
}

export default SinglePost;
