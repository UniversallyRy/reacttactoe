import { calculateWinner } from "../util/gameAI";
import { OverlayCSS, OverlayText } from "../view/styles";

export interface OverlayProps {
    state: {
        squares: any[]
    };
    handleReset: any;
}  

const Overlay: React.FunctionComponent<OverlayProps>= ({ state, handleReset }) => {
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
      //checks squares states to see if all the default null state values are gone
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
    return null;
  };

export default Overlay;