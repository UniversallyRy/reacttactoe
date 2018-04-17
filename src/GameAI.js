

const getAvailableSpots = (board) => {
  let result = [];
  for (let i = 0; i < board.length; i++) {
    if (!board[i]) {
      result.push(i);
    }
  }
  return result;
};

const calculateWinner = (board) => {
  const winningRows = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
  ];
  for (let i = 0; i < winningRows.length; i++) {
    const [a, b, c] = winningRows[i];
    if (board[a] && board[a] === board[b] && board[a] === board[c]){
       return true && board[a];
     }
  }
  return false;
};

const minimize = (board) => {

  //AI minimizes  y score
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
  //maximize my score
  const moves = getAvailableSpots(board);
  // if someone won return - 1
  if (calculateWinner(board)) {
    return -1;
  }
  // if no more spaces to play return 0
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

module.exports = {
  maximize,
  calculateWinner
};
