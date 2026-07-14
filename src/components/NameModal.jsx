import { useState } from "react";

function NameModal({
    isOpen,
    onClose,
    onStart
}) {
    const [playerName, setPlayerName] = useState("");

    if (!isOpen) return null;

    function handleStart() {
        console.log("handleStart called");

        if (playerName.trim() === "") {
            alert("Please enter your name.");
            return;
        }

        console.log("Calling onStart:", playerName);

        onStart(playerName);
        setPlayerName("");
        onClose();
    }

    return (
        <div className="modal-overlay">
            <div className="modal">
                <h2>Start Quiz</h2>

                <p>Enter your name to continue.</p>

                <input
                    type="text"
                    placeholder="Your Name"
                    value={playerName}
                    onChange={(e) => setPlayerName(e.target.value)}
                />

                <div className="modal-buttons">

                    <button
                        className="cancel-btn"
                        onClick={() => {
                            setPlayerName("");
                            onClose();
                        }}
                    >
                        Cancel
                    </button>

                    <button
                        className="start-btn"
                        onClick={handleStart}
                    >
                        Start Quiz
                    </button>

                </div>
            </div>
        </div>
    );
}

export default NameModal;