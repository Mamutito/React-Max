import React from "react";

function Log({ turns }) {
  return (
    <ol id="log">
      {turns.map(({ square, player }) => (
        <li key={`${square.row}${square.col}`}>
          Player {player} selected {square.row},{square.col}
        </li>
      ))}
    </ol>
  );
}

export default Log;
