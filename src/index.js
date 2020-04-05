import React from "react";
import ReactDOM from "react-dom";
import "./index.css";

function Square(props) {
  return (
    <button className="square" onClick={() => props.onClick()}>
      {props.children}
    </button>
  );
}

class Board extends React.Component {
  battleShipPlayingBoard = size => {
    const battleShipArray = Array(size);

    for (let j = 0; j < size; j++) {
      battleShipArray[j] = Array(size).fill(null);
    }

    return battleShipArray;
  };

  constructor(props) {
    super(props);
    this.state = {
      battleShipFirstState: this.battleShipPlayingBoard(this.props.size),
      hit: true
    };
  }

  handleClick(i) {
    const battleShipFirstState = this.state.battleShipFirstState.slice();
    // if (calculateWinner(squares) || squares[i]) {
    //   return;
    // }
    battleShipFirstState[0][0] = this.state.hit ? "X" : "O";
    this.setState({
      battleShipFirstState: battleShipFirstState,
      hit: !this.state.hit
    });
  }

  renderSquare(i) {
    return this.state.battleShipFirstState.map(
      battleShipPlayingBoardSingleLine => (
        <div className="board-row">
          {" "}
          {console.log(battleShipPlayingBoardSingleLine)}
          {battleShipPlayingBoardSingleLine.map(battleShipSingleSquare => (
            <Square onClick={() => this.handleClick(i)}>
              {" "}
              {battleShipSingleSquare}
            </Square>
          ))}
        </div>
      )
    );
  }

  render() {
    // const winner = calculateWinner(this.state.squares);
    // let status;
    // if (winner) {
    //   status = "Winner: " + winner;
    // } else {
    //   status = "Next player: " + (this.state.xIsNext ? "X" : "O");
    // }
    return (
      <React.Fragment>
        <div>{this.renderSquare(0)}</div>
      </React.Fragment>
    );
  }
}

// class Game extends React.Component {
//   render() {
//     return (
//       <div className="game">
//         <div className="game-board">
//           <Board />
//         </div>
//         <div className="game-info">
//           <div>{/* status */}</div>
//           <ol>{/* TODO */}</ol>
//         </div>
//       </div>
//     );
//   }
// }
// function calculateWinner(squares) {
//   const lines = [
//     [0, 1, 2],
//     [3, 4, 5],
//     [6, 7, 8],
//     [0, 3, 6],
//     [1, 4, 7],
//     [2, 5, 8],
//     [0, 4, 8],
//     [2, 4, 6]
//   ];
//   for (let i = 0; i < lines.length; i++) {
//     const [a, b, c] = lines[i];
//     if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
//       return squares[a];
//     }
//   }
//   return null;
// }

// ========================================

ReactDOM.render(<Board size={10} />, document.getElementById("root"));
