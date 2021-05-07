import React from "react";
import "./Body.css";
import Header from "./Header";

function Body({ spotify }) {
  return (
    <div className="body">
      <Header spotify={spotify} />
      {/* Now create header.js component */}

      {/* <h1>I am the Body!</h1> */}
    </div>
  );
}

export default Body;
