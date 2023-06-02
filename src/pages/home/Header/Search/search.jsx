import "./search.css";
const Search = () => {
  return (
    <div className="search bg-dark">
      <div className="search__place">
        <input
          type="text"
          className="search__place--input fs-6"
          placeholder="Where are you going?"
        />
      </div>
      <div className="search__date"></div>
      <div className="search__people"></div>
      <div className="search__button"></div>
    </div>
  );
};

export default Search;
