import React from "react";
import Board from "./Board.js";
import { AppWrapper } from "../view/styles.js";
import Github from "../view/github";

const App = () => {
  return (
    <AppWrapper>
      <Github />
      <Board />
    </AppWrapper>
  );
};

export default App;
