import "./city.css";
import Description from "./description/description";
const City = () => {
  const cityList = [
    {
      name: "Dublin",
      subText: "123 properties",
      image: "./images/city_1.webp",
    },
    {
      name: "Reno",
      subText: "533 properties",
      image: "./images/city_2.webp",
    },
    {
      name: "Austin",
      subText: "532 properties",
      image: "./images/city_3.webp",
    },
  ];
  return (
    <div className="row my-5">
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
