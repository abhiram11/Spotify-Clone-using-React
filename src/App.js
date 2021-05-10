import { useEffect, useState } from "react";
import SpotifyWebApi from "spotify-web-api-js";
import "./App.css";
import Login from "./Login";
import { getTokenFromUrl } from "./spotify";
import Player from "./Player";
import { useDataLayerValue } from "./DataLayer";

// 2:47:00, 2:58:30 and 2:59:50 useEffect, 3:05:20 production syntax use _ for temporary/local variables
// 3:14:40 regarding upwork
// 3:22:00 prop drilling and avoid it, 3:23:00 react CONTEXT (ULTRA POWERFUL, ~DATA STRUCTURE down the GUTTER?~ aka DATA LAYER) is new, made by react, simpler to use than redux
// 3:31:00 explaining DataLayer creation, inputs given, results shown, CHILDREN = whatever is wrapped inside the DataLayer
// 3:37:00 "ACTION" in reducer, e.g. pushing the user in data layer is an ACTION,
// 3:42:00 to grab anything from data layer, "dispatch shoots to the DataLayer"
// 3:43:40 CONTEXT, Data Layer explained cleanly in amazon project by them as well.
//  3:45:00 to learn STATE MANAGEMENT API, Learn RECOIL
//3:48:10 const [{ user }, dispatch] = useDataLayerValue(); can be used anywhere to pull the user from the DATA LAYER!
// 4:05:40 body takes 80% and sidbar 20%...
// 4:10.20 what does linear gradient mean in background color, what is (transparent, rgba) as well
// 4:11:50 what is viewheight, what is 100vh
// 4:27:50 and 4:28:30 Icon and Title in sidebar are two children in one container, make them in one row using FLEX
// 4:37:00 we are using only the required part from the data layer, effective and optimized!
// 4:42:00 Three containers, equally spaced out as footer
//4:48:00 new way to write padding, 0 100px
// 4:50:00 slider gives headaches, GRID usage, why used..etc..
// 4:57:00 footer buttons and their hover, transition, why material UI given !important tag in css, MaterialUI-Slider class in CSS
// 5:12:00 the body can be made using banner like netflix, or just in one component to reduce stress on build probably
// 5:17:00 height 20vw VW makes the size responsive!!

const spotify = new SpotifyWebApi();

function App() {
  // const [token, setToken] = useState(null);
  const [{ user, token }, dispatch] = useDataLayerValue(); // {} used to PULL info from data layer
  // Alternative : const [DataLayer, dispatch] = useDataLayerValue();
  // and then DataLayer.user

  useEffect(() => {
    const hash = getTokenFromUrl(); //when we get redicrected back from spotify, we need that token
    console.log("Hash  Received : ", hash);
    window.location.hash = "";
    const _token = hash.access_token; //regular json
    //NOW USE THIS TOKEN TO CONNECT TO OFFICIAL SPOTIFY
    //for security reasons, we dont want token to sit/stay in the URL
    if (_token) {
      spotify.setAccessToken(_token);

      dispatch({
        type: "SET_TOKEN",
        token: _token,
      });

      //After getting the logged in page, now use this KEY to talk to spotify
      // setToken(_token);

      spotify.getMe().then((user) => {
        console.log("GetME User :", user);
        dispatch({
          type: "SET_USER",
          user: user, //can also just send "user" instead of "user : user"
        });
      }); //fetch my user info! Returns a promise -> so async used!

      //getUserPlaylists returns a promise, so async (then) used! then gives playlists which are dispatched
      // to datalayer
      spotify.getUserPlaylists().then((playlists) => {
        console.log("Playlists in App:", playlists);
        dispatch({
          type: "SET_PLAYLISTS",
          playlists: playlists,
        });

        if (playlists) {
          spotify.getPlaylist(playlists.items[0].id).then((response) =>
            dispatch({
              type: "SET_DISCOVER_WEEKLY",
              discover_weekly: response,
            })
          );
        }
      });

      spotify.getMyTopArtists().then((response) =>
        dispatch({
          type: "SET_TOP_ARTISTS",
          top_artists: response,
        })
      );

      //What does this do??
      dispatch({
        type: "SET_SPOTIFY",
        spotify: spotify,
      });
    }
  }, [spotify, token, dispatch]);

  console.log("User after Dispatch:", user);
  console.log("Token after Dispatch:", token);

  return (
    <div className="App">
      {/* Spotify Logo */}
      {/* Login with Spotify - Button */}
      {/* < Login /> component will consist of everything */}
      {
        // using JSX here
        //render the spotify app, else render the login page again
        token ? <Player spotify={spotify} /> : <Login /> // Pass the spotify object as a prop, couldve been done as a DataLAyer as well. Prop Drilling level 0 !
      }
    </div>
  );
}

export default App;
