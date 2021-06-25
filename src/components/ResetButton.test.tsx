import ReactDOM from "react-dom";
// import { render, screen } from '@testing-library/react';
import ResetButton from "./ResetButton";

test("renders without crashing", () => {
  const div = document.createElement("div");
  const state = {squares: []}  
  const handleReset = (() => null);
  ReactDOM.render(<ResetButton state={state} handleReset={handleReset}/>, div);
});
