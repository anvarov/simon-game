export const endGame = {
  type: "END_GAME"
};

export const startGame = {
  type: "START_GAME"
};

export const levelUp = {
  type: "LEVEL_UP"
};

export const reset = {
  type: 'RESET'
}
//makeMove universal function, it can return different type of action by passing different
//arguments
export const makeMove = (e, isComputer = false, isUpdate = false) => {
  let clickedButton;
  typeof e !== "undefined" && e.hasOwnProperty("id")
    ? (clickedButton = e.target.id)
    : (clickedButton = e);
  return {
    type: "MAKE_MOVE",
    clickedButton,
    isComputer,
    isUpdate
  };
};

// export const playerMove = (e) => {
// const clickedButton = e.target.id
// return {
// type:
// }
// }
