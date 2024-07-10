import React, { useState } from "react";
import Square from "./Square";

const Board = () => {
  let arr = [null, null, null, null, null, null, null, null, null];
  // console.log(arr);
  const [state, setState] = useState(arr);
  const [xTurn, setXturn] = useState(true);

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

  const handleReset = () => {
    setState(arr);
    setIsXTurn(isXTurn);
  };

  // const result = setInterval(function () {
  //   `s`;
  // }, 3000);

  const handleClick = (index) => {
    if (state[index] != null) {
      return;
    }
    const copystate = [...state];
    copystate[index] = xTurn ? "x" : "o";
    setState(copystate);
    setXturn(!xTurn);
  };

  return (
    <div className="board">
      {isWinner ? (
        <>
          someone won the game {isWinner}{" "}
          <button onClick={handleReset}>play again</button>
        </>
      ) : (
        <>
          {`its ${xTurn ? "x" : "o"} turn`}
          <div className="row">
            <Square value={state[0]} onClick={() => handleClick(0)} />
            <Square value={state[1]} onClick={() => handleClick(1)} />
            <Square value={state[2]} onClick={() => handleClick(2)} />
          </div>
          <div className="row">
            <Square value={state[3]} onClick={() => handleClick(3)} />
            <Square value={state[4]} onClick={() => handleClick(4)} />
            <Square value={state[5]} onClick={() => handleClick(5)} />
          </div>
          <div className="row">
            <Square value={state[6]} onClick={() => handleClick(6)} />
            <Square value={state[7]} onClick={() => handleClick(7)} />
            <Square value={state[8]} onClick={() => handleClick(8)} />
          </div>
        </>
      )}
    </div>
  );
};

export default Board;
