import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

function Leaderboard() {
    const leaderboard =
        JSON.parse(localStorage.getItem("leaderboard")) || [];

    leaderboard.sort((a, b) => {

    if (b.score !== a.score) {
        return b.score - a.score;
    }
    return a.total - b.total;
    });

    function clearLeaderboard() {

        const confirmClear = window.confirm(
            "Are you sure you want to clear the leaderboard?"
        );

        if (!confirmClear) {
            return;
        }

        localStorage.removeItem("leaderboard");
        window.location.reload();
    }

    return (
        <>
            <Navbar />
            <main className="leaderboard-page">
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
                    onClick={clearLeaderboard}
                >
                    Clear Leaderboard
                </button>

            </main>

            <Footer />
        </>
    );
}

export default Leaderboard;