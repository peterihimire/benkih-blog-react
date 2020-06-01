import React from "react";
import { withPostConsumer } from "../context";
import PostList from "../components/PostList";
import { useContext } from "react";
import { PostContext } from "../context";
import Title from "../components/Title";
import Loading from "../components/Loading";

const PostContainer = () => {
  const context = useContext(PostContext);
  console.log(context);
  const { loading, posts } = context;
  console.log(posts);
  return (
    <section className="post-container">
      <div className="post-container-center">
        <Title title="all post" />
        {loading ? <Loading /> : <PostList />}
      </div>
    </section>
  );
};

export default withPostConsumer(PostContainer);
