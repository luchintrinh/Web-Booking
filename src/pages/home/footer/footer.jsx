import "./footer.css";
import ColFooter from "./colFooter/colFooter";
const Footer = () => {
  const footerArr = [
    {
      col_number: 1,
      col_values: [
        "Countries",
        "Regions",
        "Cities",
        "Districts",
        "Airports",
        "Hotels",
      ],
    },
    {
      col_number: 2,
      col_values: [
        "Homes",
        "Apartments",
        "Resorts",
        "Villas",
        "Hostels",
        "Guest houses",
      ],
    },
    {
      col_number: 3,
      col_values: [
        "Unique places to stay",
        "Reviews",
        "Unpacked: Travel articles",
        "Travel communities",
        "Seasonal and holiday deals",
      ],
    },
    {
      col_number: 4,
      col_values: [
        "Car rental",
        "Flight Finder",
        "Restaurant reservations",
        "Travel Agents",
      ],
    },
    {
      col_number: 5,
      col_values: [
        "Curtomer Service",
        "Partner Help",
        "Careers",
        "Sustainability",
        "Press center",
        "Safety Resource Center",
        "Investor relations",
        "Terms & conditions",
      ],
    },
  ];
  return (
    <div className="container mt-5">
      <div className="footer d-flex justify-content-between">
        <ColFooter
          col_number={footerArr
            .filter((el) => el.col_number === 1)
            .map((el) => el.col_values)}
          index={1}
        ></ColFooter>
        <ColFooter
          col_number={footerArr
            .filter((el) => el.col_number === 2)
            .map((el) => el.col_values)}
          index={2}
        ></ColFooter>
        <ColFooter
          col_number={footerArr
            .filter((el) => el.col_number === 3)
            .map((el) => el.col_values)}
          index={3}
        ></ColFooter>
        <ColFooter
          col_number={footerArr
            .filter((el) => el.col_number === 4)
            .map((el) => el.col_values)}
          index={4}
        ></ColFooter>
        <ColFooter
          col_number={footerArr
            .filter((el) => (el.col_number = 5))
            .map((el) => el.col_values)}
          index={5}
        ></ColFooter>
      </div>
    </div>
  );
};

export default Footer;
