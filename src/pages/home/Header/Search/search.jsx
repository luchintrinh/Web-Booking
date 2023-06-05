import "./search.css";
import { useState, useRef } from "react";
import { DateRange } from "react-date-range";
import "react-date-range/dist/styles.css"; // main style file
import "react-date-range/dist/theme/default.css"; // theme css file

// component để hiện thị danh sách các input để tim kiếm dữ liệu
const SearchContainer = () => {
  const searchClickHandler = (e) => {
    window.location.replace("/search");
  };

  // tạo biến dùng useState để render lại khi giá trị selectionrange thay đổi
  const [selectionRange, setSelectionRange] = useState([
    {
      startDate: new Date(),
      endDate: new Date(),
      key: "selection",
    },
  ]);
  //sử dụng useRef để có thể lưu giá trị của element dateRange
  const refCalen = useRef(null);
  // xử lý khi ấn ngoài dateRange sẽ ẩn dateRange
  const clickOutsideDateRange = (event) => {
    if (refCalen.current && !refCalen.current.contains(event.target)) {
      setOpenDate(false);
    }
  };
  // thêm xự kiện ấn ra ngoài dateRange
  document.addEventListener("click", clickOutsideDateRange, true);
  // openDate để xét trạng thái đóng mở của dateRange
  const [openDate, setOpenDate] = useState(false);

  // hàm khi ta ấn vào input date thì dateRange sẽ hiện ra.
  const dateInputFocused = () => {
    setOpenDate(true);
  };
  const dateChangeHandler = (item) => {
    // khi có sự thay đổi ranges trong dateRange thì sẽ cập nhật giá trị selecttionRange và render lại
    setSelectionRange([item.selection]);
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
          value={`${selectionRange[0].startDate.toLocaleDateString(
            "en-US"
          )} to ${selectionRange[0].endDate.toLocaleDateString("en-US")}`}
          className="search__place--input fs-6"
          placeholder="26/02/2023-26/03/2023"
          readOnly
        />
        {/* Nếu check openDate là true thì mới render dateRange */}
        {openDate && (
          <div className="date-range" ref={refCalen}>
            <DateRange
              editableDateInputs={true}
              onChange={dateChangeHandler}
              moveRangeOnFirstSelection={false}
              ranges={selectionRange}
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
