import React from "react";
import { useDataLayerValue } from "./DataLayer";
// import Sidebar from "./Sidebar";
import "./SidebarOption.css";

//capital I means we'll pass Icon components!

function truncate(text, maxTolerateLen) {
  return text?.length > maxTolerateLen
    ? text.substr(0, maxTolerateLen - 1) + "..."
    : text;
}

function SidebarOption({ playlist, Icon, title }) {
  const [{ spotify, discover_weekly }, dispatch] = useDataLayerValue();

  const sidebarPlaylistClick = (id) => {
    console.log("Playlist.name:", playlist?.name);

    console.log("playlist Clicked:", playlist?.name);

    if (playlist) {
      spotify.getPlaylist(playlist.id).then((response) =>
        dispatch({
          type: "SET_DISCOVER_WEEKLY",
          discover_weekly: response,
        })
      );
    }

    // if (playlist) {
    //   dispatch({
    //     type: "SET_DISCOVER_WEEKLY",
    //     discover_weekly: playlist,
    //   });
    //   console.log("clicked on playlist found: ", playlist);
    // }
  };

  return (
    <div
      className="sidebarOption"
      onClick={sidebarPlaylistClick}
      title="Coming Soon!"
    >
      {/*if we have icon then render Icon with classname */}
      {Icon && <Icon className="sidebarOption_icon"></Icon>}
      {Icon ? <h4>{truncate(title, 25)}</h4> : <p>{truncate(title, 25)}</p>}
    </div>
  );
}

export default SidebarOption;
