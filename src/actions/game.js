export const endGame = {
  type: "END_GAME"
};

export const startGame = {
  type: "START_GAME"
};

export const makeMove = (
  e,
  isComputer = false,
  levelUp = false,
  addScore = false,
  addMove = false
) => {
  let clickedButton;
  !isComputer ? (clickedButton = e.target.id) : (clickedButton = e);
  return {
    type: "MAKE_MOVE",
    clickedButton,
    isComputer,
    levelUp,
		addScore,
		addMove
  };
};

// export const playerMove = (e) => {
// const clickedButton = e.target.id
// return {
// type:
// }
// }
