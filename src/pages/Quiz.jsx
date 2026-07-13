import { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Timer from "../components/Timer";

import { questions } from "../data/questions";

function Quiz() {
    const location = useLocation();
    const navigate = useNavigate();

    const { category, playerName } = location.state;

    const quizQuestions = questions[category.name];

    const [currentQuestion, setCurrentQuestion] = useState(0);
    const [selectedAnswer, setSelectedAnswer] = useState("");
    const [score, setScore] = useState(0);
    const [userAnswers, setUserAnswers] = useState([]);
    const [timeLeft, setTimeLeft] = useState(15);

    useEffect(() => {
        setTimeLeft(15);
    }, [currentQuestion]);

    function handleTimeUp() {
        nextQuestion(true);
    }

    function nextQuestion(isTimeUp = false) {

        if (!isTimeUp && selectedAnswer === "") {
            alert("Please select an answer.");
            return;
        }

        let newScore = score;
        const current = quizQuestions[currentQuestion];

        const answerRecord = {
            question: current.question,
            selected: selectedAnswer || "Not Answered",
            correct: current.answer
        };

        const updatedAnswers = [...userAnswers, answerRecord];

        setUserAnswers(updatedAnswers);

        if (selectedAnswer === current.answer) {
            newScore++;
            setScore(newScore);
        }

        if (currentQuestion < quizQuestions.length - 1) {

            setCurrentQuestion(currentQuestion + 1);
            setSelectedAnswer("");

        } else {
             const leaderboard =
                JSON.parse(localStorage.getItem("leaderboard")) || [];

            leaderboard.push({
                name: playerName,
                category: category.name,
                score: newScore,
                total: quizQuestions.length
            });

            localStorage.setItem(
                "leaderboard",
                JSON.stringify(leaderboard)
            );

            navigate("/result", {
                state: {
                    playerName,
                    score: newScore,
                    totalQuestions: quizQuestions.length,
                    category: category.name,
                    answers: updatedAnswers
                }
            });

        }
    }

    return (
        <>
            <Navbar />

            <main className="quiz-page">

                <h1>{category.name} Quiz</h1>

                <h2>
                    Question {currentQuestion + 1} of {quizQuestions.length}
                </h2>

                <Timer
                    timeLeft={timeLeft}
                    setTimeLeft={setTimeLeft}
                    onTimeUp={handleTimeUp}
                />

                <div className="progress-bar">
                    <div
                        className="progress-fill"
                        style={{
                            width: `${(currentQuestion / quizQuestions.length) * 100}%`
                        }}
                    ></div>
                </div>

                <p className="progress-text">
                    {Math.round((currentQuestion / quizQuestions.length) * 100)}% Completed
                </p>
                <h3>
                    {quizQuestions[currentQuestion].question}
                </h3>

                <div className="options">

                    {quizQuestions[currentQuestion].options.map((option, index) => (

                        <button
                            key={index}
                            className={
                                selectedAnswer === option
                                    ? "option selected"
                                    : "option"
                            }
                            onClick={() => setSelectedAnswer(option)}
                        >
                            {option}
                        </button>

                    ))}

                </div>

                <button
                    className="next-btn"
                    onClick={nextQuestion}
                >
                    {currentQuestion === quizQuestions.length - 1
                        ? "Finish Quiz"
                        : "Next Question"}
                </button>

            </main>

            <Footer />
        </>
    );
}

export default Quiz;