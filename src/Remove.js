import React, { Component } from "react";

const Remove = (props) => {
  return (
    <div
      className="remove"
      onClick={() => {
        props.removetodo(props.id);
        console.log(props.id);
      }}
    >
      <div className="left"></div>
      <div className="right"></div>
    </div>
  );
};

export default Remove;
