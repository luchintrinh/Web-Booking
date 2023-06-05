import "./SearchList.css";
import ContentItem from "./contentItem/contentItem";
const ContentSearch = (props) => {
  const nameClickHandler = (e) => {
    window.location.replace("/detail");
  };
  return (
    <div className="content-search">
      {props.search.map((el, index) => {
        return (
          <ContentItem
            key={index}
            clickItem={nameClickHandler}
            item={el}
          ></ContentItem>
        );
      })}
    </div>
  );
};
export default ContentSearch;
