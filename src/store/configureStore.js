import { createStore } from "redux";
import gameReducer from "../reducers/gameReducer";

const configuredStore = createStore(
  gameReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
)

export default () => {
  return configuredStore
};
