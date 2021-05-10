import React, { useEffect } from "react";
import "./Footer.css";

//Center
import PlayCircleOutlineIcon from "@material-ui/icons/PlayCircleOutline";
import PauseCircleOutlineIcon from "@material-ui/icons/PauseCircleOutline";
import SkipPreviousIcon from "@material-ui/icons/SkipPrevious";
import SkipNextIcon from "@material-ui/icons/SkipNext";
import ShuffleIcon from "@material-ui/icons/Shuffle";
import RepeatIcon from "@material-ui/icons/Repeat";

//Footer
import { Grid, Slider } from "@material-ui/core";
import PlaylistPlayIcon from "@material-ui/icons/PlaylistPlay";
import VolumeDownIcon from "@material-ui/icons/VolumeDown";
import { useDataLayerValue } from "./DataLayer";

function Footer({ spotify }) {
  const [{ token, item, playing }, dispatch] = useDataLayerValue();

  useEffect(() => {
    spotify.getMyCurrentPlaybackState().then((r) => {
      // console.log("FOOTER r:", r);

      dispatch({
        type: "SET_PLAYING",
        playing: r.is_playing,
      });

      dispatch({
        type: "SET_ITEM",
        item: r.item,
      });
    });
  }, [spotify]);

  const handlePlayPause = () => {
    if (playing) {
      // spotify.pause();
      dispatch({
        type: "SET_PLAYING",
        playing: false,
      });
    } else {
      // spotify.play();
      dispatch({
        type: "SET_PLAYING",
        playing: true,
      });
    }
  };

  function truncate(text, maxTolerateLen) {
    return text?.length > maxTolerateLen
      ? text.substr(0, maxTolerateLen - 1) + "..."
      : text;
  }

  // const skipNext = () => {
  //   spotify.skipToNext();
  //   spotify.getMyCurrentPlaybackState().then((r) => {
  //     dispatch({
  //       type: "SET_ITEM",
  //       item: r.item,
  //     });
  //     dispatch({
  //       type: "SET_PLAYING",
  //       playing: true,
  //     });
  //   });
  // };

  // const skipPrevious = () => {
  //   spotify.skipToPrevious();
  //   spotify.getMyCurrentPlaybackState().then((r) => {
  //     dispatch({
  //       type: "SET_ITEM",
  //       item: r.item,
  //     });
  //     dispatch({
  //       type: "SET_PLAYING",
  //       playing: true,
  //     });
  //   });
  // };

  return (
    <div className="footer">
      <div className="footer_left">
        {/* <p> Album n song details</p> */}
        {item ? (
          <img
            className="footer_albumLogo"
            src={item?.album.images[0].url}
            alt={item?.name}
          />
        ) : (
          <img
            className="footer_albumLogo"
            src="https://www.freepnglogos.com/uploads/spotify-logo-png/spotify-download-logo-30.png"
            alt="Click a Song!"
          />
        )}
        {item ? (
          <div className="footer_songInfo">
            <h4>{truncate(item.name, 30)}</h4>
            <p>
              {truncate(
                item.artists.map((artist) => artist.name).join(", "),
                20
              )}
            </p>
          </div>
        ) : (
          <div className="footer_songInfo">
            <h4>No song is playing</h4>
            <p>...</p>
          </div>
        )}
      </div>
      <div
        className="footer_center"
        title="Cannot play music due to permission restrictions"
      >
        {/* <p> Player controls</p> */}
        <ShuffleIcon className="footer_green" />
        <SkipPreviousIcon className="footer_icon" />

        {playing ? (
          <PauseCircleOutlineIcon
            onClick={handlePlayPause}
            fontSize="large"
            className="footer_icon"
          />
        ) : (
          <PlayCircleOutlineIcon
            onClick={handlePlayPause}
            fontSize="large"
            className="footer_icon"
          />
        )}

        <SkipNextIcon className="footer_icon" />
        <RepeatIcon className="footer_green" />
      </div>
      <div className="footer_right">
        {/* <p>Volume controls</p> */}
        <Grid container spacing={2}>
          <Grid item>
            <PlaylistPlayIcon />
          </Grid>
          <Grid item>
            <VolumeDownIcon />
          </Grid>
          <Grid item xs>
            <Slider aria-labelledby="continuous-slider" />
          </Grid>
        </Grid>
      </div>

      {/* <h1> I'm the Footer!</h1> */}
    </div>
  );
}

export default Footer;
