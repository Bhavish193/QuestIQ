import { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Timer from "../components/Timer";

import { questions } from "../data/questions";
import {
    FaHtml5,
    FaCss3Alt,
    FaJsSquare,
    FaReact,
    FaCode,
    FaBrain,
    FaTrophy
} from "react-icons/fa";

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
    const progress = (currentQuestion / quizQuestions.length) * 100;
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

            <main className="quiz-wrapper">

                <div className="quiz-icons">
                    <FaHtml5 className="bg-icon html-bg" />
                    <FaCss3Alt className="bg-icon css-bg" />
                    <FaCode className="bg-icon code-bg" />
                    <FaTrophy className="bg-icon trophy-bg" />
                    <FaJsSquare className="bg-icon js-bg" />
                    <FaBrain className="bg-icon brain-bg" />
                    <FaReact className="bg-icon react-bg" />
                </div>

                <div className="quiz-glow glow-left"></div>
                <div className="quiz-glow glow-right"></div>

                <section className="quiz-page">

                    <div className="quiz-container">

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
                                    width: `${progress}%`
                                }}
                            ></div>
                        </div>

                        <p className="progress-text">
                            {progress}% Completed
                        </p>

                        <h3>
                            {quizQuestions[currentQuestion].question}
                        </h3>

                        <div className="options">

                            {quizQuestions[currentQuestion].options.map(
                                (option, index) => (

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

                                )
                            )}

                        </div>

                        <button
                            className="next-btn"
                            onClick={nextQuestion}
                        >
                            {currentQuestion === quizQuestions.length - 1
                                ? "Finish Quiz"
                                : "Next Question"}
                        </button>

                    </div>

                </section>

            </main>

            <Footer />
        </>
    );
}

export default Quiz;