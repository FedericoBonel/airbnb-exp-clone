import "./Hero.css";
import PhotoGrid from "../../images/img-exp-grid.png";

const Hero = () => {
    return (
        <section className="hero--container">
            <img src={PhotoGrid} alt="photogrid" id="hero--container_img" />
            <div className="hero--container_text">
                <h1>Online Experiences</h1>
                <p>
                    Join unique interactive activities led by one-of-a-kind
                    hosts—all without leaving home.
                </p>
            </div>
        </section>
    );
};

export default Hero;
