import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { sendMessage } from "../../redux/chats-reducer";
import Input from "../InputForms/Input";

function AddMessage(props) {
  let [msg, setMsg] = useState("");
  let dispatch = useDispatch();

  function toAddMessage() {
    dispatch(sendMessage(props.currentUser.id, 1, msg));
  }

  return (
    <div className="message__add">
      <Input
        type="text"
        name="message"
        id="message"
        className="message--inp"
        value={msg}
        setValue={setMsg}
      />
      <button className="send__msg--btn" onClick={() => toAddMessage()}>
        send
      </button>
    </div>
  );
}

export default AddMessage;
