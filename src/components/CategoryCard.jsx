import { useNavigate } from "react-router-dom";
import { useState } from "react";

import NameModal from "./NameModal";

function CategoryCard({ category }) {

    const navigate = useNavigate();

    const [showModal, setShowModal] = useState(false);

    function startQuiz(playerName) {
        console.log("Player:", playerName);
        console.log("Category:", category);

        navigate("/quiz", {
            state: {
                category: {
                    id: category.id,
                    name: category.name,
                    subtitle: category.subtitle,
                    questions: category.questions,
                    api: category.api,
                    apiCategory: category.apiCategory
                },
                playerName
            }
        });
    }

    return (
        <>
            <div className="category-card">
                <div className="category-top">
                    <div className="category-icon">
                        {category.icon}
                    </div>
                </div>
                <h2>{category.name}</h2>
                <span className="category-tag">
                    {category.subtitle}
                </span>
                <div className="category-divider"></div>
                <p>{category.questions} Questions</p>
                <button
                    className="category-btn"
                    onClick={() => setShowModal(true)}
                >
                    Start Quiz →
                </button>
            </div>
            <NameModal
                isOpen={showModal}
                onClose={() => setShowModal(false)}
                onStart={startQuiz}
            />
        </>
    );
}

export default CategoryCard;