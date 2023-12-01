// GameOver component is a functional component that displays game-over information
export default function GameOver({ winner, onRestart }) {
  return (
    <div id="game-over">
      {/* Heading indicating the game is over */}
      <h2>Game Over!</h2>

      {/* Display the winner if there is one */}
      {winner && <p>{winner} won!</p>}

      {/* Display a draw message if there is no winner */}
      {!winner && <p>It's a draw!</p>}

      {/* Button to trigger the game restart */}
      <button onClick={onRestart}>Play Again</button>
    </div>
  );
}
