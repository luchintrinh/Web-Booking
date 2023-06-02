import "./menu.css";
import { useState } from "react";

const Menu = () => {
  const menu = [
    {
      type: "Stays",
      icon: "fa-bed",
      active: true,
    },
    {
      type: "Flights",
      icon: "fa-plane",
      active: false,
    },
    {
      type: "Car rentals",
      icon: "fa-car",
      active: false,
    },
    {
      type: "Attractions",
      icon: "fa-bed",
      active: false,
    },
    {
      type: "Airport taxis",
      icon: "fa-taxi",
      active: false,
    },
  ];
  const [isActive, setIsActive] = useState(menu);
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

export default Menu;
