import "./Card.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";

const Card = ({ item }) => {
    const { title, stats, location, price, coverImg, openSpots } = item;
    const soldOut = openSpots === 0;

    let badgeText;
    if (soldOut) {
        badgeText = "SOLD OUT";
    } else if (location.toLowerCase() === "online") {
        badgeText = "ONLINE";
    }

    return (
        <article className="card--container">
            <div>
                {badgeText && (
                    <div className="card--container_img-badge">{badgeText}</div>
                )}
                <img
                    className="card--container_img"
                    src={require(`../../images/${coverImg}`)}
                    alt="exp-img"
                />
            </div>
            <div className="card--container_raiting">
                <FontAwesomeIcon icon={faStar} id="star-icon" />
                <p id="card--container_raiting-number">{`${stats.rating.toFixed(
                    1
                )}`}</p>
                <p className="grey-font">{`(${stats.reviewCount}) • ${location}`}</p>
            </div>
            <p className="card--container_title">{title}</p>
            <p className="card--container_price">
                <strong>{`From $${price}`}</strong> / person
            </p>
        </article>
    );
};

export default Card;
