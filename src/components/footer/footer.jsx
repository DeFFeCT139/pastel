import logo from '../../image/logo-5.png'
import img from '../../image/call_FILL1_wght400_GRAD0_opsz48.svg'


function Footer() {

  let list = ['Пастила', 'Фрипсы', 'Подарочные наборы', 'Овощные чипсы', 'Цукаты']

  return (
    <div className="footer">
      <div className="conteiner">
        <div className="footer-inner">
          <div className="footer-content">
            <div className="footer-content-category">
              {list.map(list =>
                <div className="footer-content-category-item">{list}</div>
              )}<br/>
              <div className="footer-content-category-item">Пользовательское соглашение</div>
              <div className="footer-content-category-item">Способы доставки и оплаты</div>
            </div>
            <div className="footer-content-links">
              <div className="footer-content-link">
                <img src={img} alt="" className="footer-content-link-img" />
                <div className="footer-content-link-title">+7 (960) 017-29-31</div>
              </div>
              <div className="footer-content-link">
                <img src={img} alt="" className="footer-content-link-img" />
                <div className="footer-content-link-title">+7 (960) 017-29-31</div>
              </div>
              <div className="footer-content-link">
                <img src={img} alt="" className="footer-content-link-img" />
                <div className="footer-content-link-title">fruits29</div>
              </div>
            </div>
            <div className="footer-content-logo">
              <img src={logo} className='footer-content-logo-img' alt="" />
            </div>
          </div>
        </div>
      </div>
      <div className="madeIn">
        <div className="madeIn-title">Made in <a href="/">Pingwing</a></div>
      </div>
    </div>
  );
}

export default Footer;