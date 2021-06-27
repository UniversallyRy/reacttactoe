import ReactDOM from "react-dom";
import { render } from '@testing-library/react';
import Squares from "./Squares";

const state = {squares: [], myTurn: false} 
const handleClick = (() => null);

test("renders without crashing", async () => {
  const div = document.createElement("div");
  ReactDOM.render(<Squares id={0} state={state} handleClick={handleClick}/>, div);
});

test('check default square color', async () => {
  const { container } = render(<Squares id={0} state={state} handleClick={handleClick}/>);
  const square = container.querySelector('.sc-iCoGMd.jYXntD')
  expect(square).toHaveStyleRule('background', '#cbb4d4')
  expect(square).toMatchSnapshot()
  expect(square).toBeInTheDocument();
});