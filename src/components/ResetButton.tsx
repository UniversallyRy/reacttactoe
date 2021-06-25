import { Button } from "../view/styles";
import { calculateWinner } from "../util/gameAI";

export interface ButtonProps {
  state: {
      squares:any[]
  };
  handleReset: (() => void);
}

const ResetButton: React.FunctionComponent<ButtonProps> = ({state, handleReset}) => {
  let winner = calculateWinner(state.squares);
  // Hides reset button when the game's over
  if (winner || !state.squares.includes(null)) {
    return <Button gameover={true}/>;
  } else {
    return (
      <Button 
        gameover={false} 
        onClick={() => handleReset()}
        onTouchMove={() => handleReset()} 
      >
        RESET
      </Button>
    );
  }
};

export default ResetButton;