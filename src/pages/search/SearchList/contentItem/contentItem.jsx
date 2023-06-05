import "./contentItem.css";
const ContentItem = (props) => {
  const { item } = props;
  return (
    <div
      className="itemSearch border-2 d-flex p-3 align-items-start mb-3"
      style={{ border: "1px solid rgba(0,0,0, 0.2)" }}
      onClick={props.clickItem}
    >
      <div className="itemSearch__image h-100 item">
        <img src={item.image_url} width="100%" height="100%" alt="" />
      </div>
      <div className="itemSearch__description item">
        <h3 className="text-primary mb-3">{item.name}</h3>
        <p>{`${item.distance} from center`}</p>
        <span className="p-1 bg-success rounded text-white">{item.tag}</span>
        <p className="mt-2 fw-bold py-1">{item.description}</p>
        <div className="pb-2 room-type">{item.type}</div>
        <div className="fw-bold text-success">
          {item.free_cancel ? "Free cancellation" : ""}
        </div>
        <div className="text-success">
          {item.free_cancel
            ? "You can cancel later, so lock this great price today!"
            : ""}
        </div>
      </div>
      <div className="itemSearch__review d-flex flex-column gap-5 item">
        <div className="item__review--rate d-flex gap-5 align-self-end">
          <div className="rate-text">{item.rate_text}</div>
          <div className="rate ">
            <span className="p-1 text-white">{item.rate}</span>
          </div>
        </div>
        <div className="item__review--price text-right mt-5 d-flex flex-column align-items-end">
          <div className="fs-1 text-right">{`$${item.price}`}</div>
          <div
            className="text-right pb-2"
            style={{ fontSize: "14px", color: "rgba(0, 0, 0, 0.4)" }}
          >
            Includes taxes and fees
          </div>
          <button className="btn btn-primary">See Availability</button>
        </div>
      </div>
    </div>
  );
};
export default ContentItem;
