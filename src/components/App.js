import React, {Component} from 'react';
import Board from './Board.js';
import {AppWrapper} from '../view/styles.js'


export default class App extends Component {
  render(){
    return (
      <AppWrapper>
        <Board />
      </AppWrapper>
    )
  }
}
