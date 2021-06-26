import Board from "./Board";
import Global from "../view/global";
import Github from "./Github";

export interface AppProps {
}

//todos: multiple boards/games, scorekeeper counter
const App = ():JSX.Element => {
  return (
    <>
      <Github />
      <Global/>
      <Board />
    </>
  );
};

export default App;