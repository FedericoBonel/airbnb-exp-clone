import "./Card.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";
//! REMOVE THIS
import ExpImg from "../../images/katie-zaferes.png";

const Card = ({ experience }) => {
    return (
        <article className="card--container">
            <div className="card--container_img">
                <img src={ExpImg} alt="exp-img" />
            </div>
            <div className="card--container_raiting">
                <FontAwesomeIcon icon={faStar} id="star-icon" />
                <p id="card--container_raiting-number">
                    {`${experience.rating.toFixed(1)}`}
                </p>
                <p className="grey-font">{`(${experience.reviewCount}) • ${experience.country}`}</p>
            </div>
            <p className="card--container_title">{experience.title}</p>
            <p className="card--container_price">
                <strong>{`From $${experience.usdPerPerson}`}</strong> / person
            </p>
        </article>
    );
};

export default Card;
