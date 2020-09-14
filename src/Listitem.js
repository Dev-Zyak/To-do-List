import React, { Component } from "react";
import Todo from "./Todo";
import Complete from "./Complete";
import Uncomplete from "./Uncomplete";
import Remove from "./Remove";

const Listitem = (props) => {
  return (
    <div className="listitem">
      <Todo todo={"Todo example"} />
      <div className="buttonbox">
        <Remove />
      </div>
    </div>
  );
};

export default Listitem;
