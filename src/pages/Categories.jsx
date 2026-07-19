import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import CategoryCard from "../components/CategoryCard";
import { categories } from "../data/categories.jsx";
import {
    FaHtml5,
    FaCss3Alt,
    FaJsSquare,
    FaReact,
    FaCode,
    FaTrophy,
    FaBrain
} from "react-icons/fa";
function Categories() {
    return (
        <>
            <Navbar />
            <main className="categories-page">
                <div className="categories-header">
                    <div className="glow glow1"></div>
                    <div className="glow glow2"></div>
                    <div className="glow glow3"></div>
                    <h1>Select Your Quiz Category</h1>
                    <p>
                        Pick your favorite category and challenge yourself.
                    </p>
                </div>
                <div className="categories-slider">
                    <section className="categories-grid">
                        {categories.map((category, index) => (
                            <CategoryCard
                                key={index}
                                category={category}
                            />
                        ))}
                    </section>
                </div>
            </main>
            <Footer />
        </>
    );
}

export default Categories;