import "./Navbar.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAirbnb } from "@fortawesome/free-brands-svg-icons";

const Navbar = () => {
    return (
        <nav className="navbar-container">
            <div className="navbar--container_brand">
                <FontAwesomeIcon icon={faAirbnb} size={"2x"} id="bnb-icon"/>
                <p>airbnb</p>
            </div>
        </nav>
    );
};

export default Navbar;
