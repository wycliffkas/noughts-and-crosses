const boardState = {
  CROSSES_WIN: "CROSSES_WIN",
  NOUGHTS_WIN: "NOUGHTS_WIN",
  DRAW: "DRAW",
  UNFINISHED: "UNFINISHED",
  INVALID: "INVALID",
};

function isValidBoard(board) {
  const xCount = board.split("").filter(char => char === "X").length;
  const oCount = board.split("").filter(char => char === "O").length;

  // Crosses must go first and players must alternate turns
  if (xCount !== oCount && xCount !== oCount + 1) {
    return false;
  }

  return true;
}

function hasPlayerWon(board, player) {
  const winningCombinations = [
    [0, 1, 2], // Board Top row
    [3, 4, 5], // Board Middle row
    [6, 7, 8], // Board Bottom row
    [0, 3, 6], // Board Left column
    [1, 4, 7], // Board Middle column
    [2, 5, 8], // Board Right column
    [0, 4, 8], // Board Diagonal from top left to bottom right
    [2, 4, 6], // Board Diagonal from top right to bottom left
  ];

  for (let combination of winningCombinations) {
    const [a, b, c] = combination;
    if (board[a] === player && board[a] === board[b] && board[a] === board[c]) {
      return true;
    }
  }

  return false;
}

function getStateOfBoard(board) {
  if (!isValidBoard(board)) {
    return boardState.INVALID;
  }

  const xCount = board.split("").filter(char => char === "X").length;
  const oCount = board.split("").filter(char => char === "O").length;

  const crossesWon = hasPlayerWon(board, "X");
  const noughtsWon = hasPlayerWon(board, "O");

  if (crossesWon) {
    return boardState.CROSSES_WIN;
  } else if (noughtsWon) {
    return boardState.NOUGHTS_WIN;
  }else if (board.includes("_")) {
    return boardState.UNFINISHED;
  } else {
    return boardState.DRAW;
  }
}

// Leave this part unchanged
const args = process.argv.slice(2);
for (let i = 0; i < args.length; i++) {
  console.log(getStateOfBoard(args[i]));
}
