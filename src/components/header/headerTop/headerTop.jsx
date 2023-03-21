import phone from '../../../image/call_FILL1_wght400_GRAD0_opsz48.svg'
import bascet from '../../../image/shopping_basket_FILL1_wght400_GRAD0_opsz48.svg'
import love from '../../../image/favorite_FILL1_wght400_GRAD0_opsz48.svg'
import logo from '../../../image/logo-5.png'

function HeaderTop() {
  return (
    <div className="header-top">
      <div className="conteiner">
        <div className="header-top-inner p15">
          <div className="header-top-content-item">
            <img src={phone} alt="" className="header-top-content-number-img" />
            <div className="header-top-content-number">+7 (960) 017-29-31</div>
          </div>
          <div className="header-top-content-logo">
            <img src={logo} className="header-top-content-logo-img" alt="" />
          </div>
          <div className="header-top-content-item">
          <img src={love} alt="" className="header-top-content-love-img" />
            <div className="header-top-content-bascet">
              <img src={bascet} alt="" className="header-top-content-bascet-img" />
              <div className="header-top-content-bascet-sum">0.00 p.</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HeaderTop;