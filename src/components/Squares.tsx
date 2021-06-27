import { SquareCSS } from "../view/styles";
import { calculateWinner } from "../util/gameAI";

export interface SquaresProps {
  state: {
    readonly squares: (string | null)[];
    readonly myTurn: boolean;
  };
  handleClick: ((id:number) => void);
  id: number
}

export interface SquareCSSProps {
  player: string;
  onClick?: () => void;
  onTouchEnd?: (() => void);
  disabled: boolean;
}

 const Square = ({ id, state, handleClick }:SquaresProps):JSX.Element => {
  let winner = calculateWinner(state.squares);
  let squares = [...state.squares];
  
  if (squares[id] === "O") {
    return (
      <SquareStyle disabled={true} player={"player"} />
    );
    // Does the same for AI
  } else if (squares[id] === "X") {
    return <SquareStyle disabled={true} player={"AI"} />;
  } else {
    // Default rendered squares when squares[i] has a null value
    return (
      <SquareStyle
        player={""}
        disabled={winner ? true : !state.myTurn}
        onTouchEnd={() => handleClick(id)}
        onClick={() => handleClick(id)}
      />
    );
  }
};

const SquareStyle = ({onClick, onTouchEnd, player, disabled }:SquareCSSProps) => {
  return (
    <SquareCSS
      player={player}
      style={{
        pointerEvents: disabled ? "none" : "auto",
      }}
      onTouchEnd={onTouchEnd}
      onClick={onClick}
    />
  );
};

export default Square;