import React from "react";

const Square = ({ value, onClick }) => {
  const onSquareClick = () => {
    onClick();
  };
  return (
    <div className="square" onClick={onSquareClick}>
      {value === "X" ? (
        <span className="x">{value}</span>
      ) : (
        <span className="o">{value}</span>
      )}
    </div>
  );
};

export default Square;
