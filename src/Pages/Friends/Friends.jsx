import React from "react";
import Paginator from "../../components/Paginator/Paginator";
import User from "./User/User";

function Friends(props) {
  return (
    <div>
      friends page
      {props.users.map((u) => (
        <User
          u={u}
          key={u.userId}
          follow={props.follow}
          unfollow={props.unfollow}
        />
      ))}
      <Paginator
        totalUsersCount={props.totalUsersCount}
        currentPage={props.currentPage}
        pageSize={props.pageSize}
        onPageChanged={props.onPageChanged}
      />
    </div>
  );
}

export default Friends;
