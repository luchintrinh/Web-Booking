import Navbar from "./NavBar/navbar.jsx";
import "./Home.css";
import Card from "./Header/Card/Card";
import "../../index.css";
import Search from "./Header/Search/search";
import Content from "./content/content";
import Contact from "./content/contact/contact.jsx";
import Footer from "./footer/footer.jsx";
import SearchContainer from "./Header/Search/search";

const Home = () => {
  return (
    <div className="wrapper">
      <div className="navigation position-relative">
        <div className="container fs-3 text-white">
          <div className="mb-5">
            <Navbar></Navbar>
          </div>
          <div className="header">
            <Card></Card>
            <SearchContainer></SearchContainer>
          </div>
        </div>
      </div>
      <div className="content">
        <Content></Content>
      </div>
      <Contact></Contact>
      <div className="footer">
        <Footer></Footer>
      </div>
    </div>
  );
};

export default Home;
