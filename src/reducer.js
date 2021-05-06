//first show initial state, what does inital state look like, just an object!

export const initialState = {
  user: null, //user doesn't exist yet
  playlists: [], //playlists are empty
  playing: false, //is the song playing?
  item: null, //what song is playing

  //Remove this after finished developing..
  token:
    "BQD3p-euRsPeKWgxehEIjvEtU_NFmr6tOc7rjHo4B1wC6-CXlh…iQt8XuX_31p_qF2fDggH4hl21btcEc-cAJGZDoL9T5PeB0u7b",
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

    case "SET_TOKEN":
      return {
        ...state,
        token: action.token,
      };
    default:
      return state;
  }
};

export default reducer;
