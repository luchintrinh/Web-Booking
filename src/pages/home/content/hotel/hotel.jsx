import "./hotel.css";
import HotelItem from "./hotelItem/hotelItem";
import hotelList from "./hotel_list.json";
const Hotel = () => {
  return (
    <div className="hotel">
      <h3 className="hotel__description mb-5">Homes guests love</h3>
      <div className="row">
        {hotelList.map((el, index) => {
          return (
            // truyền giá trị cho component con thông qua thuộc tính
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
