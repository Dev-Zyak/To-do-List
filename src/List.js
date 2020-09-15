import React, { Component, useState } from "react";
import Listitem from "./Listitem";
import Additem from "./Additem";
import Modal from "./Modal";
import { getByPlaceholderText } from "@testing-library/react";

const Listcontainer = (props) => {
  const [list, setlist] = useState([
    "get gold",
    "eat",
    "sleep",
    "repeat",
    "gainz",
    "dayz",
  ]);
  const [todotext, settodotext] = useState("");
  function addtodo() {
    setlist([...list, todotext]);
    settodotext("");
  }

  function removetodo(index) {
    setlist((prevlist) => prevlist.filter((listtodo, i) => i != index));
  }
  return (
    <div className="list">
      {list != null
        ? list.map((todo, index) => {
            return (
              <Listitem
                todo={todo}
                key={index}
                index={index}
                removetodo={removetodo}
              />
            );
          })
        : null}
      <Additem />
      <Modal todotext={todotext} settodotext={settodotext} addtodo={addtodo} />
    </div>
  );
};

export default Listcontainer;
