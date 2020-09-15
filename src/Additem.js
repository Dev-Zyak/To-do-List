import React, { Component } from "react";

const Additem = (props) => {
  return (
    <div
      className="additem"
      onClick={(e) => {
        document.querySelector(".modal").classList.add("modal_show");

        e.preventDefault();
      }}
    >
      <span>+</span>
    </div>
  );
};

export default Additem;
