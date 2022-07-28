import "./App.css";

import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/Hero/Hero";
import CardList from "./components/CardList/CardList";

// TODO extract this to an API
import Experiences from "./temp-db/Experiences"

function App() {
    // TODO extract this to an API
    const cards = Experiences;

    return (
        <div className="App">
            <Navbar />
            <Hero />
            <CardList cards={cards}/>
        </div>
    );
}

export default App;
