import "./hotel.css";
import HotelItem from "./hotelItem/hotelItem";
const Hotel = () => {
  const hotelList = [
    {
      name: "Aparthotel Stare Miasto",
      city: "Madrid",
      price: 120,
      rate: 8.9,
      type: "Excellent",
      image_url: "./images/hotel_1.webp",
    },
    {
      name: "Comfort Suites Airport",
      city: "Austin",
      price: 140,
      rate: 9.3,
      type: "Exceptional",
      image_url: "./images/hotel_2.jpg",
    },
    {
      name: "Four Seasons Hotel",
      city: "Lisbon",
      price: 99,
      rate: 8.8,
      type: "Excellent",
      image_url: "./images/hotel_3.jpg",
    },
    {
      name: "Hilton Garden Inn",
      city: "Berlin",
      price: 105,
      rate: 8.9,
      type: "Excellent",
      image_url: "./images/hotel_4.jpg",
    },
  ];
  return (
    <div className="hotel">
      <h3 className="hotel__description mb-5">Homes guests love</h3>
      <div className="row">
        {hotelList.map((el, index) => {
          return (
            <HotelItem
              key={index}
              name={el.name}
              city={el.city}
              price={el.price}
              rate={el.rate}
              type={el.type}
              img_url={el.image_url}
            ></HotelItem>
          );
        })}
      </div>
    </div>
  );
};
export default Hotel;
