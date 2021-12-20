import { Github } from "./Github";
import { Global } from "../view/global";
import { Board } from "./Board";

export interface AppProps {
}

//todos: multiple boards/games, scorekeeper counter
export const App = ():JSX.Element => {
  return (
    <>
      <Github />
      <Global/>
      <Board />
    </>
  );
};