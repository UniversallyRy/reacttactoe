// Calculate the AI's best potential move
const getAvailableSpots = (squares: (string | null)[]) => {
  let result: number[] = [];
  for (let i = 0; i < squares.length; i++) {
    if (!squares[i]) {
      result.push(i);
    }
  }
  return result;
};

// logic to find if arrays contains either all "X" or "O",
export const calculateWinner = (squares: (string | null)[] ) => {
  const winningRows: [number, number, number][] = [
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
    let [a, b, c] = winningRow;
    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
      // If they all have same value return true and that value
      return true && squares[a];
    }
  }
  return false;
};

// Calculates AI best move
const minimize = (squares: (string | null)[] ) => {
  const moves = getAvailableSpots(squares);
  let bestMove;
  let bestValue = 100000;

  if (calculateWinner(squares)) {
    return 1!;
  }
  if (!moves.length) {
    return 0!;
  }

  for (let move of moves) {
    squares[move] = "O";
    let hValue = maximize(squares) || 0;
    if (Array.isArray(hValue)) {
      hValue = hValue[0]!;
    }
    if (hValue < bestValue) {
      bestMove = move;
      bestValue = hValue;
    }
    squares[move] = null;
  }

  return [bestValue, bestMove]!;
};

export const maximize = (squares: (string | null)[]) => {
  const moves = getAvailableSpots(squares);
  let bestMove:number;
  let bestValue = -100000;

  if (calculateWinner(squares)) {
    return -1!;
  }
  if (!moves.length) {
    return 0!;
  }

  for (let move of moves) {
    squares[move] = "X";
    let hValue = minimize(squares);
    if (Array.isArray(hValue)) {
      hValue = hValue[0]!;
    }
    if (hValue > bestValue) {
      bestMove = move;
      bestValue = hValue;
    }
    squares[move] = null;
  }
  
  return [bestValue, bestMove!];
};