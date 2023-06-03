import "./colFooter.css";

const ColFooter = (props) => {
  const arr = props.col_number[0];
  console.log(arr);
  return (
    <div className={`item-${props.index} text-primary footer__item`}>
      {arr.map((el, index) => {
        return (
          <div className="mb-3" key={index}>
            {el}
          </div>
        );
      })}
    </div>
  );
};

export default ColFooter;
