import React, { Component } from "react";

const Remove = (props) => {
  return (
    <div
      className="remove"
      onClick={() => {
        props.removetodo(props.id, props.todo);
        console.log(props.id, props.todo);
      }}
    >
      <div className="left"></div>
      <div className="right"></div>
    </div>
  );
};

export default Remove;
