import React from "react";
import Board from "./Board";
import { AppWrapper } from "../view/styles";
import Github from "../view/github";
//todos: multiple boards/games, scorekeeper counter
const App = () => {
  return (
    <AppWrapper>
      <Github />
      <Board />
    </AppWrapper>
  );
};

export default App;
