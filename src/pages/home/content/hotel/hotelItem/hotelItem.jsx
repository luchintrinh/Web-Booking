import "./hotelItem.css";
const HotelItem = (props) => {
  const nameClickHandler = (e) => {
    window.location.replace("/detail");
  };
  return (
    <div className="hotel__item col-3 mb-5">
      <div className="hotel__item--image mb-3">
        <img src={props.img_url} width="100%" alt="" />
      </div>
      <div className="hotel__information">
        <a href="#">
          <h4
            className="hotel__information--name fs-5"
            onClick={nameClickHandler}
          >
            {props.name}
          </h4>
        </a>
        <p className="hotel__information--city fs-5">{props.city}</p>
        <p className="hotel__information--price fs-5 fw-bold">{`Starting from $${props.price}`}</p>
        <span className="hotel__information--rate p-1 me-3 bg-primary">
          {props.rate}
        </span>
        <span className="hotel__information--type ">{props.type}</span>
      </div>
    </div>
  );
};

export default HotelItem;
