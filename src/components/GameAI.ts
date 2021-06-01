// API to alculate the AI's best potential move

const getAvailableSpots = (board:any) => {
  let result: number[] = [];
  for (let i = 0; i < board.length; i++) {
    if (!board[i]) {
      result.push(i);
    }
  }
  return result;
};

// logic to find if any of these 8 combos contains either all "X" or "O",
const calculateWinner = (board:any) => {
  const winningRows = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];
  // Loops through winningRows array, and checks if squares at those
  // indexes all have the same value, either "X" or "O"
  for (let winningRow of winningRows) {
    const [a, b, c] = winningRow;
    if (board[a] && board[a] === board[b] && board[a] === board[c]) {
      // If they have same value return true and that value
      return true && board[a];
    }
  }
  return false;
};

// Calculates AI best move
const minimize = (board: any[]) => {
  const moves = getAvailableSpots(board);
  let bestMove;
  let bestValue = 100000;

  if (calculateWinner(board)) {
    return 1;
  }
  if (!moves.length) {
    return 0;
  }

  for (let move of moves) {
    board[move] = "O";
    let hValue:any= maximize(board) || 0;
    if (Array.isArray(hValue)) {
      hValue = hValue[0];
    }
    if (hValue < bestValue) {
      bestMove = move;
      bestValue = hValue;
    }
    board[move] = null;
  }
  return [bestValue, bestMove];
};

const maximize = (board: any[]) => {
  const moves = getAvailableSpots(board);
  let bestMove;
  let bestValue = -100000;

  if (calculateWinner(board)) {
    return -1;
  }

  if (!moves.length) {
    return 0;
  }

  for (let move of moves) {
    board[move] = "X";
    let hValue:any = minimize(board);
    if (Array.isArray(hValue)) {
      hValue = hValue[0];
    }
    if (hValue > bestValue) {
      bestMove = move;
      bestValue = hValue;
    }
    board[move] = null;
  }
  return [bestValue, bestMove];
};

export { maximize, calculateWinner };
