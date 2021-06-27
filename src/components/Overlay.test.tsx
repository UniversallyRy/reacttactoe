import ReactDOM from "react-dom";
// import { render, screen } from '@testing-library/react';
import { Overlay } from "./Overlay";

test("renders without crashing", async () => {
  const state = {squares: []}  
  const handleReset = (() => null);
  const div = document.createElement("div");
  ReactDOM.render(<Overlay state={state} handleReset={handleReset}/>, div);
});
