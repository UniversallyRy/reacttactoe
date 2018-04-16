import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';


 function Square(props) {
    return (
      <button className="square" onClick={props.onClick}>
        {props.value}
      </button>
    );
  }

class Buttons extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: null,
    };
  }
  startGame = () => {
    console.log('start msg');
  }
  stopGame = () => {
    console.log('stop msg');
  }
  pauseGame = () => {
    console.log('pause msg');
  }

  render() {
    return (
      <div className="gameButtons">
        <button onClick={() => this.setState({value: this.startGame()})}>Start</button>
        <button onClick={() => this.setState({value: this.stopGame()})}>Stop</button>
        <button onClick={() => this.setState({value: this.pauseGame()})}>Ready</button>
      </div>
    );
  }
}

class Board extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      squares: Array(9).fill(null),
      xIsNext: true,
    }
  }

  handleClick = (i) => {
    const squares = this.state.squares.slice();
    if (calculateWinner(squares) || squares[i]) {
      return;
    }
    squares[i] = this.state.xIsNext ? "X": "O";
    this.setState({
      squares: squares,
      xIsNext: !this.state.xIsNext,
    })
  }

  renderSquare = (i) => {
    return (
      <Square
        value={this.state.squares[i]}
        onClick={ () => this.handleClick(i)}
      />
    );
  }

  render() {
    const winner = calculateWinner(this.state.squares);
    let status;
    if (winner) {
      status = 'Winner: ' + winner;
    } else {
      status = 'Next player: ' + (this.state.xIsNext ? 'X' : 'O');
    }

    return (
      <div>
        <h1 className="gametitle">React Tac Toe</h1>
        <div className="status">{status}</div>
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
        <div className="endgame">
          <div className="text"></div>
        </div>
        <Buttons/>
      </div>
    );
  }
}

class Game extends React.Component {
  constructor(props){
    super(props);
    const origBoard = "";
    const humanPlayer = "O";
    const aiPlayer = "X";
    const winCombos = [
      [0, 1, 2],
      [3, 4, 2],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [6, 4, 2]
    ]
    const cells = <square/>
}
  render() {
    return (
        <div className="game">
            <div className="game-board">
              <Board />
            </div>
            <div className="game-info">
                <div>
                  {/* status */}
                </div>
                <ol>
                  {/* TODO */}
                </ol>
            </div>
        </div>
    );
  }
}


function calculateWinner(squares) {
  const winCombos = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];
  for (let i = 0; i < winCombos.length; i++) {
    const [a, b, c] = winCombos[i];
    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
      return squares[a];
    }
  }
  return null;
}

// ========================================

ReactDOM.render(
  <Game />,
  document.getElementById('root')
);
