import React, {Component} from 'react';
import Board from './Board.js';
import {AppWrapper} from '../view/styles.js';
import Github from '../view/github';


export default class App extends Component {
  render(){
    return (
      <AppWrapper>
        <Github/>
        <Board />
      </AppWrapper>
    )
  }
}
