import "./Search.css";
import SearchPopup from "./SearchPopup/SearchPopup";
import ContentSearch from "./SearchList/SearchList.jsx";
import search from "./search.json";
import Navbar from "../home/NavBar/navbar.jsx";
import Card from "../home/Header/Card/Card.jsx";
import SearchContainer from "../home/Header/Search/search.jsx";
import Contact from "../home/content/contact/contact";
import Footer from "../home/footer/footer.jsx";
const Search = () => {
  return (
    <div>
      {/* tái sử dụng Navbar trong search */}
      <div className="wrapper mb-5">
        <div className="navigation position-relative">
          <div className="container fs-3 text-white">
            <div className="mb-5">
              <Navbar></Navbar>
            </div>
          </div>
        </div>
      </div>
      <div className="wrapper">
        <div className="container mb-3">
          <SearchPopup></SearchPopup>
          <ContentSearch search={search}></ContentSearch>
          <div className="clearfix"></div>
        </div>
      </div>
      <div className="wrapper">
        {/* hiển thị contact */}
        <Contact />
        {/* hiển thị footer */}
        <div className="footer">
          <Footer></Footer>
        </div>
      </div>
    </div>
  );
};

export default Search;
