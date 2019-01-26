export const transitionEnded = {
  type: "TRANSITION_ENDED"
};

export const setPlayerTurn = move => {
  return {
    type: "SET_PLAYER_TURN",
    action: move
  };
};

export const buttonClicked = (e) => {
	return {
		type: "BUTTON_CLICKED",
		move: e.target.id
	}
}

export const computerClick = () => {
  return {
    type: "COMPUTER_CLICK",
    
  }
}

export const playerClick = () => {
  
}