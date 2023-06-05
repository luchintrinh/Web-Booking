import NavBarItem from "./NavBarItem/NavBarItem";
import Brand from "./Brand/brand";
import menu from "./navBar.json";
const Navbar = () => {
  return (
    <div>
      <Brand></Brand>
      <NavBarItem data={menu}></NavBarItem>
    </div>
  );
};
export default Navbar;
