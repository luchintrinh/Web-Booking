import "./NavBarItem.css";
import { useState } from "react";

const NavBarItem = (props) => {
  const [isActive, setIsActive] = useState(props.data);
  const clickMenuHandler = (index) => {
    const id = isActive.findIndex((el) => el.active === true);
    if (id !== index) {
      const newArr = isActive.map((el, stt) => {
        if (stt === id) {
          return { ...el, active: false };
        } else if (stt === index) {
          return { ...el, active: true };
        } else return { ...el };
      });
      setIsActive(newArr);
    }
  };
  return (
    <nav className="navbar width-50 mt-3 py-3">
      {isActive.map((item, index) => {
        return (
          <div
            className={`nav-item fs-6 ${item.active ? "active" : ""}`}
            onClick={() => clickMenuHandler(index)}
            key={index}
          >
            <i className={`fa ${item.icon}`}></i> {item.type}
          </div>
        );
      })}
    </nav>
  );
};

export default NavBarItem;
