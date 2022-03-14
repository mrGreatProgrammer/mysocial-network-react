import { useState } from "react";
import { useDispatch } from "react-redux";
import { profileAPI } from "../../../api/api";
import profileImg from "../../../imgs/141023_104357_Assassins-Creed-Unity-Arno.0.0.jpg";
import { upLoadAvatar } from "../../../redux/profile-reducer";
import "./ProfileInfo.css";
import ProfileStatus from "./ProfileStatus";

function ProfileInfo(props) {
  const dispatch = useDispatch();
  const [image, setImage] = useState(
    "http://localhost:4000" + props.profile.avatar
  );

  function imageHandler(e) {
    const file = e.target.files[0];
    const formData = new FormData();
    formData.append("image", file);

    profileAPI.upLoadAvatar(props.profile.id, formData);
    // dispatch(upLoadAvatar(file));
    setImage("http://localhost:4000" + props.profile.avatar);
  }

  return (
    <div className="profile__info">
      <div className="profile__page-avatar">
        <img src={image} alt="" className="profile__page-avatar--img" />
        {/* {props.isOwner && <input type={"file"} onChange={onMainPhotoSelected}/>} */}
      </div>
      <div className="profile__page--avatar__change">
        <input
          type="file"
          name="image"
          accept="image/*"
          multiple={false}
          onChange={imageHandler}
          className="profile__page--avatar__change--input"
        />
      </div>
      <div className="profile__page-name">
        <p>{props.profile.name}</p>
        <p>{props.profile.second_name}</p>
      </div>
      <div className="profile__page-description">
        <ProfileStatus {...props} updateUserStatus={props.updateUserStatus} />
      </div>
    </div>
  );
}

export default ProfileInfo;
