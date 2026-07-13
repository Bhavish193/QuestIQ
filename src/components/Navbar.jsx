import { Link } from "react-router-dom";
import { FaBolt, FaHome, FaTrophy } from "react-icons/fa";

function Navbar() {
    return (
        <nav className="navbar">

            <Link to="/" className="logo">
                <FaBolt />
                <span>QuestIQ</span>
            </Link>

            <div className="nav-links">

                <Link to="/">
                    <FaHome />
                    <span>Home</span>
                </Link>

                <Link to="/leaderboard">
                    <FaTrophy />
                    <span>Leaderboard</span>
                </Link>

            </div>

        </nav>
    );
}

export default Navbar;