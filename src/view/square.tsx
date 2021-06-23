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
        pointerEvents: disabled ? "none" : "auto",
      }}
      onClick={onClick}
      player={player}
      onTouchMove={onTouchEnd}
    ></Psquares>
  );
};

export default Square;
