import "./description.css";
const Description = (props) => {
  return (
    <div className="description">
      <div className="name fs-2 fw-bold text-white">{props.name}</div>
      <div className="subtext fs-3 fw-bold text-white">{props.subtext}</div>
    </div>
  );
};
export default Description;
