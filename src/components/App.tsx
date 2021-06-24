import { FC } from 'react'
import Board from "./Board";
import Global from "../view/global";
import Github from "./Github";

//todos: multiple boards/games, scorekeeper counter
const App: FC = () => {
  return (
    <>
      <Github />
      <Global/>
      <Board />
    </>
  );
};

export default App;