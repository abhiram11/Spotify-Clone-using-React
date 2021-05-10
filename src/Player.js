import React from "react";
import "./Player.css";
import Sidebar from "./Sidebar";
import Body from "./Body";
import Footer from "./Footer";

function Player({ spotify }) {
  // 3 components : sidebar, body and footer all the way down, then create a js for each component!
  return (
    <div className="player">
      <div className="player_body">
        <Sidebar />
        <Body spotify={spotify} />
      </div>
      {/* Body, which also contains the header that stays at top! */}
      {/* add <h1> to check if components working or noi */}
      {/* <h1> Welcome to Spotify! You are logged in!</h1> */}
      {/* Footer */}
      <Footer spotify={spotify} />
    </div>
  );
}

export default Player;
