import React, {MouseEventHandler} from "react";
import { Psquares } from "./styles";

type Props = {
  disabled?: boolean,
  onClick?: MouseEventHandler,
  player: string,
  value?: any
}


const Square = ({ disabled, onClick, player } :Props) => {
  return (
    <Psquares
      children
      style={{
        // Pointer event to disable button clicks when its not user's turn
        pointerEvents: disabled ? "none" : "auto",
      }}
      onClick={onClick}
      player={player}
    ></Psquares>
  );
};

export default Square;
