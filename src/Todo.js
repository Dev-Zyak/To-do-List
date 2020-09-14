import React, { Component } from "react";

const Todo = (props) => {
  return <div className="todo">{props.todo ? props.todo : null}</div>;
};

export default Todo;
