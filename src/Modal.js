import React, { Component } from "react";

const Modal = (props) => {
  return (
    <div className="modal">
      <h1>Add todo</h1>
      <form className="modalform">
        <input
          className="modalinput"
          onChange={(e) => {
            props.settodotext(e.target.value);
          }}
        />
        <button
          onClick={(e) => {
            e.preventDefault();
            props.addtodo();
            props.settodotext("");
            document.querySelector(".modalinput").value = "";
            document.querySelector(".modal").classList.remove("modal_show");
          }}
        >
          +
        </button>
      </form>
    </div>
  );
};

export default Modal;
