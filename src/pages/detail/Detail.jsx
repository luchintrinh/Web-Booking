import Navbar from "../home/NavBar/navbar.jsx";
import Footer from "../home/footer/footer.jsx";
import DetailContent from "./Detail-content/detailContent";
import Register from "../home/content/contact/contact.jsx";
import details from "./detail.json";
const Detail = () => {
  return (
    <div className="wrapper">
      <div className="navigation position-relative">
        <div className="container fs-3 text-white">
          <div className="mb-5">
            {/* sử dụng Navbar */}
            <Navbar></Navbar>
          </div>
        </div>
      </div>
      <div className="content__detail">
        <DetailContent detail={details} />
      </div>
      <Register></Register>
      <div className="footer">
        <Footer></Footer>
      </div>
    </div>
  );
};

export default Detail;
