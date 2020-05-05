import React, { Component } from "react";
import items from "./data";

const PostContext = React.createContext();

class PostProvider extends Component {
  state = {
    posts: [],
    sortedPosts: [],
    loading: true
  };

  componentDidMount() {
    let posts = this.formatData(items);
    console.log(posts);
    this.setState({ posts, loading: false, sortedPosts: posts });
  }
  formatData(items) {
    let tempItems = items.map(item => {
      let id = item.sys.id;
      let image = item.image.fields.file.url;
      let post = { ...item, id, image };
      console.log(post);
      return post;
    });
    console.log(tempItems);
    return tempItems;
  }

  getPost = slug => {
    let tempPosts = [...this.state.posts];
    const post = tempPosts.find(post => {
      return post.slug === slug;
    });
    console.log(post);
    console.log(tempPosts);
    return post;
  };

  render() {
    return (
      <PostContext.Provider value={{ ...this.state, getPost: this.getPost }}>
        {this.props.children}
      </PostContext.Provider>
    );
  }
}
const PostConsumer = PostContext.Consumer;

export const withPostConsumer = Component => {
  return function ConsumerWrapper(props) {
    return (
      <PostConsumer>
        {value => <Component {...props} context={value} />}
      </PostConsumer>
    );
  };
};

export { PostProvider, PostConsumer, PostContext };
