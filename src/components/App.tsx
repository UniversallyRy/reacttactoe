import React from "react";
import Board from "./Board.jsx";
import { AppWrapper } from "../view/styles.js";
import Github from "../view/github";
//todos: multiple boards/games, scorekeeper counter, different styling on click
const App = () => {
  return (
    <AppWrapper>
      <Github />
      <Board />
    </AppWrapper>
  );
};

export default App;
