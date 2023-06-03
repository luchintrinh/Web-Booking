import Brand from "./NavBar/Brand/brand";
import Menu from "./NavBar/Menu/menu";
import "./Home.css";
import Card from "./Header/Card/Card";
import "../../index.css";
import Search from "./Header/Search/search";
import Content from "./content/content";
import Register from "./content/register/resgiter";
import Footer from "./footer/footer";
import SearchContainer from "./Header/Search/search";

const Home = () => {
  return (
    <div className="wrapper">
      <div className="navigation position-relative">
        <div className="container fs-3 text-white">
          <div className="mb-5">
            <Brand></Brand>
            <Menu></Menu>
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
      <Register></Register>
      <div className="footer">
        <Footer></Footer>
      </div>
    </div>
  );
};

export default Home;
