import React, { Component } from "react";
// import items from "./data";
import Client from "./Contentful";

Client.getEntries({
  content_type: "portfolioBlog"
}).then(response => console.log(response.items));

Client.getEntries({
  content_type: "portfolioProjects"
}).then(response => console.log(response.items));

const PostContext = React.createContext();

class PostProvider extends Component {
  state = {
    posts: [],
    sortedPosts: [],
    loading: true,
    isFixed: false,
    isOpen: false,
    isVisible: false
  };
  //getData
  getData = async () => {
    try {
      let response = await Client.getEntries({
        content_type: "portfolioBlog",
        order: "sys.createdAt"
      });
      let posts = this.formatData(response.items);
      this.setState({
        posts,
        sortedPosts: posts,
        loading: false
      });
    } catch (error) {
      console.log(error);
    }
  };

  componentDidMount() {
    // let posts = this.formatData(items);
    // console.log(posts);
    document.addEventListener("scroll", () => {
      this.toggleVisibility();
    });
    this.getData();
    // this.setState({ posts, loading: false, sortedPosts: posts });
  }
  openHandler = () => {
    this.setState({
      isOpen: true
    });
  };

  closeHandler = () => {
    this.setState({
      isOpen: false
    });
  };

  removeOverlay = () => {
    this.setState({
      isOpen: !this.state.isOpen
    });
  };
  toggleVisibility = () => {
    let position = window.pageYOffset;
    console.log(position);
    if (position >= 118.75) {
      this.setState({
        isFixed: true
      });
    } else {
      this.setState({
        isFixed: false
      });
    }
  };
  formatData(items) {
    let tempItems = items.map(item => {
      let id = item.sys.id;
      let image = item.fields.image.fields.file.url;
      let description = item.fields.blog.slice(0, 130) + "...";
      let post = { ...item.fields, id, image, description };
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
      <PostContext.Provider
        value={{
          ...this.state,
          getPost: this.getPost,
          openHandler: this.openHandler,
          closeHandler: this.closeHandler,
          removeOverlay: this.removeOverlay
        }}
      >
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
