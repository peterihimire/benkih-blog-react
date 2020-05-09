import React from "react";
import { withPostConsumer } from "../Context";
import PostList from "../components/PostList";
import { useContext } from "react";
import { PostContext } from "../Context";
import Title from "../components/Title";

const PostContainer = () => {
  const context = useContext(PostContext);
  console.log(context);
  const { posts } = context;
  console.log(posts);
  return (
    <section className="post-container">
      <div className="post-container-center">
        <Title title="all post" />
        <PostList />
      </div>
    </section>
  );
};

export default withPostConsumer(PostContainer);
