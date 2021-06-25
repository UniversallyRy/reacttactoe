import Board from "./Board";
import Global from "../view/global";
import Github from "./Github";

export interface AppProps {
}

//todos: multiple boards/games, scorekeeper counter
const App: React.FunctionComponent<AppProps> = ():JSX.Element => {
  return (
    <>
      <Github />
      <Global/>
      <Board />
    </>
  );
};

export default App;