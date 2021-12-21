import ReactDOM from "react-dom";
import { render, screen, fireEvent } from '@testing-library/react';
import { Board } from "./Board";
import { Square } from "./Squares"

test("renders without crashing", async () => {
  const div = document.createElement("div");
  ReactDOM.render(<Board />, div);
});

test('renders reset button text', async () => {
  render(<Board />);
  const buttonElement = screen.getByText(/reset/i);
  expect(buttonElement).toBeInTheDocument();
});

test('renders square', async () => {
  const { container } = render(<Board />);
  const square = container.querySelector('.sc-iCoGMd.fXqpin')
  expect(square).toBeInTheDocument();
})

test('check default square color', async () => {
  const { container } = render(<Board />);
  const square = container.querySelector('.sc-iCoGMd.fXqpin')
  expect(square).toHaveStyleRule('background', '#cbb4d4')
  expect(square).toMatchSnapshot()
  expect(square).toBeInTheDocument();
});

test('check square presses', async () => {
  const state = {squares: [], myTurn:true}  
  const onClick = jest.fn();
  const { container } = render(<Square id={0} state={state} handleClick={onClick}/>);
  const square:any = container.querySelector('.sc-iCoGMd.fXqpin')
  expect(square).toBeInTheDocument();
  expect(onClick).toHaveBeenCalledTimes(0);
  fireEvent.click(square);
  expect(onClick).toHaveBeenCalledTimes(1);
});