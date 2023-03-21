import { Link } from "react-router-dom";

function HeaderBottom() {
  return (
    <div className="header-bottom">
      <div className="header-bottom-content p15">
        <Link to={'/'} className="header-bottom-content-link">Главная</Link>
        <Link to={'/catalog'} className="header-bottom-content-link">Каталог</Link>
        <Link to={'/pay'} className="header-bottom-content-link">Оплата/Доставка</Link>
        <Link to={'/contactas'}className="header-bottom-content-link">Контакты</Link>
      </div>
    </div>
  );
}

export default HeaderBottom;