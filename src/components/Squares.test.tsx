import ReactDOM from "react-dom";
import { render } from '@testing-library/react';
import { Square } from "./Squares";

const state = {squares: [], myTurn: false} 
const handleClick = (() => null);

test("renders without crashing", async () => {
  const div = document.createElement("div");
  ReactDOM.render(<Square id={0} state={state} handleClick={handleClick}/>, div);
});

test('check default square color', async () => {
  const { container } = render(<Square id={0} state={state} handleClick={handleClick}/>);
  const square = container.querySelector('.sc-iCoGMd.fXqpin')
  expect(square).toHaveStyleRule('background', '#cbb4d4')
  expect(square).toMatchSnapshot()
  expect(square).toBeInTheDocument();
});