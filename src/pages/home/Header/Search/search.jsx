import "./search.css";
const Search = () => {
  const searchClickHandler = () => {
    window.location.replace("../../../search/Search.jsx");
  };
  return (
    <div className="search bg-white container py-1">
      <div className="search__place d-flex align-item-center">
        <i className="fa fa-bed"></i>
        <input
          type="text"
          className="search__place--input fs-6"
          placeholder="Where are you going?"
        />
      </div>
      <div className="search__date d-flex align-item-center">
        <i className="fa fa-calendar"></i>
        <input
          type="text"
          className="search__place--input fs-6"
          placeholder="Where are you going?"
        />
      </div>
      <div className="search__people d-flex align-item-center">
        <i className="fa fa-female"></i>
        <input
          type="text"
          className="search__place--input fs-6"
          placeholder="Where are you going?"
        />
      </div>
      <div
        className="search__button btn btn-primary"
        onClick={searchClickHandler}
      >
        Search
      </div>
    </div>
  );
};

export default Search;
