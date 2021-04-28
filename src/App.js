import { useEffect, useState } from "react";
import "./App.css";
import Login from "./Login";
import { getTokenFromUrl } from "./spotify";
// 2:47:00, 2:58:30 and 2:59:50 useEffect, 3:05:20 production syntax use _ for temporary/local variables

function App() {
  const [token, setToken] = useState(null);

  useEffect(() => {
    const hash = getTokenFromUrl(); //when we get redicrected back from spotify, we need that token
    console.log("Token/Hash  Received : ", hash);
    window.location.hash = "";
    const _token = hash.access_token; //regular json

    if (_token) {
      setToken(_token);
    }
    //NOW USE THIS TOKEN TO CONNECT TO OFFICIAL SPOTIFY
    //for security reasons, we dont want token to sit/stay in the URL
  }, []);

  return (
    <div className="App">
      {/* Spotify Logo */}
      {/* Login with Spotify - Button */}
      {/* < Login /> component will consist of everything */}
      {
        // using JSX here
        //render the spotify app, else render the login page again
        token ? <h1>I have logged in!</h1> : <Login />
      }
      {/* {<Login />} */}
    </div>
  );
}

export default App;
