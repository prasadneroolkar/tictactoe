import React, { useState } from "react";
import Square from "./Square";
import circle from "/circle.png";
import cross from "/cross.png";

const Board = () => {
  let arr = [null, null, null, null, null, null, null, null, null];
  const [state, setState] = useState(arr);
  const [xTurn, setXturn] = useState(true);
  console.log(state);
  const checkWinner = () => {
    const winnerLogic = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];

    for (let logic of winnerLogic) {
      const [a, b, c] = logic;
      if (state[a] !== null && state[a] === state[b] && state[a] === state[c]) {
        return state[a];
      }
    }

    return false;
  };

  const isWinner = checkWinner();
  const isAllNull = state.every((item) => item === null);
  const handleReset = () => {
    setState(arr);
    setXturn(true);
  };

  const handleClick = (index) => {
    if (state[index] != null) {
      return;
    }
    const copystate = [...state];
    copystate[index] = xTurn ? "X" : "O";
    console.log(copystate);
    setState(copystate);
    setXturn(!xTurn);
  };

  return (
    <>
      <h1 className="title">Tic Tac Toe Game</h1>
      <p>
        {!isWinner && (
          <>
            {xTurn ? (
              <span className="xturn">X</span>
            ) : (
              <span className="oturn">O</span>
            )}{" "}
            turn
          </>
        )}
      </p>
      <div className="board">
        {isWinner ? (
          <p>someone won the game {isWinner}</p>
        ) : (
          <>
            <div className="row1">
              <Square value={state[0]} onClick={() => handleClick(0)} />
              <Square value={state[1]} onClick={() => handleClick(1)} />
              <Square value={state[2]} onClick={() => handleClick(2)} />
            </div>
            <div className="row2">
              <Square value={state[3]} onClick={() => handleClick(3)} />
              <Square value={state[4]} onClick={() => handleClick(4)} />
              <Square value={state[5]} onClick={() => handleClick(5)} />
            </div>
            <div className="row3">
              <Square value={state[6]} onClick={() => handleClick(6)} />
              <Square value={state[7]} onClick={() => handleClick(7)} />
              <Square value={state[8]} onClick={() => handleClick(8)} />
            </div>
          </>
        )}
      </div>
      <button onClick={handleReset}>Reset</button>
    </>
  );
};

export default Board;
