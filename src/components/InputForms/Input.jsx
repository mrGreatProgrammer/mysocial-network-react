import React from "react";

const Input = (props) => {
  return (
    <input
      onChange={(event) => props.setValue(event.target.value)}
      value={props.value}
      type={props.type}
      name={props.name}
      id={props.id}
      className={props.className}
      placeholder={props.placeholder}
    />
  );
};

export default Input;
