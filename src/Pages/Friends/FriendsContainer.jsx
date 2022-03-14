import React from "react";
import { connect } from "react-redux";
import Loader from "../../components/Loader/Loader";
import {
  setUsers,
  setCurrentPageAC,
  follow,
  unfollow,
} from "../../redux/friends-reducer";
import Friends from "./Friends";

class FriendsConatainer extends React.Component {
  componentDidMount() {
    this.props.setUsers(this.props.currentPage, this.props.pageSize);
  }

  onPageChanged = (pageNumber) => {
    this.props.setUsers(pageNumber, this.props.pageSize);
  };

  render() {
    return (
      <>
        {this.props.isFetching ? <Loader /> : <></>}
        <Friends
          users={this.props.friends}
          totalUsersCount={this.props.totalUsersCount}
          currentPage={this.props.currentPage}
          pageSize={this.props.pageSize}
          onPageChanged={this.onPageChanged}
          follow={this.props.follow}
          unfollow={this.props.unfollow}
        />
      </>
    );
  }
}

let mapStateToProps = (state) => ({
  friends: state.friendsPage.friends,
  currentPage: state.friendsPage.currentPage,
  pageSize: state.friendsPage.pageSize,
  totalUsersCount: state.friendsPage.totalUsersCount,
  isFetching: state.friendsPage.isFetching,
});

export default connect(mapStateToProps, {
  setUsers,
  setCurrentPageAC,
  follow,
  unfollow,
})(FriendsConatainer);
