import React from "react";
import AddMessage from "../../../components/AddMessage/AddMessage";
import Message from "./Message/Message";

function Messages(props) {
  return (
    <div className="messages">
      <div className="messages__holder">
        {props.messages.map((m) =>
          props.currentUser.id === m.fromWho ? (
            <Message message={m} className="message from_me" />
          ) : (
            <Message message={m} className="message not_from_me " />
          )
        )}
      </div>
      <AddMessage currentUser={props.currentUser} />
    </div>
  );
}

export default Messages;
