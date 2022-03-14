import "./ProfilePage.css";
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import MyPostsContainer from "./MyPosts/MyPostsContainer";
import Loader from "../../components/Loader/Loader";

function ProfilePage(props) {
  return (
    <div className="profile__page">
      {!props.profile ? (
        <Loader />
      ) : (
        <>
          <ProfileInfo
            profile={props.currentUser}
            updateUserStatus={props.updateUserStatus}
          />
          <MyPostsContainer />
        </>
      )}
    </div>
  );
}

export default ProfilePage;
