import HeaderBottom from "./headerBottom/headerBottom";
import HeaderTop from "./headerTop/headerTop";

function Header() {
  return (
    <div className="header">
      <HeaderTop/>
      <HeaderBottom/>
    </div>
  );
}

export default Header;