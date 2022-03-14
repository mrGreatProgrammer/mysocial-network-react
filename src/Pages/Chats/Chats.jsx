import React from "react";
import Chat from "./Chat/Chat";
import "./Chats.css";

function Chats(props) {
  return (
    <div className="chats">
      {props.chats.map((chat) => (
        <Chat chat={chat} key={chat.id} />
      ))}
    </div>
  );
}

export default Chats;
