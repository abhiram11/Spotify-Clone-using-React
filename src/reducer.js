//first show initial state, what does inital state look like, just an object!

export const initialState = {
  user: null, //user doesn't exist yet
  playlists: [], //playlists are empty
  playing: false, //is the song playing?
  item: null, //what song is playing
  discover_weekly: null,
  //Remove this after finished developing..
  token: null,
  // "BQD3p-euRsPeKWgxehEIjvEtU_NFmr6tOc7rjHo4B1wC6-CXlh…iQt8XuX_31p_qF2fDggH4hl21btcEc-cAJGZDoL9T5PeB0u7b",
  spotify: null,
  top_artists: null,
};

//       (current state, SETTER of the states)
const reducer = (state, action) => {
  console.log("Code is in the reducer.js now, \n", action); //big help in reducer!!!

  //Action -> type, [payload -> can be called whatever we want, e.g. "user" as below]

  switch (action.type) {
    case "SET_USER":
      // ...state  MEANS KEEP WHATEVER WAS IN THE CURRENT STATE, and THEN UPDATE ONLY THE VALUES GIVEN BELOW
      return {
        ...state,
        user: action.user,
      };

    case "SET_PLAYING":
      return {
        ...state,
        playing: action.playing,
      };

    case "SET_ITEM":
      return {
        ...state,
        item: action.item,
      };

    case "SET_TOP_ARTISTS":
      return {
        ...state,
        top_artists: action.top_artists,
      };

    case "SET_SPOTIFY":
      return {
        ...state,
        spotify: action.spotify,
      };

    case "SET_TOKEN":
      return {
        ...state,
        token: action.token,
      };

    case "SET_PLAYLISTS":
      return {
        ...state,
        playlists: action.playlists,
      };

    case "SET_DISCOVER_WEEKLY":
      return {
        ...state,
        discover_weekly: action.discover_weekly,
      };

    case "LOGOUT":
      return {
        initialState,
      };
    default:
      return state;
  }
};

export default reducer;
