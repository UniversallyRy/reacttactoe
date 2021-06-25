import ReactDOM from "react-dom";
import { render, screen } from '@testing-library/react';
import Board from "./Board";

test("renders without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(<Board />, div);
});

test('renders button text', () => {
  render(<Board />);
  const buttonElement = screen.getByText(/reset/i);
  expect(buttonElement).toBeInTheDocument();
})
