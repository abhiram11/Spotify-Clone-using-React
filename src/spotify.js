export const authEndPoint = "https://accounts.spotify.com/authorize";

const redirectUri = "http://localhost:3000/";

const clientId = "081aff9e37b1416aa50be6eac7e635b3";
// 158906090d7e45e9afd8b3eedc439558
// SCOPES are somewhat like permissions
const scopes = [
  "user-read-currently-playing",
  "user-read-recently-played",
  "user-read-playback-state",
  "user-top-read",
  "user-modify-playback-state",
];

// can play, recently, playback state, cant delete, publish own songs, etc.

export const loginUrl = `${authEndPoint}?client_id=${clientId}&redirect_uri=${redirectUri}&scope=${scopes.join(
  "%20"
)}&response_type=token&show_dialog=true`;

export const getTokenFromUrl = () => {
  // extracts out everything after the # from the url received
  //2:54:00 REDUCE IS VERY USEFUL!
  return (
    //http://localhost:3000/#access_token=SECRET_TOKEN_r&token_type=Bearer&expires_in=3600
    //JUST GRABBING THE ACCESS TOKEN FROM HERE, similar to use of split etc

    //#access_token=SECRET_TOKEN_r&token_type=Bearer&expires_in=3600
    // window.location.hash

    ""
      .substring(1)
      .split("&")
      .reduce((initial, item) => {
        let parts = item.split("=");
        initial[parts[0]] = decodeURIComponent(parts[1]);

        return initial;
      }, {})
  );
};
