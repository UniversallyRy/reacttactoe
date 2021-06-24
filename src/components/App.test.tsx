import React from 'react';
import ReactDOM from "react-dom";
// import { render, fireEvent, waitForElementToBeRemoved} from '@testing-library/react'
import App from "./App";

it("renders without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(<App />, div);
});
  
describe("App />", () => {
  test('Should render the full App', async() => {
    
  })
});