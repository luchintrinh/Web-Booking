import "./content.css";
import City from "./city/city.jsx";
import HotelCategory from "./hotelCategory/hotelCategory";
import Hotel from "./hotel/hotel";
const Content = () => {
  return (
    <div className="container mt-5">
      <City></City>
      <HotelCategory></HotelCategory>
      <Hotel></Hotel>
    </div>
  );
};

export default Content;
