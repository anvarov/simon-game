import { combineReducers, createStore } from "redux";
import gameReducer from "../reducers/gameReducer";
import settingsReducer from "../reducers/settingsReducer";

const combinedReducers = combineReducers({
  game: gameReducer,
  settings: settingsReducer
});

const configuredStore = createStore(
  combinedReducers,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
)

export default () => {
  return configuredStore
};
