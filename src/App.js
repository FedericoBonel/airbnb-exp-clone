import "./App.css";

import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/Hero/Hero";
import Card from "./components/Card/Card";

function App() {
    const experience = {
        rating: 5.0,
        reviewCount: 6,
        title: "Life lessons with Katie Zaferes",
        usdPerPerson: 136,
        location: "USA",
    };

    return (
        <div className="App">
            <Navbar />
            <Hero />
            <section>
                <Card
                    title={experience.title}
                    rating={experience.rating}
                    reviewCount={experience.reviewCount}
                    price={experience.usdPerPerson}
                    location={experience.location}
                />
            </section>
        </div>
    );
}

export default App;
