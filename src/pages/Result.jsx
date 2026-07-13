import { useState } from "react";
import { useLocation, Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

function Result() {

    const location = useLocation();

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

                <h1>
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
                </h1>

                <h3>
                    {
                        score === totalQuestions
                            ? `Outstanding, ${playerName}!`
                            : score >= totalQuestions * 0.8
                            ? `Excellent work, ${playerName}!`
                            : score >= totalQuestions * 0.5
                            ? `Nice try, ${playerName}!`
                            : score > 0
                            ? `${playerName}, you'll do even better next time!`
                            : `${playerName}, every expert starts as a beginner.`
                    }
                </h3>
                <h2>{category} Quiz</h2>

                <p>
                    You scored
                </p>

                <h1>
                    {score} / {totalQuestions}
                </h1>
                <h3>
                    {Math.round((score / totalQuestions) * 100)}%
                </h3>

                <p className="feedback">
                {
                    score === totalQuestions
                        ? "You answered every question correctly. Amazing work!"
                        : score >= totalQuestions * 0.8
                        ? "You have a strong understanding of this topic."
                        : score >= totalQuestions * 0.5
                        ? "You're getting there. A little more practice will help."
                        : score > 0
                        ? "Review the answers and try again to improve your score."
                        : "Everyone starts somewhere. Review the quiz and give it another shot!"
                }

                </p>

                <div className="result-buttons">
                    <button
                        onClick={() => setShowReview(!showReview)}
                    >
                        {showReview ? "Hide Review" : "Review Answers"}
                    </button>

                    <Link to="/">
                        <button>
                            Back to Home
                        </button>
                    </Link>

                </div>

                {
                    showReview && (

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
                                        <strong>Question:</strong>
                                        <br />
                                        {answer.question}
                                    </p>

                                    <p>
                                        <strong>Your Answer:</strong>
                                        <br />

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

                                    {
                                        answer.selected !== answer.correct && (

                                            <p>

                                                <strong>Correct Answer:</strong>

                                                <br />

                                                <span className="correct-answer">
                                                    {answer.correct}
                                                </span>

                                            </p>

                                        )
                                    }

                                </div>

                            ))}

                        </div>

                    )
                }

            </main>

            <Footer />
        </>
    );
}

export default Result;