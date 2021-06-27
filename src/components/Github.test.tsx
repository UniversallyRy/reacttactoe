import ReactDOM from "react-dom";
// import { render, screen } from '@testing-library/react';
import Github from "./Github";

test("renders without crashing", async () => {
  const div = document.createElement("div");
  ReactDOM.render(<Github />, div);
});
