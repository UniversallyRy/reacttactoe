import { useState } from "react";
import Square from "../view/square";
import {
  BoardWrap,
  GameTitle,
  Status,
  Reset,
  ResetButton,
  BoardRow,
  BoardBackground,
  OverlayCSS,
  OverlayText,
} from "../view/styles";
import { maximize, calculateWinner } from "./GameAI";


const Board = () => {
  const [state, setstate] = useState({
    squares: new Array(9).fill(null),
    myTurn: true,
  });

  // square Component with event listeners
  const renderSquare = (i: number) => {
    let winner = calculateWinner(state.squares);
    let squares = [...state.squares];

    if (squares[i] === "O") {
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
          player={''}
          disabled={winner ? true : !state.myTurn}
          value={state.squares[i]}
          onTouchEnd={() => handleReset()}
          onClick={() => handleClick(i)}
        />
      );
    }
  };

  const renderOverlay = () => {
    let winner = calculateWinner(state.squares);
    // Future score counter
    // let theWinner = (winner === 'X') ? setstate(currentScore => {
    //   return {aiScore: currentScore.aiScore++}
    // }) : 'You';
    if (winner) {
      let gameWinner = winner === "X" ? "CPU" : "You";

      return (
        <OverlayCSS 
          player={winner} 
          gameover={true} 
          onTouchEnd={handleReset} 
          onClick={handleReset}
        >
          <OverlayText>
            <span style={{fontSize: 50, color:'#a044ff'}}>{`${gameWinner}`}</span> won!
          </OverlayText>
          <OverlayText>
            Click To Replay
          </OverlayText>
        </OverlayCSS>
      );
      //checks squares states to see if all the default null state values are gone
    } else if (!state.squares.includes(null)) {
      return (
        <OverlayCSS player={''} gameover={true} onClick={handleReset}>
          <OverlayText>
          <span style={{fontSize: 50}}>Draw!</span>
          </OverlayText>
          <OverlayText>
            Click To Replay
          </OverlayText>
        </OverlayCSS>
      );
    }
  };

  const handleClick = (i:number) => {
    let squares:any[] = [...state.squares];
    squares[i] = "O";
    // Sets current state of myTurn to false not disabling square clicks until AI chooses;
    setstate((currentState) => {
      return { squares, myTurn: !currentState.myTurn, };
    });
    // 'realistic' A.I delay
    setTimeout(() => {
      let best:any = maximize(squares);
      squares[best[1]] = "X";
      setstate((currentState) => {
        return { squares, myTurn: !currentState.myTurn };
      });
    }, 500);
  };

  const handleReset = () => {
    /* Small delay on reset function for bug that allows 'AI'
       to render a chosen square if you click the  
       reset button immediately after your own choice */
    setTimeout(() => {
      setstate({ squares: Array(9).fill(null), myTurn: true });
    }, 300);
  };

  const resetButton = () => {
    let winner = calculateWinner(state.squares);
    // Hides the reset button, with css from styles.js, when the games over
    if (winner || !state.squares.includes(null)) {
      return <ResetButton gameover={false}>RESET</ResetButton>;
    } else {
      return (
        <ResetButton 
          gameover={true} 
          onClick={() => handleReset()}
          onTouchEnd={() => handleReset()} 
        >
          RESET
        </ResetButton>
      );
    }
  };

  return (
    <BoardWrap>
      <GameTitle>React Tac Toe</GameTitle>
      <Status>{`You Go First`}</Status>
      <BoardBackground>
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
      </BoardBackground>
    </BoardWrap>
  );
};
export default Board;
