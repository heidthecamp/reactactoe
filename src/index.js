import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

function calculateWinner(squares) {
  const lines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];
  for (let i = 0; i < lines.length; i++) {
    const [a, b, c] = lines[i];
    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
      return squares[a];
    }
  }
  return null;
}

class Square extends React.Component {
  render() {
    return (
      <button className="square" onClick={() => this.props.onClick()}>
        {this.props.value}
      </button>
    );
  }
}

class Board extends React.Component{
  constructor(props) {
    super(props);
    this.state ={
      squares: Array(9).fill(null),
      winner: null,
      xIsNext: true,
    }
  }

  handleClick(i) {
    const squares = this.state.squares.slice();
    if (!squares[i]){
      squares[i] = this.state.xIsNext ? 'X' : 'O'
      this.setState({
        squares: squares,
        xIsNext: !this.state.xIsNext,
      });
    }
    const winner = calculateWinner(squares);
    if (winner){
      this.setState({ winner: winner });
    }
  }

  renderSquare(i) {
    return (
      <Square
        value={this.state.squares[i]}
        onClick={() => this.handleClick(i)}
      />
    );
  }
  render(){
    if (this.state.winner){
      return (
        <div className="mBoardWinner">{this.state.winner}</div>
      )
    }
    return (
      <table ClassName="MBTable">
        <tr>
          <td>{this.renderSquare(0)}</td>
          <td>{this.renderSquare(1)}</td>
          <td>{this.renderSquare(2)}</td>
        </tr>
        <tr>
          <td>{this.renderSquare(3)}</td>
          <td>{this.renderSquare(4)}</td>
          <td>{this.renderSquare(5)}</td>
        </tr>
        <tr>
          <td>{this.renderSquare(6)}</td>
          <td>{this.renderSquare(7)}</td>
          <td>{this.renderSquare(8)}</td>
        </tr>
      </table>
    );
  }
}

class MasterBoard extends React.Component{
  render(){
    return (
      <table>
        <tr>
          <td><Board /></td>
          <td><Board /></td>
          <td><Board /></td>
        </tr>
        <tr>
          <td><Board /></td>
          <td><Board /></td>
          <td><Board /></td>
        </tr>
        <tr>
          <td><Board /></td>
          <td><Board /></td>
          <td><Board /></td>
        </tr>
      </table>
    );
  }
}

class Game extends React.Component{
  render(){
    return(
      <div className="game">
        <div className="game-board">
          <MasterBoard />
        </div>
      </div>
    );
  }
}

ReactDOM.render(
  <Game />,
  document.getElementById('root')
);
