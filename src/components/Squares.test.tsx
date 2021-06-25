import ReactDOM from "react-dom";
// import { render, screen } from '@testing-library/react';
import Squares from "./Squares";

test("renders without crashing", () => {
  const div = document.createElement("div");
  const state = {squares: [], myTurn: false}  
  const handleClick = (() => null);
  ReactDOM.render(<Squares i={0} state={state} handleClick={handleClick}/>, div);
});
