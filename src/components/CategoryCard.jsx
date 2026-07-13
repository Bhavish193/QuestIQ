import { useState } from "react";
import { useNavigate } from "react-router-dom";

import { FaHtml5, FaCss3Alt, FaJs, FaReact } from "react-icons/fa";

import NameModal from "./NameModal";

function CategoryCard({ category }) {

    const navigate = useNavigate();

    const [showModal, setShowModal] = useState(false);
    const [playerName, setPlayerName] = useState("");

    const getIcon = () => {
        switch (category.name) {
            case "HTML":
                return <FaHtml5 />;

            case "CSS":
                return <FaCss3Alt />;

            case "JavaScript":
                return <FaJs />;

            case "React":
                return <FaReact />;

            default:
                return null;
        }
    };

    function startQuiz() {

        if (playerName.trim() === "") {
            alert("Please enter your name.");
            return;
        }

        navigate("/quiz", {
            state: {
                category,
                playerName
            }
        });

    }

    return (
        <>
            <div className="category-card">

                <div className="category-icon">
                    {getIcon()}
                </div>

                <h2>{category.name}</h2>

                <p>{category.questions} Questions</p>

                <button onClick={() => setShowModal(true)}>
                    Start Quiz
                </button>

            </div>

            {
                showModal && (

                    <NameModal

                        playerName={playerName}

                        setPlayerName={setPlayerName}

                        onStart={startQuiz}

                        onCancel={() => setShowModal(false)}

                    />

                )
            }

        </>
    );
}

export default CategoryCard;