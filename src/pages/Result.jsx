import { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

function Result() {

    const location = useLocation();
    const navigate = useNavigate();

    const {
        playerName,
        score,
        totalQuestions,
        category,
        answers
    } = location.state;

    const [showReview, setShowReview] = useState(false);

    return (
        <>
            <Navbar />
            <main className="result-page">
                <div className="result-glow glow-left"></div>
                <div className="result-glow glow-right"></div>
                <div className="result-card">
                    {showReview && (
                        <div className="review-section">

                            <h2>Answer Review</h2>

                            {answers.map((answer, index) => (

                                <div
                                    key={index}
                                    className="review-card"
                                >

                                    <h3>
                                        Question {index + 1}
                                    </h3>

                                    <p>
                                        <strong>Q:</strong> {answer.question}
                                    </p>

                                    <p>
                                        <strong>Your Answer:</strong>{" "}

                                        <span
                                            className={
                                                answer.selected === answer.correct
                                                    ? "correct-answer"
                                                    : "wrong-answer"
                                            }
                                        >
                                            {answer.selected}
                                        </span>

                                    </p>

                                    <p>
                                        <strong>Correct Answer:</strong>{" "}

                                        <span className="correct-answer">
                                            {answer.correct}
                                        </span>

                                    </p>

                                </div>

                            ))}

                        </div>

                    )}

                    <h1>🎉 Congratulations!</h1>

                    <p className="result-category">
                        {category} Quiz Completed
                    </p>

                    <div className="score-panel">
                        <h2 className="score-percent">
                            {Math.round((score / totalQuestions) * 100)}%
                        </h2>
                        
                        <span className="score-value">
                            {score} / {totalQuestions}
                        </span>

                        <h3 className="feedback-title">
                            {
                                score === totalQuestions
                                    ? "🏆 Perfect Score!"
                                    : score >= totalQuestions * 0.8
                                    ? "🎉 Great Job!"
                                    : score >= totalQuestions * 0.5
                                    ? "👍 Good Effort!"
                                    : score > 0
                                    ? "📚 Keep Practicing!"
                                    : "💪 Don't Give Up!"
                            }
                        </h3>

                    </div>
                    <div className="result-stats">

                        <div className="stat-box">
                            <h3>✔</h3>
                            <span>Correct</span>
                            <strong>{score}</strong>
                        </div>

                        <div className="stat-box">
                            <h3>✖</h3>
                            <span>Wrong</span>
                            <strong>{totalQuestions - score}</strong>
                        </div>

                        <div className="stat-box">
                            <h3>📚</h3>
                            <span>Questions</span>
                            <strong>{totalQuestions}</strong>
                        </div>

                    </div>

                    <div className="result-buttons">

                        <button
                            onClick={() => setShowReview(true)}
                        >
                            Review Answers
                        </button>

                        <button
                            className="glass-btn"
                            onClick={() => navigate("/")}
                        >
                            Home
                        </button>

                        <button
                            className="glass-btn"
                            onClick={() =>
                                navigate("/categories")
                            }
                        >
                            Retry
                        </button>

                    </div>

                </div>

            </main>
            <Footer />
        </>
    );
}

export default Result;