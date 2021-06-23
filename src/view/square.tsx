import { MouseEventHandler } from "react";
import { Psquares } from "./styles";

type Props = {
  disabled?: boolean,
  onClick?: MouseEventHandler,
  onTouchEnd?: (() => void),
  player: string,
  value?: any
}


const Square = ({ disabled, onTouchEnd, onClick, player } :Props) => {
  return (
    <Psquares
      children
      style={{
        // Pointer event to disable button clicks when its not user's turn
        pointerEvents: disabled ? "none" : "auto",
      }}
      onClick={onClick}
      player={player}
      onTouchEnd={onTouchEnd}
    ></Psquares>
  );
};

export default Square;
