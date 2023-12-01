// Log component displaying a list of game turns
export default function Log({ turns }) {
  return (
    // Ordered list for the log
    <ol id="log">
      {/* Map through each turn and render a list item */}
      {turns.map((turn) => (
        <li key={`${turn.square.row},${turn.square.col}`}>
          {/* Display player's symbol and selected row, col coordinates */}
          {turn.player} selected {turn.square.row},{turn.square.col}
        </li>
      ))}
    </ol>
  );
}
