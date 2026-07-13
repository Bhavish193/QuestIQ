function NameModal({
    playerName,
    setPlayerName,
    onStart,
    onCancel
}) {
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
                        onClick={onCancel}
                    >
                        Cancel
                    </button>
                    <button
                        className="start-btn"
                        onClick={onStart}
                    >
                        Start Quiz
                    </button>
                </div>
            </div>
        </div>
    );
}

export default NameModal;