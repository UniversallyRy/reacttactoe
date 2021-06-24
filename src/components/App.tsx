import Board from "./Board";
import Global from "../view/global";
import Github from "./Github";

//todos: multiple boards/games, scorekeeper counter
const App = () => {
  return (
    <>
      <Github />
      <Global/>
      <Board />
    </>
  );
};

export default App;