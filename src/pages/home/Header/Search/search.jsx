import "./search.css";
import { useState, useRef } from "react";
import { DateRange } from "react-date-range";
import "react-date-range/dist/styles.css"; // main style file
import "react-date-range/dist/theme/default.css"; // theme css file
const SearchContainer = () => {
  const searchClickHandler = () => {
    window.location.replace("/search");
  };
  const [selectionRange, setSelectionRange] = useState({
    startDate: new Date(),
    endDate: new Date(new Date(), 7),
    key: "selection",
  });
  const refCalen = useRef(null);
  const clickOutsideDateRange = (event) => {
    console.log(refCalen.current);
    if (refCalen.current && !refCalen.current.contains(event.target)) {
      setOpenDate(false);
    }
  };
  document.addEventListener("click", clickOutsideDateRange, true);
  const [openDate, setOpenDate] = useState(false);
  const dateInputFocused = () => {
    setOpenDate(true);
  };
  const dateChangeHandler = (date) => {
    console.log(setSelectionRange);
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
          onClick={dateInputFocused}
          type="text"
          value={selectionRange}
          className="search__place--input fs-6"
          placeholder="26/02/2023-26/03/2023"
          readOnly
        />
        {openDate && (
          <div className="date-range" ref={refCalen}>
            <DateRange
              editableDateInputs={true}
              moveRangeOnFirstSelection={false}
              date={new Date()}
              minDate={new Date()}
              onChange={dateChangeHandler}
              ranges={[selectionRange]}
            />
          </div>
        )}
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

export default SearchContainer;
