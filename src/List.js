import React, { Component, useState } from "react";
import Listitem from "./Listitem";
import Additem from "./Additem";

const Listcontainer = (props) => {
  const [list, setlist] = useState({});
  return (
    <div className="list">
      <Listitem />
      <Listitem />
      <Listitem />
      <Listitem />
      <Listitem />
      <Listitem />
      <Additem />
    </div>
  );
};

export default Listcontainer;
