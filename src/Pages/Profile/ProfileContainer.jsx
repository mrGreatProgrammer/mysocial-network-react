import React from "react";
import { connect } from "react-redux";
import ProfilePage from "./ProfilePage";
import { getUserProfile, updateUserStatus } from "../../redux/profile-reducer";
import { withRouter } from "../../hoc/withRouter";
import { withAuthRedirect } from "../../hoc/withAuthRedirect";
import { compose } from "redux";

class ProfileContainer extends React.Component {
  refreshProfile() {
    this.props.getUserProfile(this.props.currentUser.id);
  }
  componentDidMount() {
    this.props.getUserProfile(this.props.currentUser.id);
  }

  componentDidUpdate(prevProps, prevState, snapshot) {
    if (prevProps.profile.avatar !== this.props.profile.avatar) {
      this.refreshProfile();
    }
    
  }

  render() {
    return (
      <>
        <ProfilePage
          {...this.props}
          profile={this.props.profile[0]}
          updateUserStatus={this.props.updateUserStatus}
        />
      </>
    );
  }
}

let mapStateToProps = (state) => ({
  profile: state.profilePage.profile,
  currentUser: state.auth.currentUser,
  myPosts: state.posts.myPosts,
  isAuth: state.auth.isAuth,
});

export default compose(
  connect(mapStateToProps, { getUserProfile, updateUserStatus }),
  withRouter,
  withAuthRedirect
)(ProfileContainer);
