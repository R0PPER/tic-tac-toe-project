// GameBoard component representing the game board
export default function GameBoard({ onSelectSquare, board }) {
  return (
    // Ordered list for the game board
    <ol id="game-board">
      {board.map((row, rowIndex) => (
        // List item for each row
        <li key={rowIndex}>
          {/* Nested ordered list for columns within the row */}
          <ol>
            {row.map((playerSymbol, colIndex) => (
              // List item for each column
              <li key={colIndex}>
                {/* Button for each square in the game board */}
                <button
                  // Call onSelectSquare when the button is clicked, passing row and column indices
                  onClick={() => onSelectSquare(rowIndex, colIndex)}
                  // Disable the button if the square is already occupied
                  disabled={playerSymbol !== null}
                >
                  {/* Display the player symbol or an empty space */}
                  {playerSymbol}
                </button>
              </li>
            ))}
          </ol>
        </li>
      ))}
    </ol>
  );
}
