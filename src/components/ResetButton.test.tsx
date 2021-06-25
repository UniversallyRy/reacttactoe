import ReactDOM from "react-dom";
import { render, fireEvent } from '@testing-library/react'
import ResetButton from "./ResetButton";
import { Button } from "../view/styles";

const state = {squares: []}  
const handleReset = (() => null);

test("renders without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(<ResetButton state={state} handleReset={handleReset}/>, div);
});

test('check styled-component styling', () => {
  const { container } = render(<ResetButton state={state} handleReset={handleReset}/>);
  expect(container.firstChild).toHaveStyleRule('color', '#a044ff')
  expect(container.firstChild).toMatchSnapshot()
  expect(container).toBeInTheDocument();
});

test('button clicks', () => {
  const onClick = jest.fn();
  const { container } = render(<Button gameover={false} onClick={onClick} />);
  const button:any = container.querySelector('.sc-jSFjdj')
  expect(onClick).toHaveBeenCalledTimes(0);
  fireEvent.click(button);
  expect(onClick).toHaveBeenCalledTimes(1);
});
