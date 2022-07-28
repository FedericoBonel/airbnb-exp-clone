import "./Card.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";
//! REMOVE THIS
import ExpImg from "../../images/katie-zaferes.png";

const Card = ({ title, rating, reviewCount, location, price }) => {
    return (
        <article className="card--container">
            <img className="card--container_img" src={ExpImg} alt="exp-img" />
            <div className="card--container_raiting">
                <FontAwesomeIcon icon={faStar} id="star-icon" />
                <p id="card--container_raiting-number">
                    {`${rating.toFixed(1)}`}
                </p>
                <p className="grey-font">{`(${reviewCount}) • ${location}`}</p>
            </div>
            <p className="card--container_title">{title}</p>
            <p className="card--container_price">
                <strong>{`From $${price}`}</strong> / person
            </p>
        </article>
    );
};

export default Card;
