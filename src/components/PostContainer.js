import React from "react";
import Title from "../components/Title";
import { withPostConsumer } from "../Context";
import PostList from "../components/PostList";
import { useContext } from "react";
import { PostContext } from "../Context";

const PostContainer = () => {
  const context = useContext(PostContext);
  console.log(context);
  const { posts } = context;
  console.log(posts);
  return (
    <section className="post-container">
      <Title title="peter ihimire" subtitle="personal blog" />
      <PostList />
    </section>
  );
};

export default withPostConsumer(PostContainer);
