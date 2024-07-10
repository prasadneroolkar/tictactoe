import React from "react";

const Square = ({ value, onClick }) => {
  const onSquareClick = () => {
    onClick();
  };
  return (
    <div className="square" onClick={onSquareClick}>
      <h1>{value}</h1>
    </div>
  );
};

export default Square;
