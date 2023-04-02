import { Link } from "react-router-dom";
import img from '../../../image/close_FILL0_wght100_GRAD200_opsz48.svg'

function HeaderBottom() {

  const clouseLP = () => document.getElementById('header-bottom').classList.remove('header-bottom-active')

  return (
    <div id="header-bottom" className="header-bottom">
      <div className="header-bottom-inner">
        <div className="cloused-btn-header">
          <img src={img} onClick={clouseLP} className="cloused-btn-header-img" alt="" />
        </div>
        <div className="header-bottom-content p15">
          <Link onClick={clouseLP} to={'pastel/'} className="header-bottom-content-link">Главная</Link>
          <Link onClick={clouseLP} to={'pastel/catalog'} className="header-bottom-content-link">Каталог</Link>
          <Link onClick={clouseLP} to={'pastel/pay'} className="header-bottom-content-link">Оплата/Доставка</Link>
          <Link onClick={clouseLP} to={'pastel/contactas'}className="header-bottom-content-link">Контакты</Link>
        </div>  
      </div>
    </div>
  );
}

export default HeaderBottom;