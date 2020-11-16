import React, {Component} from 'react';
import Square from '../view/square.js';
import {BoardWrap, GameTitle, Status, Reset, ResetButton, BoardRow, OverlayCSS} from '../view/styles.js'
import {maximize, calculateWinner} from './GameAI';

// EVERYTHING THAT APPEARS IN OR AROUND BOARD
export default class Board extends Component {
  constructor(props) {
    super(props);
    this.state = {
      squares: new Array(9).fill(null),
      myTurn: true,
      userScore: 0,
      aiScore: 0
    }
  }

    // Renders the square and inserts the values(o, x's) and adds event listeners
  renderSquare = (i) => {
    const winner = calculateWinner(this.state.squares);
    let squares = [...this.state.squares];

    if (squares[i] === 'O') {
      // Returns a new square with player atr and 'O' text(value) when clicked
      return (<Square disabled={true}  player={'player'} value={this.state.squares[i]}/>);
      // Does the same for AI
    }else if (squares[i] === 'X') {
      return (<Square disabled={true}  player={'AI'} value={this.state.squares[i]}/>);
    }else{
      // Default rendered squares when ...squares[i] is empty(nulled)
    return (<Square disabled={winner ? true : !this.state.myTurn} value={this.state.squares[i]} onClick={() => this.handleClick(i)}/>);
    }
  }

  renderOverlay = () => {
    let winner = calculateWinner(this.state.squares);

    // let theWinner = (winner === 'X') ? this.setState(currentScore => {
    //   return {aiScore: currentScore.aiScore++}
    // }) : 'You';

    if(winner) {
      let gameWinner = (winner === 'X') ? 'CPU' : 'You';
      
      return (<OverlayCSS player={winner} gameover={true} onClick={this.handleReset}> {`${gameWinner} won! Click to Replay`} </OverlayCSS>)
    //checks squares states to see if all the default null state values are gone
    }else if (!this.state.squares.includes(null)) {
      return (<OverlayCSS gameover={true} onClick={this.handleReset}> Draw!  Click to Replay </OverlayCSS>)
    }
  }


  handleClick = (i) => {
    let squares = [...this.state.squares];
    // Adds player choice as soon as clicked
    squares[i] = 'O';
    // Sets current state of myTurn to false not disabling square clicks until AI chooses;
    this.setState(currentState => {
      return {squares, myTurn: !currentState.myTurn}
    });
    // Calls setTimeout on the AI logic function and set state to add 'realistic' A.I delay
    setTimeout(() => {
      const best = maximize(squares);
      // Sets AI square to X then changes state.myTurn back to true to allow player turn
      squares[best[1]] = 'X';
      this.setState(currentState => {
          return {squares, myTurn: !currentState.myTurn,}
        }
      )
    },
    500);

  }
  // Function that resets the board by resetting the state to defualt values
  handleReset = () => {
    /* Small delay on reset function for bug that allows 'AI'
       to render a chosen square if you click the  
       reset button immediately after your own choice */

    setTimeout(() => {
      this.setState({squares: Array(9).fill(null), myTurn: true});
    }, 300);
  };

  // Reset Button for the handleReset callback
  resetButton = () => {
    const winner = calculateWinner(this.state.squares);
    // Hides the reset button, with css from styles.js, when the games over 
    if (winner || !this.state.squares.includes(null)) {
    return <ResetButton gameover={false}>RESET</ResetButton>;
    }else{
      return <ResetButton gameover={true} onClick={() => this.handleReset()} >RESET</ResetButton>;
    }
  };
  // Renders and returns Board Component
  render() {
    let status = 'You Go First!';
    return (
    <BoardWrap>
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
    </BoardWrap>);
  }
}


