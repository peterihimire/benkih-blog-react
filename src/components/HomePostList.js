import React from "react";
import HomePost from "../components/HomePost";
import { PostConsumer } from "../context";

const HomePostList = () => {
  return (
    <PostConsumer>
      {value => {
        console.log(value);
        const { posts } = value;
        console.log(posts);
        return (
          <div className="home-post-list">
            {posts.map(item => {
              return <HomePost key={item.id} blog={item} />;
            })}
          </div>
        );
      }}
    </PostConsumer>
  );
};

export default HomePostList;
