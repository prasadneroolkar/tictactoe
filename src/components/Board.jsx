import React, { useState } from "react";
import Square from "./Square";

const Board = () => {
  let arr = [null, null, null, null, null, null, null, null, null];
  // console.log(arr);
  const [state, setState] = useState(arr);
  const [xTurn, setXturn] = useState(true);

  const handleClick = (index) => {
    const copystate = [...state];
    copystate[index] = xTurn ? "x" : "o";
    setState(copystate);
    setXturn(!xTurn);
  };

  return (
    <div className="board">
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
    </div>
  );
};

export default Board;
