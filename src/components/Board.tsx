import { useState } from "react";
import Square from "./Squares";
import Overlay from "./Overlay";
import ResetButton from "./ResetButton";
import {
  BoardWrap,
  GameTitle,
  Status,
  Reset,
  BoardRow,
  BoardBackground,
} from "../view/styles";
import { maximize } from "../util/gameAI";

export interface BoardProps {
}  

export interface stateProps{
  squares: (string | null)[] ;
  myTurn: boolean;
}

const Board = ():JSX.Element => {

  const [state, setState] = useState<stateProps>({
    squares: new Array(9).fill(null),
    myTurn: true,
  });

  const handleClick:React.MouseEventHandler<
    HTMLButtonElement | HTMLAnchorElement
  > = (i:any) => {

    let squares:(string | null)[]  = [...state.squares];
    squares[i] = "O";
    // Sets current state of myTurn to false not disabling square clicks until AI chooses;
    setState((currentState) => {
      return { squares, myTurn: !currentState.myTurn, };
    });
    // setTimeout for AI's choice delay
    setTimeout(() => {
      let best: any = maximize(squares);
      squares[best[1]] = "X";
      setState((currentState) => {
        return { squares, myTurn: !currentState.myTurn };
      });
    }, 500);
  };

  const handleReset = () => {
    // Delay on reset to let above setTimout finish first
    setTimeout(() => {
      setState({ squares: Array(9).fill(null), myTurn: true });
    }, 300);
  };

  return (
    <BoardWrap>
      <GameTitle>React Tac Toe</GameTitle>
      <Status>{'You Go First'}</Status>
      <BoardBackground>
        <Overlay state={state} handleReset={handleReset}/>
        <Reset>
          <ResetButton state={state} handleReset={handleReset}/>
        </Reset>
        <BoardRow>
          <Square i={0} state={state} handleClick={handleClick}/>
          <Square i={1} state={state} handleClick={handleClick}/>
          <Square i={2} state={state} handleClick={handleClick}/>
        </BoardRow>
        <BoardRow>
          <Square i={3} state={state} handleClick={handleClick}/>
          <Square i={4} state={state} handleClick={handleClick}/>
          <Square i={5} state={state} handleClick={handleClick}/>
        </BoardRow>
        <BoardRow>
          <Square i={6} state={state} handleClick={handleClick}/>
          <Square i={7} state={state} handleClick={handleClick}/>
          <Square i={8} state={state} handleClick={handleClick}/>
        </BoardRow>
      </BoardBackground>
    </BoardWrap>
  );
};

export default Board;