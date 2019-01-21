import { createStore } from "redux";

const settingsReducerDefaultState = {
	volume: 1,
  speed: 1,
  id: 1,
}

export default (state = settingsReducerDefaultState, action) => {
  switch (action.type) {
    case "SET_VOLUME_UP":
      console.log(action.id)
      return state;
    case "SET_VOLUME_DOWN":
      return state;
    case "SET_SPEED_UP":
      return state;
    case "SET_SPEED_DOWN":
      return state;
    default:
      return state;
  }
}

