import "./hotelCategory.css";
import CategoryItem from "./categoryItem/item";
import category from "./type.json";
const HotelCategory = () => {
  return (
    <div className="category mb-5">
      <h3 className="category__title mb-5">Browser by property type</h3>
      <div className="category__list">
        {category.map((el, index) => {
          return (
            // truyền giá trị cho component con thông qua thuộc tính
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
