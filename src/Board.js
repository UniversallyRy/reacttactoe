import React, {Component} from 'react';
const {maximize, calculateWinner} = require('./GameAI');

function Square(props) {

  return (
  // adds props on square component to change value when click the square
  <button style={{
      pointerEvents: props.disabled
        ? 'none'
        : 'auto'
    }} className={props.class} onClick={props.onClick}>
    {props.value}
  </button>);
}

function Overlay(props) {
  return (
    <div onClick={props.onClick} className={props.name}>{props.winner}</div>
  );
}


// EVERYTHING THAT APPEARS IN OR AROUND BOARD
export default class Board extends Component {
  constructor(props) {
    super(props);
    this.state = {
      squares: new Array(9).fill(null),
      gameover: false,
      myTurn: false,
      playersquare:'',
      class: 'square',
    }
  }

    // Renders the square and inserts the values(o, x's) and adds event listen
  renderSquare = (i) => {
    let squares = [...this.state.squares];

    if (calculateWinner(squares) || squares[i]) {
      return (<Square disabled={!this.state.myTurn} value={this.state.squares[i]} class={this.state.class} />);
    }else{
    return (<Square disabled={this.state.myTurn} value={this.state.squares[i]} class={this.state.class} onClick={() => this.handleClick(i)}/>);
  }
}

  renderOverlay = () => {
    const winner = calculateWinner(this.state.squares);

    if(winner) {
      return (<Overlay onClick={this.handleReset} name={!this.state.gameover ? "on" : "off"} winner={`Player ${winner} won! Replay?`}/>)
    }else if (this.state.squares.indexOf(null) === -1) {
      return (<Overlay onClick={this.handleReset} name={!this.state.gameover ? "on" : "off"} winner={"Draw!  Play Again?"}/>)
      // return (<div onClick={() => this.handleReset()} name={!this.state.gameover ? "on" : "off"}>Draw!  Click for replay</div>)
    }
  }

  handleClick = (i) => {
    let squares = [...this.state.squares];

    if (squares[i]) {
      return alert("Spot already taken");
    }
    // Adds player choice as soon as clicked
    squares[i] = "O";
    this.setState({squares})

    // Calls setTimeout on the AI logic function and set state to add realistic delay
    setTimeout(() => {
      const best = maximize(squares);
      squares[best[1]] = "X";
      this.setState({
        squares,
        myTurn: false,

      }, () => {});},
1000);

}

// Function that resets the board by resetting the state to def vals
handleReset = () => {
this.setState({squares: Array(9).fill(null), gameover: false, myTurn: false});
};

resetButton = () => {
  const winner = calculateWinner(this.state.squares);

  if (winner || this.state.squares.indexOf(null) === -1) {
  return <button className="off">RESET</button>;
  }else{
    return <button onClick={() => this.handleReset()} className="resetButton">RESET</button>;
  }
};

// render func for rending data to screen
  render() {
    //checks one of the winning combos of moves
    let status = 'You are O';
    // returns the JSX
    return (
    <div className="board">
      <div className="border">
      <h1 className="gametitle">React Tac Toe</h1>
      <div className="status">{status}
      </div>
      {/* <div className={this.state.gameover ? "on" : "off"}>{this.state.notification}</div> */}
      {this.renderOverlay()}
      <div className="reset">
        {this.resetButton()}
      </div>
      <div className="board-row">
        {this.renderSquare(0)}
        {this.renderSquare(1)}
        {this.renderSquare(2)}
      </div>
      <div className="board-row">
        {this.renderSquare(3)}
        {this.renderSquare(4)}
        {this.renderSquare(5)}
      </div>
      <div className="board-row">
        {this.renderSquare(6)}
        {this.renderSquare(7)}
        {this.renderSquare(8)}
      </div>
    </div>
    </div>);
  }
}
