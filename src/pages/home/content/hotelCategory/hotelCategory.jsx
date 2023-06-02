import "./hotelCategory.css";
import CategoryItem from "./categoryItem/item";

const HotelCategory = () => {
  const category = [
    {
      name: "Hotels",
      count: 233,
      image: "./images/type_1.webp",
    },
    {
      name: "Apartments",
      count: 2331,
      image: "./images/type_2.jpg",
    },
    {
      name: "Resorts",
      count: 2331,
      image: "./images/type_3.jpg",
    },
    {
      name: "Villas",
      count: 2331,
      image: "./images/type_4.jpg",
    },
    {
      name: "Cabins",
      count: 2331,
      image: "./images/type_5.jpg",
    },
  ];
  return (
    <div className="category mb-5">
      <h3 className="category__title mb-5">Browser by property type</h3>
      <div className="category__list">
        {category.map((el, index) => {
          return (
            <CategoryItem
              key={index}
              name={el.name}
              count={el.count}
              image={el.image}
            ></CategoryItem>
          );
        })}
      </div>
    </div>
  );
};

export default HotelCategory;
