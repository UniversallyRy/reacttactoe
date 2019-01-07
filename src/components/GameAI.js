// Functions used to generate game mechanics
// such as logic to calculate the AI's best potential move
// and calculating the squares(array) positions for a winning game 


// (board) param is simply this.state.squares in Board.js

// checks state.squares[i] for "O" or "X" values and if none 
// pushes that squares[i] index to result array  
const getAvailableSpots = (board) => {
  let result = [];
  for (let i = 0; i < board.length; i++) {
    if (!board[i]) {
      result.push(i);
    }
  }
  return result;
};

// logic to find if any of these 8 combos contains either 
// all "X" or "O", 
const calculateWinner = (board) => {
  const winningRows = [
    [
      0, 1, 2
    ],
    [
      3, 4, 5
    ],
    [
      6, 7, 8
    ],
    [
      0, 3, 6
    ],
    [
      1, 4, 7
    ],
    [
      2, 5, 8
    ],
    [
      0, 4, 8
    ],
    [
      2, 4, 6
    ]
  ];
  // Loops through winningRows array, and checks if squares at those 
  // indexes all have the same value, either "X" or "O" 
  for (let i = 0; i < winningRows.length; i++) {
    const [a, b, c] = winningRows[i];
    if (board[a] && board[a] === board[b] && board[a] === board[c]) {
      // If they have same value return true and that value
      return true && board[a];
    }
  }
  return false;
};

// Logic used to calculate the best move for the AI
const minimize = (board) => {

  const moves = getAvailableSpots(board);
  if (calculateWinner(board)) {
    return 1;
  }
  if (!moves.length) {
    return 0;
  }

  let bestMove;
  let bestValue = 100000;
  for (let i = 0; i < moves.length; i++) {
    board[moves[i]] = 'O';
    let hValue = maximize(board);
    if (Array.isArray(hValue)) {
      hValue = hValue[0];
    }
    if (hValue < bestValue) {
      bestMove = moves[i];
      bestValue = hValue;
    }
    board[moves[i]] = null;
  }

  return [bestValue, bestMove];
};

const maximize = (board) => {
  const moves = getAvailableSpots(board);

  if (calculateWinner(board)) {
    return -1;
  }

  if (!moves.length) {
    return 0;
  }

  let bestMove;
  let bestValue = -100000;

  for (let i = 0; i < moves.length; i++) {
    board[moves[i]] = 'X';
    let hValue = minimize(board);
    if (Array.isArray(hValue)) {
      hValue = hValue[0];
    }
    if (hValue > bestValue) {
      bestMove = moves[i];
      bestValue = hValue;
    }
    board[moves[i]] = null;
  }

  return [bestValue, bestMove];
};

export {maximize, calculateWinner};