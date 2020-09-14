import React from "react";
import Loginout from "./Loginout";
import "./css/style.css";
import List from "./List";

function App() {
  return (
    <div className="app">
      {/* <Navbar /> */}
      <List
        title={"Title example"}
        description={
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce varius ex nisl, eget viverra dui sollicitudin et. Praesent pellentesque blandit varius."
        }
        key={null}
      />
    </div>
  );
}

export default App;
