import { useState } from "react";

// Player component is a functional component that represents a player in the game
export default function Player({ symbol, initialName, isActive, onPlayerNameChange }) {
  // State to manage the player's name and editing status
  const [playerName, setPlayerName] = useState(initialName);
  const [isEditing, setIsEditing] = useState(false);

  // Function to handle the click event when the "Edit" button is clicked
  function handleEditClick() {
    // Toggle the editing status
    setIsEditing((editing) => !editing);

    // If editing is completed, invoke the onPlayerNameChange callback
    if (isEditing) {
      onPlayerNameChange(symbol, playerName);
    }
  }

  // Function to handle the change in the player's name input field
  function handleNameChange(e) {
    setPlayerName(e.target.value);
  }

  // Define the display of the player's name based on editing status
  let editablePlayerName = <span className="player-name">{playerName}</span>;

  // If editing, display an input field for the player's name
  if (isEditing) {
    editablePlayerName = (
      <input
        type="text"
        required
        value={playerName}
        onChange={handleNameChange}
      />
    );
  }

  // Render the player component
  return (
    <li className={isActive ? "active" : undefined}>
      <span className="player">
        {editablePlayerName}
        <span className="player-symbol">{symbol}</span>
      </span>
      {/* Button to trigger editing mode or save changes */}
      <button onClick={handleEditClick}>{isEditing ? "Save" : "Edit"}</button>
    </li>
  );
}
