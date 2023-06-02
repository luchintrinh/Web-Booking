import "./item.css";
const CategoryItem = (props) => {
  return (
    <div className="category">
      <div className="category__item--img">
        <img
          src={props.image}
          width="100%"
          style={{ height: "200px" }}
          alt=""
        />
      </div>
      <div className="category__des">
        <div className="category__item--name fs-5 fw-bold">{props.name}</div>
        <div className="category__item--count">{`${props.count} hotels`}</div>
      </div>
    </div>
  );
};

export default CategoryItem;
