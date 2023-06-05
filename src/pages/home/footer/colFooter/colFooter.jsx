import "./colFooter.css";
// render từng cột cho footer
const ColFooter = (props) => {
  // xử lý dữ liệu từ component cha
  const arr = props.col_number.map((el) => el.col_values)[0];
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
