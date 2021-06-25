import { RButton } from "../view/styles";
import { calculateWinner } from "../util/gameAI";

export interface ButtonProps {
  state: {
      squares:any[]
  };
  handleReset: (() => void);
}

const ResetButton: React.FunctionComponent<ButtonProps> = ({state, handleReset}) => {
  let winner = calculateWinner(state.squares);
  // Hides the reset button, with css from styles.js, when the games over
  if (winner || !state.squares.includes(null)) {
    return <RButton gameover={false}>RESET</RButton>;
  } else {
    return (
      <RButton 
        gameover={true} 
        onClick={() => handleReset()}
        onTouchMove={() => handleReset()} 
      >
        RESET
      </RButton>
    );
  }
};

export default ResetButton;