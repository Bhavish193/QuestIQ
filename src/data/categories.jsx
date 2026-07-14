import {
    FaHtml5,
    FaCss3Alt,
    FaJsSquare,
    FaReact,
    FaGlobe,
    FaFlask,
    FaFilm,
    FaFutbol,
    FaMusic,
    FaGamepad
} from "react-icons/fa";

import { MdHistoryEdu } from "react-icons/md";

export const categories = [
    {
        id: 1,
        name: "HTML",
        subtitle: "Markup Language",
        questions: 10,
        icon: <FaHtml5 />,
        api: false
    },
    {
        id: 2,
        name: "CSS",
        subtitle: "Styling",
        questions: 10,
        icon: <FaCss3Alt />,
        api: false
    },
    {
        id: 3,
        name: "JavaScript",
        subtitle: "Programming",
        questions: 10,
        icon: <FaJsSquare />,
        api: false
    },
    {
        id: 4,
        name: "React",
        subtitle: "Frontend Library",
        questions: 10,
        icon: <FaReact />,
        api: false
    },
    {
        id: 5,
        name: "General Knowledge",
        subtitle: "Mixed Trivia",
        questions: 10,
        icon: <FaGlobe />,
        api: true,
        apiCategory: "general_knowledge"
    },
    {
        id: 6,
        name: "Science",
        subtitle: "Physics • Biology",
        questions: 10,
        icon: <FaFlask />,
        api: true,
        apiCategory: "science"
    },
    {
        id: 7,
        name: "History",
        subtitle: "World History",
        questions: 10,
        icon: <MdHistoryEdu />,
        api: true,
        apiCategory: "history"
    },
    {
        id: 8,
        name: "Movies",
        subtitle: "Film Trivia",
        questions: 10,
        icon: <FaFilm />,
        api: true,
        apiCategory: "film_and_tv"
    },
    {
        id: 9,
        name: "Sports",
        subtitle: "Sports Trivia",
        questions: 10,
        icon: <FaFutbol />,
        api: true,
        apiCategory: "sport_and_leisure"
    },
    {
        id: 10,
        name: "Music",
        subtitle: "Music Quiz",
        questions: 10,
        icon: <FaMusic />,
        api: true,
        apiCategory: "music"
    },
    {
        id: 11,
        name: "Gaming",
        subtitle: "Video Games",
        questions: 10,
        icon: <FaGamepad />,
        api: true,
        apiCategory: "gaming"
    },
]