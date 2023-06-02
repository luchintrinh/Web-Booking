import "./Card.css";
import "../../../../index.css";
const Card = () => {
  return (
    <div className="header py-5">
      <h1 className="header__title mb-3">
        A lifetime of discounts? It's Genius
      </h1>
      <p className="header__content mb-2 fs-6">
        Get rewarded for your travels-unlock instant savings of 10% or more with
        a free account
      </p>
      <button className="header__button fs-5 p-2">Sign in/Register</button>
    </div>
  );
};
export default Card;
