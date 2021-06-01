import React from "react";
import { Psquares } from "./styles.js";

const Square = ({ disabled, onClick, player }) => {
  return (
    <Psquares
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
