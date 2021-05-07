import React from "react";
import "./Footer.css";

//Center
import PlayCircleOutlineIcon from "@material-ui/icons/PlayCircleOutline";
import SkipPreviousIcon from "@material-ui/icons/SkipPrevious";
import SkipNextIcon from "@material-ui/icons/SkipNext";
import ShuffleIcon from "@material-ui/icons/Shuffle";
import RepeatIcon from "@material-ui/icons/Repeat";

//Footer
import { Grid, Slider } from "@material-ui/core";
import PlaylistPlayIcon from "@material-ui/icons/PlaylistPlay";
import VolumeDownIcon from "@material-ui/icons/VolumeDown";

function Footer() {
  return (
    <div className="footer">
      <div className="footer_left">
        {/* <p> Album n song details</p> */}
        <img
          className="footer_albumLogo"
          src="https://static2.cbrimages.com/wordpress/wp-content/uploads/2021/01/Attack-on-Titan-Season-4-poster-Eren-header.jpg?q=50&fit=crop&w=943&h=500&dpr=1.5"
          alt="Album Image"
        />
        <div className="footer_songInfo">
          <h4>You See Big Girl/T:T</h4>
          <p>Attack on Titan</p>
        </div>
      </div>
      <div className="footer_center">
        {/* <p> Player controls</p> */}
        <ShuffleIcon className="footer_green" />
        <SkipPreviousIcon className="footer_icon" />
        <PlayCircleOutlineIcon fontSize="large" className="footer_icon" />
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
            <Slider aria-aria-labelledby="continuous-slider" />
          </Grid>
        </Grid>
      </div>

      {/* <h1> I'm the Footer!</h1> */}
    </div>
  );
}

export default Footer;
