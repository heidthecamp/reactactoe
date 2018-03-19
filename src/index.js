import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

const winLines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
];

function calculateMWinner(squares) {
  for (let i = 0; i < winLines.length; i++) {
    const [a,b,c] = winLines[i];
    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]){
      return squares[a];
    }
  }
  return null;
}

function Square(props){
  return(
    <button className="square" onClick={props.onClick}>
      {props.value}
    </button>
  );
}

// class MiniBoard extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       squares: Array(9).fill(null),
//       xIsNext: true,
//       winner: null,
//     };
//   }
//   handleClick(i) {
//     const squares = this.state.squares.slice();
//     if (calculateMWinner(squares) || squares[i]){
//       return;
//     }
//     squares[i] = this.state.xIsNext ? 'X' : 'O';
//     this.setState({
//       squares: squares,
//       xIsNext: !this.state.xIsNext,
//     })
//   }
//   renderSquare(i) {
//     return(
//       <Square
//         value={this.state.squares[i]}
//         onClick={() => this.handleClick(i)}
//       />
//     );
//   }
//
//   render() {
//     var winner = calculateMWinner(this.state.squares)
//     if ( winner ){
//       return <div className="mBoardWinner">{winner}</div>;
//     }
//     return (
//       <div className="mboard">
//         <table className="MBTable">
//           <tr>
//             <td>
//               {this.renderSquare(0)}
//             </td>
//             <td>
//               {this.renderSquare(1)}
//             </td>
//             <td>
//               {this.renderSquare(2)}
//             </td>
//           </tr>
//           <tr>
//             <td>
//               {this.renderSquare(3)}
//             </td>
//             <td>
//               {this.renderSquare(4)}
//             </td>
//             <td>
//               {this.renderSquare(5)}
//             </td>
//           </tr>
//           <tr>
//             <td>
//               {this.renderSquare(6)}
//             </td>
//             <td>
//               {this.renderSquare(7)}
//             </td>
//             <td>
//               {this.renderSquare(8)}
//             </td>
//           </tr>
//         </table>
//       </div>
//     )
//   }
// }


class SuperBoard extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      squares: Array(9).fill(Array(9).fill(null)),
      xisNext: true,
    }
  }
  handleClick(i,j) {
    const squares = this.state.squares.slice().slice();
    // if (calculateMWinner(squares) || squares[i][j]){
    //   return;
    // }
    squares[i][j] = this.state.xIsNext ? 'X' : 'O';
    this.setState({
      squares: squares,
      xIsNext: !this.state.xIsNext,
    })
  }
  renderMiniBoard(i) {
    return (
      <table className="MBTable">
        <tr>
          <td>
            {this.renderSquare(i,0)}
          </td>
          <td>
            {this.renderSquare(i,1)}
          </td>
          <td>
            {this.renderSquare(i,2)}
          </td>
        </tr>
        <tr>
          <td>
            {this.renderSquare(i,3)}
          </td>
          <td>
            {this.renderSquare(i,4)}
          </td>
          <td>
            {this.renderSquare(i,5)}
          </td>
        </tr>
        <tr>
          <td>
            {this.renderSquare(i,6)}
          </td>
          <td>
            {this.renderSquare(i,7)}
          </td>
          <td>
            {this.renderSquare(i,8)}
          </td>
        </tr>
      </table>
    )
  }
  renderSquare(i,j) {
    return(
      <Square
        value={this.state.squares[i][j]}
        onClick={() => this.handleClick(i,j)}
      />
    );
  }
  render() {
    return(
      <div>
        <table className="SBTable">
          <tr>
            <td>
              {this.renderMiniBoard(0)}
            </td>
            <td>
              {this.renderMiniBoard(1)}
            </td>
            <td>
              {this.renderMiniBoard(2)}
            </td>
          </tr>
          <tr>
            <td>
              {this.renderMiniBoard(3)}
            </td>
            <td>
              {this.renderMiniBoard(4)}
            </td>
            <td>
              {this.renderMiniBoard(5)}
            </td>
          </tr>
          <tr>
            <td>
              {this.renderMiniBoard(6)}
            </td>
            <td>
              {this.renderMiniBoard(7)}
            </td>
            <td>
              {this.renderMiniBoard(8)}
            </td>
          </tr>
        </table>
      </div>
    )
  }
}

class Game extends React.Component {
  render(){
    return (
      <div className="game">
        <div className="game-board">
          <SuperBoard />
        </div>
        <div className = "game-info">
          <div></div>
          <ol></ol>
        </div>
      </div>
    )
  }
}

// class Game extends React.Component {
//   render(){
//     return (
//       <div className="game">
//         <div className="game-board">
//           <MiniBoard />
//         </div>
//         <div className = "game-info">
//           <div></div>
//           <ol></ol>
//         </div>
//       </div>
//     )
//   }
// }

ReactDOM.render(
  <Game />,
  document.getElementById('root')
)
