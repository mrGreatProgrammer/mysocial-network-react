import React, { useState } from "react";
import { useEffect } from "react";

const ProfileStatus = (props) => {
  let [editMode, setEditMode] = useState(false);
  let [userStatus, setUserStatus] = useState(props.userStatus);
  
  useEffect(() => {
    setUserStatus(props.userStatus);
  }, [props.userStatus]);

  function activateEditMode() {
    setEditMode(true);
  }
  function deactivateEditMode() {
    setEditMode(false);
    props.updateUserStatus = userStatus;
  }
  function onChangeStatus(e) {
    setUserStatus(e.currentTarget.value);
  }

  return (
    <div className="profile__status">
      {!editMode ? (
        <div className="profile__page__status--description">
          <p onDoubleClick={activateEditMode}>
            {props.userStatus || "Double click to add your status..."}
          </p> 
        </div>
      ) : (
        <div className="profile__page__status--description">
          <input
            autoFocus={true}
            onBlur={deactivateEditMode}
            className="profile__status--input"
            type="text"
            value={userStatus}
            onChange={onChangeStatus}
          />
        </div>
      )}
    </div>
  );
};

export default ProfileStatus;
