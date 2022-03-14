// import React from 'react'
import { useDispatch } from "react-redux";
import { chattingWithAC } from "../../../redux/chats-reducer";
import "./Chat.css";

function Chat(props) {
  let dispatch = useDispatch();

  return (
    <div
      className="chat"
      onClick={() => dispatch(chattingWithAC(props.chat.id))}
    >
      {props.chat.chattingWith ? (
        <div className="chat__name--active">{props.chat.name}</div>
      ) : (
        <div className="chat__name">{props.chat.name}</div>
      )}
    </div>
  );
}

export default Chat;
