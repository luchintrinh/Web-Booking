import "./city.css";
import Description from "./description/description";
// lấy danh sách thành phố từ file json
import cityList from "./city.json";
const City = () => {
  return (
    <div className="row my-5">
      {/* render danh sách các thành phố ra giao diện web */}
      {cityList.map((city, index) => {
        return (
          <div className="col-4 city" key={index}>
            <img src={city.image} className="rounded-3" alt="#" width="100%" />
            <Description name={city.name} subtext={city.subText}></Description>
          </div>
        );
      })}
    </div>
  );
};
export default City;
