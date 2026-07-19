import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import {
    FaHtml5,
    FaCss3Alt,
    FaJsSquare,
    FaReact,
    FaCode,
    FaBrain,
    FaTrophy,
    FaGlobe,
    FaFlask,
    FaFilm,
    FaFutbol,
    FaMusic,
    FaGamepad
} from "react-icons/fa";

import { MdHistoryEdu } from "react-icons/md";

function Home() {
    const navigate = useNavigate();
    return (
        <>
            <Navbar />
            <main>
                <section className="welcome">
                    <div className="glow glow1"></div>
                    <div className="glow glow2"></div>
                    <div className="glow glow3"></div>

                    <div className="hero-icons">
                        <FaHtml5 className="icon html" />
                        <FaCss3Alt className="icon css" />
                        <FaJsSquare className="icon js" />
                        <FaReact className="icon react" />
                        <FaCode className="icon code" />
                        <FaBrain className="icon brain" />
                        <FaTrophy className="icon trophy" />

                        <FaGlobe className="icon globe" />
                        <FaFlask className="icon flask" />
                        <MdHistoryEdu className="icon history" />
                        <FaFilm className="icon movie" />
                        <FaFutbol className="icon sports" />
                        <FaMusic className="icon music" />
                        <FaGamepad className="icon gaming" />
                    </div>
                    <h1>Challenge Your Knowledge</h1>
                    <p>
                        Test your skills with interactive quizzes across
                        different categories.
                    </p>
                    <Link to="/categories">
                        <button>
                            Start Quiz →
                        </button>
                    </Link>
                    <section className="stats-bar">
                        <div className="stat-item">
                            <div className="stat-icon">📖</div>
                            <div>
                                <h2>100+</h2>
                                <p>Questions</p>
                            </div>
                        </div>
                        <div className="divider"></div>
                        <div className="stat-item">
                            <div className="stat-icon">🧩</div>
                            <div>
                                <h2>11</h2>
                                <p>Categories</p>
                            </div>
                        </div>
                        <div className="divider"></div>
                        <div className="stat-item">
                            <div className="stat-icon">⏱</div>
                            <div>
                                <h2>15s</h2>
                                <p>Timer</p>
                            </div>
                        </div>
                    </section>
                </section>
               <section className="features">
                    <div
                        className="feature-card"
                        onClick={() => navigate("/categories")}
                    >
                        <div className="feature-circle">
                            📚
                        </div>
                        <div>
                            <h3>Multiple Categories</h3>
                            <p>
                                Practice from different categories.
                            </p>
                        </div>
                        <div className="feature-arrow">
                            →
                        </div>
                    </div>
                    <div
                        className="feature-card"
                        onClick={() => navigate("/leaderboard")}
                    >
                        <div className="feature-circle">
                            🏆
                        </div>
                        <div>
                            <h3>Leaderboard</h3>
                            <p>
                                Compare scores with friends
                                and improve every day.
                            </p>
                        </div>
                        <div className="feature-arrow">
                            →
                        </div>
                    </div>
                    <div
                        className="feature-card"
                        onClick={() => navigate("/categories")}
                    >
                        <div className="feature-circle">
                            ⚡
                        </div>
                        <div>
                            <h3>Instant Results</h3>
                            <p>
                                Review every answer and
                                learn from mistakes.
                            </p>
                        </div>
                        <div className="feature-arrow">
                            →
                        </div>
                    </div>
                </section>
            </main>
            <Footer />
        </>
    );
}

export default Home;