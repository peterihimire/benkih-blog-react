import React from "react";
import Post from "./Post";
import { useContext } from "react";
import { PostContext } from "../Context";

const PostList = () => {
  const context = useContext(PostContext);
  const { posts } = context;
  console.log(context);

  return (
    <div className="post-list">
      {posts.map(item => {
        return <Post key={item.id} post={item} />;
      })}
    </div>
  );
};

export default PostList;
