import React from "react";
import Board from "./Board";
import Global from "../view/global";
import Github from "../view/github";
//todos: multiple boards/games, scorekeeper counter
const App = () => {
  return (
    <>
      <Global/>
      <Github />
      <Board />
    </>
  );
};

export default App;
