import { NavLink } from "react-router-dom";
import "./User.css";
import defaultAvatar from "../../../imgs/images.png";

function User(props) {
  const imageAvatar = "http://localhost:4000" + props.u.avatar;

  return (
    <div className="user">
      <div className="user--info">
        <NavLink to={"/profile/" + props.u.userId}>
          <div className="user_avatar-div">
            {/* <p>{"http://localhost:4000" + props.u.avatar}</p> */}
            {props.u.avatar === "avatar" || props.u.avatar === "undefined" ? (
              <img src={defaultAvatar} alt="" className="user_avatar--img" />
            ) : (
              <img src={imageAvatar} alt="" className="user_avatar--img" />
            )}
          </div>
        </NavLink>
        <div className="user--info_txt">
          <div className="user_name">
            {props.u.name} {props.u.secondName}
          </div>
          <div className="user_status">{props.u.userStatus}</div>
        </div>
      </div>
      {props.u.followed ? (
        <button
          className="unfollow"
          onClick={() => {
            props.unfollow(props.u.userId);
          }}
        >
          unfollow
        </button>
      ) : (
        <button
          className="follow"
          onClick={() => {
            props.follow(props.u.userId);
          }}
        >
          follow
        </button>
      )}
    </div>
  );
}

export default User;
