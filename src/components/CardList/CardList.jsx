import "./CardList.css";
import Card from "../Card/Card";

const CardList = ({ cards }) => {
    const renderedCards = cards.map((card) => (
        <Card key={card.id} item={card} />
    ));

    return <section className="cards-container">{renderedCards}</section>;
};

export default CardList;
