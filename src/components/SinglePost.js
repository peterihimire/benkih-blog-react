import React, { Component } from "react";
import { Link } from "react-router-dom";
import { PostContext } from "../context";
import MD from "react-markdown";
import { readableDate } from "../components/helpers";

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
      <section className="single-post">
        <Link to="/" className="single-pos-btn">
          back to all post
        </Link>
        <div className="single-post-title">
          <h1>{title}</h1>
          <small>
            {author}/{date}
          </small>
        </div>

        <img src={image} alt="post-main-image" className="post-image" />
        <MD source={body} />
      </section>
    );
  }
}

export default SinglePost;
