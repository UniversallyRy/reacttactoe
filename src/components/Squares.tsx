import { SquareCSS } from "../view/styles";
import { calculateWinner } from "../util/gameAI";

export interface SquaresProps {
  state: {
    squares: any[];
    myTurn: boolean;
  };
  handleClick: any;
  i: number; 
}

export interface SquareCSSProps {
  player: string;
  value: boolean;
  onClick?: (() => Event);
  onTouchEnd?: (() => void);
  disabled: boolean;
}

 const Square = ({ state, handleClick, i }:SquaresProps):JSX.Element => {
  let winner = calculateWinner(state.squares);
  let squares = [...state.squares];
  
  if (squares[i] === "O") {
    return (
      <SquareStyle disabled={true} player={"player"} value={state.squares[i]} />
    );
    // Does the same for AI
  } else if (squares[i] === "X") {
    return <SquareStyle disabled={true} player={"AI"} value={state.squares[i]} />;
  } else {
    // Default rendered squares when squares[i] has a null value
    return (
      <SquareStyle
        player={""}
        disabled={winner ? true : !state.myTurn}
        value={state.squares[i]}
        onTouchEnd={() => handleClick(i)}
        onClick={() => handleClick(i)}
      />
    );
  }
};

const SquareStyle = ({ player, onTouchEnd, onClick, disabled }:SquareCSSProps) => {
  return (
    <SquareCSS
      player={player}
      children
      style={{
        pointerEvents: disabled ? "none" : "auto",
      }}
      onTouchEnd={onTouchEnd}
      onClick={onClick}
    />
  );
};

export default Square;