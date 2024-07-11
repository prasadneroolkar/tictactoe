import React from "react";

const Statusmsg = ({ moves, result }) => {
  return (
    <p>
      {!result ? (
        <>
          {moves ? (
            <span className="xturn">X</span>
          ) : (
            <span className="oturn">O</span>
          )}{" "}
          turn
        </>
      ) : (
        <>
          {" "}
          <span className={result === "X" ? "xturn" : "oturn"}>
            {result} has won!!!
          </span>
        </>
      )}
    </p>
  );
};

export default Statusmsg;
