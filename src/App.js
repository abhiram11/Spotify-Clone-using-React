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

const spotify = new SpotifyWebApi();

function App() {
  const [token, setToken] = useState(null);
  const [{ user }, dispatch] = useDataLayerValue(); // {} used to PULL info from data layer
  // Alternative : const [DataLayer, dispatch] = useDataLayerValue();
  // and then DataLayer.user

  useEffect(() => {
    const hash = getTokenFromUrl(); //when we get redicrected back from spotify, we need that token
    console.log("Token/Hash  Received : ", hash);
    window.location.hash = "";
    const _token = hash.access_token; //regular json
    //NOW USE THIS TOKEN TO CONNECT TO OFFICIAL SPOTIFY
    //for security reasons, we dont want token to sit/stay in the URL
    if (_token) {
      //After getting the logged in page, now use this KEY to talk to spotify
      setToken(_token);

      spotify.setAccessToken(_token);
      spotify.getMe().then((user) => {
        // console.log("User :", user);

        dispatch({
          type: "SET_USER",
          user: user, //can also just send "user" instead of "user : user"
        });
      }); //fetch my user info! Returns a promise -> so async used!
    }
  }, []);

  console.log("User after Dispatch:", user);

  return (
    <div className="App">
      {/* Spotify Logo */}
      {/* Login with Spotify - Button */}
      {/* < Login /> component will consist of everything */}
      {
        // using JSX here
        //render the spotify app, else render the login page again
        token ? <Player /> : <Login />
      }
      {/* {<Login />} */}
    </div>
  );
}

export default App;
