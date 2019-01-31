import update from "immutability-helper";

const gameDefaultState = {
  gameStarted: false,
  gameEnded: false,
  sequence: [],
  level: 0,
  moves: 0,
  score: 0
};

export default (state = gameDefaultState, action) => {
  switch (action.type) {
    case "START_GAME":
      return {
        ...state,
        gameStarted: true,
        gameEnded: false,
        level: 1
      };
    case "END_GAME":
      return {
        ...state,
        gameStarted: false,
        gameEnded: true,
        level: 0,
        score: 0,
        sequence: []
      };
    case "MAKE_MOVE":
      console.log(action);
      return {
        ...state,
        sequence: action.isComputer
          ? update(state.sequence, { $push: [action.clickedButton] })
          : state.sequence,
        moves: action.addMove ? state.moves + 1 : state.moves,
        level: action.levelUp ? state.level + 1 : state.level,
        score: action.addScore ? state.level * 1.25 + state.score : state.score
      };

    default:
      return state;
  }
};
