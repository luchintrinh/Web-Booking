import "./detailContent.css";
const DetailContent = (props) => {
  const { detail } = props;

  return (
    <div className="detail container">
      <div className="detail__someInfo d-flex justify-content-between">
        <div className="detail__someInfo--news">
          <h2 className="detail__name mb-2">{detail.name}</h2>
          <div className="detail__address mb-2">
            <span className="detail__address--text">{detail.address}</span>
          </div>
          <div className="detail__distance text-primary mb-2">
            {detail.distance}
          </div>
          <div className="detail__price text-success mb-3">{detail.price}</div>
        </div>
        <div className="detail__someInfo--button">
          <button className="btn btn-primary">Reserve or book now!</button>
        </div>
      </div>
      <div className="detail__images mb-5">
        {detail.photos.map((el, index) => {
          return (
            <div className="detail__images--item w-100" key={index}>
              <img src={el} alt="" className="object-fit-cover" width="100%" />
            </div>
          );
        })}
      </div>
      <div className="detail__footer d-flex mb-5">
        <div className="detail__footer--left">
          <div className="detail__footer--title mb-4">
            <h2>{detail.title}</h2>
          </div>
          <div className="detail__footer--description pe-3">
            {detail.description}
          </div>
        </div>
        <div className="detail__footer--right p-5">
          <div className="detail__nineDay">
            <h3 className="mb-4">Perfect for a 9-night stay</h3>
            <p className="mb-4">
              Located in the real heart of Krakow, this property has an
              excellent location score of 9.8
            </p>
            <div className="detail__price mb-4 fs-3">
              <strong>{`$${detail.nine_night_price}`}</strong>
              <span>(9 nights)</span>
            </div>
            <div className="detail__footer--button">
              <button className="btn btn-primary">Reserve or book now!</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DetailContent;
