import { useEffect } from "react";
function Timer({ timeLeft, setTimeLeft, onTimeUp }) {
    useEffect(() => {
        if (timeLeft === 0) {
            onTimeUp();
            return;
        }
        const timer = setTimeout(() => {
            setTimeLeft(timeLeft - 1);
        }, 1000);
        return () => clearTimeout(timer);
    }, [timeLeft]);
    return (
        <h3>⏱ Time Left: {timeLeft}s</h3>
    );
}

export default Timer;