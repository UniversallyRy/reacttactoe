import React, {Component} from 'react';
import {maximize, calculateWinner} from './GameAI';
import Square from '../view/square.js'
import {BoardWrap, Border, GameTitle, Status, Reset, ResetButton, BoardRow, OverlayCSS} from '../view/styles.js'
// EVERYTHING THAT APPEARS IN OR AROUND BOARD
export default class Board extends Component {
  constructor(props) {
    super(props);
    this.state = {
      squares: new Array(9).fill(null),
      gameover: true,
      myTurn: false,
    }
  }
    // Renders the square and inserts the values(o, x's) and adds event listeners
  renderSquare = (i) => {
    const winner = calculateWinner(this.state.squares);
    let squares = [...this.state.squares];

    if (squares[i] === 'O') {
      return (<Square disabled={true}  player={'player'} value={this.state.squares[i]}/>);
    }else if (squares[i] === 'X') {
      return (<Square disabled={true}  player={'AI'} value={this.state.squares[i]}/>);
    }else{
    return (<Square disabled={winner ? true : this.state.myTurn} value={this.state.squares[i]} onClick={() => this.handleClick(i)}/>);
  }
}

  renderOverlay = () => {
    const winner = calculateWinner(this.state.squares);

    if(winner) {
      return (<OverlayCSS gameover={this.state.gameover} onClick={this.handleReset}> {`Player ${winner} won! Replay?`} </OverlayCSS>)
    }else if (this.state.squares.indexOf(null) === -1) {
      return (<OverlayCSS gameover={this.state.gameover} onClick={this.handleReset}> Draw!  Play Again? </OverlayCSS>)
    }
  }

  handleClick = (i) => {
    let squares = [...this.state.squares];
    // Adds player choice as soon as clicked
    squares[i] = 'O';
    // squares[i].currentTarget = this.state.activeIndex;
    this.setState({
      squares,
      myTurn : !this.state.myTurn,
    });
    // Calls setTimeout on the AI logic function and set state to add realistic delay
    setTimeout(() => {
      const best = maximize(squares);
      squares[best[1]] = 'X';
      this.setState({
        squares,
        myTurn: !this.state.myTurn,
      }, () => {});},
500);

}
// Function that resets the board by resetting the state to def vals
handleReset = () => {
this.setState({squares: Array(9).fill(null), myTurn: false});
};

resetButton = () => {
  const winner = calculateWinner(this.state.squares);

  if (winner || this.state.squares.indexOf(null) === -1) {
  return <ResetButton gameover={this.gameover}>RESET</ResetButton>;
  }else{
    return <ResetButton gameover={!this.gameover} onClick={() => this.handleReset()} >RESET</ResetButton>;
  }
};
// render func for rending data to screen
  render() {
    //checks one of the winning combos of moves
    let status = 'You are O';
    // returns the JSX
    return (
    <BoardWrap>
      <Border>
        <GameTitle>React Tac Toe</GameTitle>
        <Status>{status}</Status>
        {this.renderOverlay()}
        <Reset>
          {this.resetButton()}
        </Reset>
        <BoardRow>
          {this.renderSquare(0)}
          {this.renderSquare(1)}
          {this.renderSquare(2)}
        </BoardRow>
        <BoardRow>
          {this.renderSquare(3)}
          {this.renderSquare(4)}
          {this.renderSquare(5)}
        </BoardRow>
        <BoardRow>
          {this.renderSquare(6)}
          {this.renderSquare(7)}
          {this.renderSquare(8)}
        </BoardRow>
      </Border>
    </BoardWrap>);
  }
}
