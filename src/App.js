import { useEffect, useState } from "react";
import SpotifyWebApi from "spotify-web-api-js";
import "./App.css";
import Login from "./Login";
import { getTokenFromUrl } from "./spotify";
import Player from "./Player";
// 2:47:00, 2:58:30 and 2:59:50 useEffect, 3:05:20 production syntax use _ for temporary/local variables
// 3:14:40 regarding upwork

const spotify = new SpotifyWebApi();

function App() {
  const [token, setToken] = useState(null);

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
        console.log("User :", user);
      }); //fetch my user info! Returns a promise -> so async used!
    }
  }, []);

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
