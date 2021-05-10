import React from "react";
import { useDataLayerValue } from "./DataLayer";
import "./SongRow.css";

function SongRow({ track }) {
  // console.log("track:", track);

  const [{ item }, dispatch] = useDataLayerValue();

  const dispatchToFooter = () => {
    console.log("item being played:", track.name);
    dispatch({
      type: "SET_ITEM",
      item: track,
    });
  };

  // const handlePlayPause = () => {
  //   if (playing) {
  //     spotify.pause();
  //     dispatch({
  //       type: "SET_PLAYING",
  //       playing: false,
  //     });
  //   } else {
  //     spotify.play();
  //     dispatch({
  //       type: "SET_PLAYING",
  //       playing: true,
  //     });
  //   }
  // };

  return (
    <div className="songRow" onClick={dispatchToFooter}>
      <img className="songRow_album" src={track.album.images[0].url} alt="" />
      <div className="songRow_info">
        <h1>{track.name}</h1>
        <p>
          {track.artists.map((artist) => artist.name).join(", ")} , Album:{" "}
          {track.album.name}
        </p>
      </div>
    </div>
  );
}

export default SongRow;
