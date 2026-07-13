import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import CategoryCard from "../components/CategoryCard";
import { categories } from "../data/categories";

function Categories() {
    return (
        <>
            <Navbar />
            <main className="categories-page">
                <h1>Choose a Category</h1>
                <p>
                    Select a category and test your knowledge.
                </p>
                <div className="categories-grid">
                    {categories.map((category) => (
                        <CategoryCard
                            key={category.id}
                            category={category}
                        />
                    ))}
                </div>
            </main>
            <Footer />
        </>
    );
}

export default Categories;