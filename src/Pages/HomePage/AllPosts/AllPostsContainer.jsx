import React from "react";
import { connect } from "react-redux";
import Loader from "../../../components/Loader/Loader";
import {
  getAllPosts,
  likePost,
  disLikePost,
} from "../../../redux/posts-reducer";
import AllPosts from "./AllPosts";

class PostsAPIComponent extends React.Component {
  componentDidMount() {
    this.props.getAllPosts();
  }

  render() {
    return (
      <>
        {this.props.isFetching ? <Loader /> : <></>}
        <AllPosts posts={this.props} />
      </>
    );
  }
}

let mapStateToProps = (state) => {
  return {
    posts: state.posts.posts,
    users: state.posts.users,
    isFetching: state.posts.isFetching,
  };
};

export default connect(mapStateToProps, {
  getAllPosts,
  likePost,
  disLikePost,
  // setUsers,
})(PostsAPIComponent);
