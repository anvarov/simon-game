import update from "immutability-helper";

const gameDefaultState = {
  gameStarted: false,
  gameEnded: false,
  sequence: [],
  level: 0,
  computerMoves: 0,
  playerMoves: 0,
  score: 0,
  isUpdate: false,
  finalScore: 0,
  finalLevel: 0,
};

export default (state = gameDefaultState, action) => {
  switch (action.type) {
    case "START_GAME":
      return {
        ...gameDefaultState,
        gameStarted: true,
        level: 1
      };
    case "END_GAME":
      return {
        ...gameDefaultState,
        gameEnded: true,
        finalScore: state.score,
        finalLevel: state.level
      };
    case 'RESET':
      return {
        ...gameDefaultState
      }
    case "MAKE_MOVE":
      return {
        ...state,
        sequence: action.isUpdate
          ? update(state.sequence, { $push: [action.clickedButton] })
          : state.sequence,
        playerMoves: action.isComputer  ? 0 : state.playerMoves + 1, 
        computerMoves: action.isComputer ? state.computerMoves + 1 : 0
      };
    case 'LEVEL_UP':
      return {
        ...state,
        playerMoves: 0,
        computerMoves: 0,
        score: state.level * 1.25 + state.score,
        level: state.level + 1
      }
   
    default:
      return state;
  }
};
