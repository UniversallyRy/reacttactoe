import { Button } from "../view/styles";
import { calculateWinner } from "../util/gameAI";

export interface ButtonProps {
  state: {
    readonly squares: (string | null)[];
  };
  handleReset: () => void;
}

const ResetButton = ({ state, handleReset }:ButtonProps):JSX.Element => {
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

export default ResetButton;