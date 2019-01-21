import { createStore } from "redux";
const gamerReducerDefaultState = {
  round: 0,
  moves: []
  //to be continued
};
export default (state = gamerReducerDefaultState, action) => {
  switch (action.type) {
    case "BUTTON_PRESSED": //to be continued
      return state;
    default:
      return state;
  }
};
