import React from "react";
import "./Body.css";
import { useDataLayerValue } from "./DataLayer";
import Header from "./Header";
import PlayCircleFilledIcon from "@material-ui/icons/PlayCircleFilled";
import FavoriteIcon from "@material-ui/icons/Favorite";
import MoreHorizIcon from "@material-ui/icons/MoreHoriz";
import SongRow from "./SongRow";

function Body({ spotify }) {
  const [{ discover_weekly }, dispatch] = useDataLayerValue();

  // const playPlaylist = (id) => {
  //   spotify
  //     .play({
  //       context_uri: `spotify:playlist:63DcxWSkED0apC3HOb8ej0`,
  //     })
  //     .then((response) => {
  //       spotify.getMyCurrentPlayingTrack().then((r) => {
  //         dispatch({
  //           type: "SET_ITEM",
  //           item: r.item,
  //         });
  //         dispatch({
  //           type: "SET_PLAYING",
  //           playing: true,
  //         });
  //       });
  //     });
  // };

  // const playSong = (id) => {
  //   console.log("id being played :", id);
  // };

  // const playSong = (id) => {
  //   spotify
  //     .play({
  //       uris: [`spotify:track:${id}`],
  //     })
  //     .then((response) => {
  //       spotify.getMyCurrentPlayingTrack().then((r) => {
  //         dispatch({
  //           type: "SET_ITEM",
  //           item: r.item,
  //         });
  //         dispatch({
  //           type: "SET_PLAYING",
  //           playing: true,
  //         });
  //         console.log("item being played:", r.item);
  //       });
  //     });
  // };

  return (
    <div className="body">
      <Header spotify={spotify} />
      {/* Now create header.js component */}
      <div className="body_info">
        {/* discover weekly picture */}
        <img src={discover_weekly?.images[0]?.url} alt="" />

        <div className="body_infoText">
          <strong>PLAYLIST</strong>
          <h2>{discover_weekly?.name}</h2>
          <p>{discover_weekly?.description}</p>
        </div>
      </div>

      <div className="body_songs">
        {/* Body icons : big play button, etc */}
        <div className="body_icons" title="Coming Soon!">
          <PlayCircleFilledIcon
            className="body_shuffle"
            // onClick={playPlaylist}
          />
          <FavoriteIcon fontSize="large" style={{ color: "#13d15e" }} />
          <MoreHorizIcon />
        </div>

        {/* List of songs */}
        {discover_weekly?.tracks.items.map((item) => (
          <SongRow
            // onClick={playSong(item)}
            track={item.track}
            // dispatchToFooter={dispatchToFooter}
          />
        ))}
      </div>
      {/* <h1>I am the Body!</h1> */}
    </div>
  );
}

export default Body;
