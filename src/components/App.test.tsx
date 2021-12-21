import ReactDOM from "react-dom";
import { render, screen } from "@testing-library/react";
import { App } from "./App";

test("renders App without crashing", async () => {
  const div:HTMLDivElement = document.createElement("div");
  ReactDOM.render(<App />, div);
});
  
test("renders App title", async () => {
  render(<App />);
  const titleElement = screen.getByText((content, element) => {
    return element!.tagName.toLowerCase() === "h1" && content.startsWith("React Tac Toe")
  })
  expect(titleElement).toBeInTheDocument();
});

test("renders Github component", async () => {
  render(<App />);
  const imgElement = screen.getByAltText(/github/i);
  expect(imgElement).toBeInTheDocument();
});

test('renders Board component', async () => {
  render(<App />);
  const boardElement = screen.getByText(/you go first/i);
  expect(boardElement).toBeInTheDocument();
});