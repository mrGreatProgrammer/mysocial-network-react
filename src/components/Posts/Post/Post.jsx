import { useState } from "react";
import "./Post.css";
import defaultAvatar from "../../../imgs/images.png";

function Post(props) {
  const [photoPost, setPhotoPost] = useState(
    "http://localhost:4000" + props.posts.photo
  );

  return (
    <div className="post">
      <div className="post__info">
        <div className="profile__avatar">
          {/* {userAvatarFromServer === "avatar" ||
          userAvatarFromServer === "undefined" ? (
            <img src={defaultAvatar} alt="" className="user_avatar--img" />
          ) : (
            <img src={userAvatar} alt="" className="profile__avatar--img" />
          )} */}
        </div>
        <div className="profile_info-nickname">
          {/* <p className="user__name">{props.users.name}</p>
          <p className="user__second_name"> {props.users.secondName} </p> */}
        </div>
        <div className="post__info--date">{props.posts.created}</div>
      </div>
      <div className="post__content">
        <div className="post_content--title">{props.posts.title}</div>
        <div className="post__content--txt">{props.posts.textContent}</div>
        {props.posts.photo === "doesnt have photo" ||
        props.posts.photo === "photo" ? (
          <></>
        ) : (
          <div className="post__content--img">
            <img src={photoPost} alt="" className="post__content_photo--img" />
          </div>
        )}
      </div>
      <div className="post__btns">
        {props.posts.liked ? (
          <button
            className="post__btn--like"
            onClick={() => {
              props.disLikePost(props.posts.likes, props.posts.id);
            }}
          >
            <i className="fas fa-heart"></i>
            <span>{props.posts.likes}</span>
          </button>
        ) : (
          <button
            className="post__btn--like"
            onClick={() => {
              props.likePost(props.posts.likes, props.posts.id);
            }}
          >
            <i className="far fa-heart"></i>

            <span>{props.posts.likes}</span>
          </button>
        )}
      </div>
    </div>
  );
}

export default Post;
