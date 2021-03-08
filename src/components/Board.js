import React, { useState } from "react";
import Square from "../view/square.js";
import {
  BoardWrap,
  GameTitle,
  Status,
  Reset,
  ResetButton,
  BoardRow,
  OverlayCSS,
} from "../view/styles.js";
import { maximize, calculateWinner } from "./GameAI";

// EVERYTHING THAT APPEARS IN OR AROUND BOARD
const Board = () => {
  const [state, setstate] = useState({
    squares: new Array(9).fill(null),
    myTurn: true,
    userScore: 0,
    aiScore: 0,
  });

  // Renders the square and inserts the values(o, x's) and adds event listeners
  const renderSquare = (i) => {
    let winner = calculateWinner(state.squares);
    let squares = [...state.squares];

    if (squares[i] === "O") {
      // Returns a new square with player atr and 'O' text(value) when clicked
      return (
        <Square disabled={true} player={"player"} value={state.squares[i]} />
      );
      // Does the same for AI
    } else if (squares[i] === "X") {
      return <Square disabled={true} player={"AI"} value={state.squares[i]} />;
    } else {
      // Default rendered squares when ...squares[i] is empty(nulled)
      return (
        <Square
          disabled={winner ? true : !state.myTurn}
          value={state.squares[i]}
          onClick={() => handleClick(i)}
        />
      );
    }
  };

  const renderOverlay = () => {
    let winner = calculateWinner(state.squares);

    // let theWinner = (winner === 'X') ? setstate(currentScore => {
    //   return {aiScore: currentScore.aiScore++}
    // }) : 'You';

    if (winner) {
      let gameWinner = winner === "X" ? "CPU" : "You";

      return (
        <OverlayCSS player={winner} gameover={true} onClick={handleReset}>
          {" "}
          {`${gameWinner} won! Click to Replay`}{" "}
        </OverlayCSS>
      );
      //checks squares states to see if all the default null state values are gone
    } else if (!state.squares.includes(null)) {
      return (
        <OverlayCSS gameover={true} onClick={handleReset}>
          {" "}
          Draw! Click to Replay{" "}
        </OverlayCSS>
      );
    }
  };

  const handleClick = (i) => {
    let squares = [...state.squares];
    // Adds player choice as soon as clicked
    squares[i] = "O";
    // Sets current state of myTurn to false not disabling square clicks until AI chooses;
    setstate((currentState) => {
      return { squares, myTurn: !currentState.myTurn };
    });
    // Calls setTimeout on the AI logic function and set state to add 'realistic' A.I delay
    setTimeout(() => {
      let best = maximize(squares);
      // Sets AI square to X then changes state.myTurn back to true to allow player turn
      squares[best[1]] = "X";
      setstate((currentState) => {
        return { squares, myTurn: !currentState.myTurn };
      });
    }, 500);
  };
  // Function that resets the board by resetting the state to defualt values
  const handleReset = () => {
    /* Small delay on reset function for bug that allows 'AI'
       to render a chosen square if you click the  
       reset button immediately after your own choice */

    setTimeout(() => {
      setstate({ squares: Array(9).fill(null), myTurn: true });
    }, 300);
  };

  // Reset Button for the handleReset callback
  const resetButton = () => {
    let winner = calculateWinner(state.squares);
    // Hides the reset button, with css from styles.js, when the games over
    if (winner || !state.squares.includes(null)) {
      return <ResetButton gameover={false}>RESET</ResetButton>;
    } else {
      return (
        <ResetButton gameover={true} onClick={() => handleReset()}>
          RESET
        </ResetButton>
      );
    }
  };
  // Renders and returns Board Component
  let status = "You Go First!";
  return (
    <BoardWrap>
      <GameTitle>React Tac Toe</GameTitle>
      <Status>{status}</Status>
      {renderOverlay()}
      <Reset>{resetButton()}</Reset>
      <BoardRow>
        {renderSquare(0)}
        {renderSquare(1)}
        {renderSquare(2)}
      </BoardRow>
      <BoardRow>
        {renderSquare(3)}
        {renderSquare(4)}
        {renderSquare(5)}
      </BoardRow>
      <BoardRow>
        {renderSquare(6)}
        {renderSquare(7)}
        {renderSquare(8)}
      </BoardRow>
    </BoardWrap>
  );
};
export default Board;
