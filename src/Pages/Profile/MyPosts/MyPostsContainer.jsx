import React from "react";
import { connect } from "react-redux";
import { getAllPostsByUserId, likePost } from "../../../redux/posts-reducer";
import MyPosts from "./MyPosts";

class MyPostsAPIComponent extends React.Component {
  componentDidMount() {
    this.props.getAllPostsByUserId(this.props.currentUser.id);
  }

  componentDidUpdate(prevProps, prevState, snapshot) {
    if (this.props.myPostsAddNow.length !== prevProps.myPostsAddNow.length) {
      this.props.getAllPostsByUserId(this.props.currentUser.id);
    }
  }

  render() {
    return (
      <>
        <MyPosts myPosts={this.props} />
      </>
    );
  }
}

let mapStateToProps = (state) => {
  return {
    posts: state.posts.myPosts,
    currentUser: state.auth.currentUser,
    myPostsAddNow: state.posts.myPostsAddNow,
    liked: state.posts.liked,
    likes: state.posts.likes,
    users: state.posts.users,
  };
};

export default connect(mapStateToProps, { getAllPostsByUserId, likePost })(
  MyPostsAPIComponent
);
