import React, { Component } from "react";
import Todo from "./Todo";
import Remove from "./Remove";

const Listitem = (props) => {
  return (
    <div className="listitem">
      <Todo todo={props.todo} />
      <div className="buttonbox">
        <Remove id={props.index} removetodo={props.removetodo} />
      </div>
    </div>
  );
};

export default Listitem;
