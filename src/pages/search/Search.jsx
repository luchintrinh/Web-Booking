import "./Search.css";
import Filter from "./filter/filter";
import ContentSearch from "./content/content";
const Search = () => {
  return (
    <div className="wrapper">
      <div className="container d-flex gap-5">
        <Filter></Filter>
        <ContentSearch></ContentSearch>
      </div>
    </div>
  );
};

export default Search;
