import { calculateWinner } from "../util/gameAI";
import { OverlayCSS, OverlayText } from "../view/styles";

export interface OverlayProps {
  state: {
    readonly squares: (string | null)[];
  };
  handleReset?: () => void;
}  

export const Overlay = ({ state, handleReset }:OverlayProps):JSX.Element => {
  let winner = calculateWinner(state.squares);

  if (winner) {
    let gameWinner = winner === "X" ? "CPU" : "You";
  
    return (
      <OverlayCSS 
        player={winner} 
        gameover={true} 
        onTouchMove={handleReset} 
        onClick={handleReset}
      >
        <OverlayText>
          <span 
            style={{fontSize: 50, color:'#a044ff'}}
          >
            {`${gameWinner}`}
          </span> won!
        </OverlayText>
        <OverlayText>
          Click To Replay
        </OverlayText>
      </OverlayCSS>
    );
      //catch for when squares array has 0 null indexes and no more moves to be made
  } else if (!state.squares.includes(null)) {
    return (
      <OverlayCSS 
        player={''} 
        gameover={true} 
        onClick={handleReset}
      >
        <OverlayText>
          <span style={{fontSize: 50}}>Draw!</span>
        </OverlayText>
        <OverlayText>
          Click To Replay
        </OverlayText>
      </OverlayCSS>
      );
    }
    return null!
  };