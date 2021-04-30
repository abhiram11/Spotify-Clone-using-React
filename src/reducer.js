//first show initial state, what does inital state look like, just an object!

export const initialState = {
  user: null, //user doesn't exist yet
  playlists: [], //playlists are empty
  playing: false, //is the song playing?
  item: null, //what song is playing
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
    default:
      return state;
  }
};

export default reducer;
