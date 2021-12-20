import { calculateWinner } from "../util/gameAI";
import { Button } from "../view/styles";

export interface ButtonProps {
  state: {
    readonly squares: (string | null)[];
  };
  handleReset: () => void;
}

export const ResetButton = ({ state, handleReset }:ButtonProps):JSX.Element => {
  let winner = calculateWinner(state.squares);
  // Hides reset button when the game's over
  if (winner || !state.squares.includes(null)) {
    return <Button gameover={true}/>;
  } else {
    return (
      <Button 
        gameover={false} 
        onClick={() => handleReset()}
        onTouchEnd={() => handleReset()} 
      >
        RESET
      </Button>
    );
  }
};
