import "./footer.css";
import ColFooter from "./colFooter/colFooter";
import footerArr from "./footer.json";
const Footer = () => {
  return (
    <div className="container mt-5">
      <div className="footer d-flex justify-content-between">
        {/* hiển thị 5 cột dữ liệu trong footer */}
        <ColFooter
          col_number={footerArr.filter((el) => el.col_number === 1)}
          index={1}
        ></ColFooter>
        <ColFooter
          col_number={footerArr.filter((el) => el.col_number === 2)}
          index={2}
        ></ColFooter>
        <ColFooter
          col_number={footerArr.filter((el) => el.col_number === 3)}
          index={3}
        ></ColFooter>
        <ColFooter
          col_number={footerArr.filter((el) => el.col_number === 4)}
          index={4}
        ></ColFooter>
        <ColFooter
          col_number={footerArr.filter((el) => el.col_number === 5)}
          index={5}
        ></ColFooter>
      </div>
    </div>
  );
};

export default Footer;
