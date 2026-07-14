import { useState } from "react";
import {
    FaHtml5,
    FaCss3Alt,
    FaJsSquare,
    FaReact,
    FaCode,
    FaBrain,
    FaTrophy
} from "react-icons/fa";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import ConfirmModal from "../components/ConfirmModal";

function Leaderboard() {

    const [showModal, setShowModal] = useState(false);
    const [leaderboard, setLeaderboard] = useState(
        JSON.parse(localStorage.getItem("leaderboard")) || []
    );

    leaderboard.sort((a, b) => {

        if (b.score !== a.score) {
            return b.score - a.score;
        }

        return a.total - b.total;
    });

    function clearLeaderboard() {
        localStorage.removeItem("leaderboard");
        setLeaderboard([]);
        setShowModal(false);
    }

    return (
        <>
            <Navbar />

            <main className="leaderboard-wrapper">
                <div className="leaderboard-icons">

                    <FaHtml5 className="bg-icon html-bg" />
                    <FaCss3Alt className="bg-icon css-bg" />
                    <FaJsSquare className="bg-icon js-bg" />
                    <FaReact className="bg-icon react-bg" />
                    <FaCode className="bg-icon code-bg" />
                    <FaBrain className="bg-icon brain-bg" />
                    <FaTrophy className="bg-icon trophy-bg" />

                </div>

                <div className="leaderboard-glow glow-left"></div>
                <div className="leaderboard-glow glow-right"></div>

                <section className="leaderboard-page">

                    <h1>Leaderboard</h1>

                    <table>

                        <thead>

                            <tr>
                                <th>Rank</th>
                                <th>Name</th>
                                <th>Category</th>
                                <th>Score</th>
                            </tr>

                        </thead>

                        <tbody>

                            {leaderboard.length === 0 ? (

                                <tr>

                                    <td colSpan="4">
                                        No quiz attempts yet.
                                    </td>

                                </tr>

                            ) : (

                                leaderboard.map((player, index) => (

                                    <tr key={index}>

                                        <td>
                                            {
                                                index === 0
                                                    ? "🥇"
                                                    : index === 1
                                                    ? "🥈"
                                                    : index === 2
                                                    ? "🥉"
                                                    : index + 1
                                            }
                                        </td>

                                        <td>{player.name}</td>

                                        <td>{player.category}</td>

                                        <td>
                                            {player.score}/{player.total}
                                        </td>

                                    </tr>

                                ))

                            )}

                        </tbody>

                    </table>

                    <button
                        className="clear-btn"
                        onClick={() => setShowModal(true)}
                    >
                        Clear Leaderboard
                    </button>

                </section>

            </main>

            <ConfirmModal
                isOpen={showModal}
                title="Clear Leaderboard?"
                message="This action cannot be undone."
                onConfirm={clearLeaderboard}
                onCancel={() => setShowModal(false)}
            />

            <Footer />
        </>
    );
}

export default Leaderboard;