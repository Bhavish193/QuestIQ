import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { Link } from "react-router-dom";

import {
    FaHtml5,
    FaCss3Alt,
    FaReact,
    FaJsSquare,
    FaCode,
    FaTrophy,
    FaLaptopCode,
    FaBrain
} from "react-icons/fa";

function Home() {
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
                        <FaTrophy className="icon trophy" />
                        <FaLaptopCode className="icon laptop" />
                        <FaBrain className="icon brain" />
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
                                <h2>20+</h2>
                                <p>Questions</p>
                            </div>

                        </div>

                        <div className="divider"></div>

                        <div className="stat-item">

                            <div className="stat-icon">🧩</div>

                            <div>
                                <h2>4</h2>
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

                    <div className="feature-card">

                        <div className="feature-circle">
                            📚
                        </div>

                        <div>
                            <h3>Multiple Categories</h3>

                            <p>
                                Practice HTML, CSS,
                                JavaScript and React.
                            </p>
                        </div>
                         <div className="feature-arrow">
                            →
                        </div>

                    </div>

                    <div className="feature-card">

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

                    <div className="feature-card">

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