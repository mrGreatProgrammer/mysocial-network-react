import { useState } from "react";
import "./ProfileUser.css";

function ProfileUser(props) {
  const [image, setImage] = useState(
    "http://localhost:4000" + props.data.data.currentUser.avatar
  );

  return (
    <div className="profile__user">
      <div className="profile__user-avatar">
        {!props.data.data.currentUser.avatar ? ( <p>hello</p> ):(<img src={image} alt="" className="profile__user--avatar-img" />)}
      </div>
        {/* <p>{props.data.data.currentUser.name}</p> */}
      <div className="profile__user-logout__btn">
        <button className="log__out--btn" onClick={props.data.data.logout}>
          {" "}
          <i className="fas fa-sign-out-alt"></i> Log out
        </button>
      </div>
    </div>
  );
}

export default ProfileUser;
