import update from "immutability-helper";
const COLORS = ['red', 'green', 'yellow', 'blue'] 

const gamerReducerDefaultState = {
  round: 0,
  sequence: [],
  computerMovesSequence: [],
  playerMovesSequence: [],
  isTransitionEnded: false,
  buttonClicked: "",
  isComputerTurn: true,
  isPlayerTurn: "",
  isLost: false,
  computerTurns: 0,
  playerTurns: 0
};

// const buttonClickedReducer = (state, action) => {
//   const clickedButton = action.move;
//   if (
//     state.round === 0 &&
//     state.computerMovesSequence.length === 0 &&
//     state.playerMovesSequence.length === 0
//   ) {
//     return {
//       ...state,
//       isPlayerTurn: true,
//       isComputerTurn: false,
//       buttonClicked: update(state.buttonClicked, { $set: clickedButton }),
//       computerMovesSequence: update(state.computerMovesSequence, {
//         $push: [clickedButton]
//       }),
//       round: update(state.round, { $set: state.round + 1 })
//     };
//   }  else if (
//     !state.isComputerTurn &&
//     state.isPlayerTurn &&
//     state.computerMovesSequence.length > state.playerMovesSequence.length
//   ) {
//     console.log("object");
//     return {
//       ...state,
//       buttonClicked: update(state.buttonClicked, { $set: clickedButton }),
//       playerMovesSequence: update(state.playerMovesSequence, {
//         $push: [clickedButton]
//       }),
//       round: update(state.round, { $set: state.round + 1 })
//     };
//   } else if (state.computerMovesSequence.length === state.round) {
//     return {
//       ...state,
//       isPlayerTurn: true,
//       isComputerTurn: false,
//       buttonClicked: update(state.buttonClicked, { $set: clickedButton }),
//       computerMovesSequence: update(state.computerMovesSequence, {
//         $push: [clickedButton]
//       }),
//       round: update(state.round, { $set: state.round + 1 })
//     };
//   }
// };

// const buttonClicked = (state, action) => {
//   const buttonClicked = action.move;
//   const { computerTurns, playerTurns, sequence, round } = state;
//   if (computerTurns < round || computerTurns === playerTurns || round === 0) {
//     return {
//       ...state,
//       sequence: update(sequence, { $push: [buttonClicked] }),
//       round: round + 1,
//       computerTurns: computerTurns + 1,
//       buttonClicked
//     };
//   } else if (
//     playerTurns < computerTurns &&
//     sequence[playerTurns] === buttonClicked
//   ) {
//     return {
//       ...state,
//       playerTurns: playerTurns + 1,
//       buttonClicked,
//     };
//   } else if (
//     playerTurns < computerTurns &&
//     sequence[playerTurns] !== buttonClicked
//   ) {
//     return {
//       ...state,
//       isLost: true
//     };
//   }
// };

export default (state = gamerReducerDefaultState, action) => {
  switch (action.type) {
    case "TRANSITION_ENDED":
      return {
        ...state,
        isTransitionEnded: !state.isTransitionEnded,
        buttonClicked: ""
      };
    // case "BUTTON_CLICKED":
    //   return buttonClicked(state, action);
    case "COMPUTER_CLICK":
      return {
        ...state,
        buttonClicked: COLORS[Math.floor(Math.random()*3)],
        computerTurns: computerTurns + 1
      }
    default:
      return state;
  }
};
