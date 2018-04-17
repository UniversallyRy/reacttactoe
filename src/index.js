  import React from 'react';
  import ReactDOM from 'react-dom';
  import './index.css';

// CREATES THE SQUARE JSX ELEMENT
  function Square(props) {
    return (
      // adds props on square component to change value when click the square
      <button className="square" onClick={props.onClick}>
        {props.value}
      </button>
    );
  }


// EVERYTHING THAT APPEARS IN OR AROUND BOARD
  class Board extends React.Component {
    constructor(props){
      super(props);
      this.state = {
        // creates 3 empty array items, fills each with with a null value
        // and saves it to the squares state
        squares: Array(9).fill(null),
        // checks  if the X player is next or is it O's turn
        xIsNext: true,
        moves: 0
      }
    }
    // function used primarily in the renderSquare function below,
    // event listeners of the squares
    handleClick = (i) => {
      // returns a copy of the state.squares and saves to a square variable
      const squares = this.state.squares.slice();
      let moves = this.state.moves;
      if (calculateWinner(squares) || squares[i]) {
        return;
      }

      squares[i] = this.state.xIsNext ? "X": "O";
      moves++;
      this.setState({
        squares: squares,
        xIsNext: !this.state.xIsNext,
        moves: moves
      });
    }

    // Function that resets the board by refilling array values with null
    // Taking away the X and O's values
    handleReset = () => {
        console.log("RESET HANDLER");
        this.setState({
            squares: Array(9).fill(null),
            xIsNext: true,
            moves: 0
        })
    };

    // Renders the square and inserts the values(o, x's) and adds event listen
    renderSquare = (i) => {
      return (
        <Square
          value={this.state.squares[i]}
          onClick={ () => this.handleClick(i)}
        />
      );
    }

    // render func for rending data to screen
    render() {
      //checks one of the winning combos of moves
      const winner = calculateWinner(this.state.squares);
      let status;
      //if winner is true, print string and winner text from square[i]
      if (winner) {
        status = 'Winner! ' + winner;
        //else continue game to next player
      }else if (this.state.moves === 9){
        status = 'Ended in a tie';
      }else {
        status = 'Next Player: ' + (this.state.xIsNext ? 'X' : 'O');
      }

      // returns the JSX
      return (
        <div>
          <h1 className="gametitle">React Tac Toe</h1>
          <div className="status">{status}
          </div>
          <div className="reset">
          <button onClick={() => this.handleReset()} className="resetButton">RESET</button>
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
          <div className="endgame">
            <div className="text"></div>
          </div>
        </div>
      );
    }
  }

// FULL GAME COMPONENT
  class Game extends React.Component {
    render() {
      return (
          <div className="game">
              <div className="game-board">
                <Board />
              </div>
          </div>
      );
    }
  }



// Calculate the winner of the game
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
    // Loops through the win combos length and see with squares[i] value
    // equals a winning combo;
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
