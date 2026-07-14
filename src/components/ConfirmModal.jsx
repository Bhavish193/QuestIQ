function ConfirmModal({
    isOpen,
    title,
    message,
    onConfirm,
    onCancel
}) {
    if (!isOpen) return null;

    return (
        <div className="modal-overlay">
            <div className="modal confirm-modal">

                <h2>{title}</h2>

                <p>{message}</p>

                <div className="modal-buttons">

                    <button
                        className="cancel-btn"
                        onClick={onCancel}
                    >
                        Cancel
                    </button>

                    <button
                        className="danger-btn"
                        onClick={onConfirm}
                    >
                        Clear
                    </button>

                </div>

            </div>
        </div>
    );
}

export default ConfirmModal;