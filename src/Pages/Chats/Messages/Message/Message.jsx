import React from "react";
import "./Message.css";

function Message(props) {
  console.log(props.message);
  return (
    <div className={props.className}>
      <div className="message__sent_at">{props.message.sentAt}</div>
      <div className="message__txt">{props.message.textMessage}</div>
    </div>
  );
}

export default Message;
