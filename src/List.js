import React, { Component, useState, useEffect, useLayoutEffect } from "react";
import Listitem from "./Listitem";
import Additem from "./Additem";
import Modal from "./Modal";

const Listcontainer = (props) => {
  const [list, setlist] = useState([]);
  const [todotext, settodotext] = useState("");
  const [db, setdb] = useState();

  function addtodo() {
    setlist([...list, { todo: todotext }]);
    add({ todo: todotext });
    settodotext("");
  }

  function add(todo) {
    const transaction = db.transaction("list", "readwrite").objectStore("list");
    const request = transaction.add(todo);

    request.onsuccess = () => {
      console.log("todo added to the DB", request.result);

      getalldata();
    };

    request.onerror = () => {
      console.log("Error", request.error);
    };
  }

  function removetodo(index, todo) {
    remove(todo);
    //setlist((prevlist) => prevlist.filter((listtodo, i) => i != index));
  }

  function remove(todo) {
    console.log(todo);
    const transaction = db.transaction("list", "readwrite").objectStore("list");
    const request = transaction.delete(todo);

    request.onsuccess = () => {
      console.log("Item sucessfully removed!");
      getalldata();
    };
  }

  function getalldata() {
    console.log(123);
    const request = db.transaction("list").objectStore("list").getAll();

    request.onsuccess = () => {
      console.log(request.result);
      setlist(request.result);
    };
  }

  useEffect(() => {
    const request = indexedDB.open("todolist");

    request.onerror = () => {
      console.log("indexedDB Error", request.error);
    };

    request.onsuccess = () => {
      console.log("IndexedDB Sucess");
      setdb(request.result);
    };

    request.onupgradeneeded = () => {
      const db = request.result;
      if (!db.objectStoreNames.contains("list")) {
        db.createObjectStore("list", { keyPath: "todo" });
        console.log("created");
      } else {
      }
    };
  }, []);
  useLayoutEffect(() => {
    if (db) {
      getalldata();
    } else {
      console.log(123);
    }
  }, [db]);
  return (
    <div className="list">
      {list.length > 0 && list != null
        ? list.map((todo, index) => {
            return (
              <Listitem
                todo={todo.todo}
                key={index}
                index={index}
                removetodo={removetodo}
              />
            );
          })
        : null}
      <Additem />
      <Modal
        todotext={todotext}
        settodotext={settodotext}
        addtodo={addtodo}
        remove={remove}
      />
    </div>
  );
};

export default Listcontainer;
