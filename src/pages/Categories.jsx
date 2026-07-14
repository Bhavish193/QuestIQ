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

                <div className="category-icons">

                    <FaHtml5 className="bg-icon html-bg" />
                    <FaCss3Alt className="bg-icon css-bg" />
                    <FaJsSquare className="bg-icon js-bg" />
                    <FaReact className="bg-icon react-bg" />
                    <FaCode className="bg-icon code-bg" />
                    <FaTrophy className="bg-icon trophy-bg" />
                    <FaBrain className="bg-icon brain-bg" />

                </div>

                <div className="categories-header">

                    <h1>Select Your Quiz Category</h1>

                    <p>
                        Pick your favorite technology and challenge yourself.
                    </p>

                </div>

                <section className="categories-grid">

                    {categories.map((category,index)=>(

                        <CategoryCard
                            key={index}
                            category={category}
                        />

                    ))}

                </section>

            </main>

            <Footer />
        </>
    );
}

export default Categories;