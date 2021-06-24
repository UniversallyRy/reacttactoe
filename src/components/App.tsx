import Board from "./Board";
import Global from "../view/global";
import Github from "./Github";

export declare interface AppProps {
  GitHub: (name: string) => React.ReactNode; // recommended function as a child render prop type
}

//todos: multiple boards/games, scorekeeper counter
const App:AppProps = ():JSX.Element => {
  return (
    <>
      <Github />
      <Global/>
      <Board />
    </>
  );
};

export default App;