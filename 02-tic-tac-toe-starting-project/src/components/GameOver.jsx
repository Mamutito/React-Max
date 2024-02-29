import React from "react";

function GameOver({ winner, onRestart }) {
  return (
    <div id="game-over">
      <h2>GameOver</h2>
      {winner ? <p>{winner} won!</p> : <p>it's a draw!</p>}
      <p>
        <button onClick={onRestart}>Rematch!</button>
      </p>
    </div>
  );
}

export default GameOver;
