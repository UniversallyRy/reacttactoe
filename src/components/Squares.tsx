import { SquareCSS } from "../view/styles";
import { calculateWinner } from "../util/gameAI";

export interface SquaresProps {
  state: any;
  handleClick: any;
  i: number; 
}

export interface SquareCSSProps {
  player: string;
  value: boolean;
  onClick?: (() => void);
  onTouchEnd?: (() => void);
  disabled: boolean;
}
// square Component with event listeners
 const Square: React.FunctionComponent<SquaresProps> = ({ state, handleClick, i }) => {
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
    // Default rendered squares when ...squares[i] is empty(nulled)
    return (
      <SquareStyle
        player={''}
        disabled={winner ? true : !state.myTurn}
        value={state.squares[i]}
        onTouchEnd={() => handleClick(i)}
        onClick={() => handleClick(i)}
      />
    );
  }
};

const SquareStyle: React.FunctionComponent<SquareCSSProps> = ({ player, onTouchEnd, onClick, disabled }) => {
  return (
    <SquareCSS
      player={player}
      children
      style={{
        pointerEvents: disabled ? "none" : "auto",
      }}
      onTouchMove={onTouchEnd}
      onClick={onClick}
    />
  );
};

export default Square;
