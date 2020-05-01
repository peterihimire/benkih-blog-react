import React, { Component } from "react";
import items from "./data";

class PostProvider extends Component {
  render() {
    console.log(items);
    return (
      <>
        <h1>hello from context</h1>
      </>
    );
  }
}

export default PostProvider;
