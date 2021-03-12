import React from "react";
import { Psquares } from "./styles.js";

const Square = (props) => {
  return (
    <Psquares
      style={{
        // Pointer event to disable button clicks when its not user's turn
        pointerEvents: props.disabled ? "none" : "auto",
      }}
      onClick={props.onClick}
      player={props.player}
    ></Psquares>
  );
};

export default Square;
