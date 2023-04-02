import phone from '../../../image/call_FILL1_wght400_GRAD0_opsz48.svg'
import burger from '../../../image/menu_FILL1_wght400_GRAD0_opsz48 (1).svg'
import bascet from '../../../image/shopping_basket_FILL1_wght400_GRAD0_opsz48.svg'
import love from '../../../image/favorite_FILL1_wght400_GRAD0_opsz48.svg'
import logo from '../../../image/Group 2.svg'
import { useEffect, useState } from 'react'

function HeaderTop() {

  const [prise, setPrise] = useState(0.00)

  const openBacset = () => {
    document.getElementById('bascet').classList.add('bascet-activ')
    document.querySelector('html').style.overflow = 'hidden'
  } 
  const openLike = () => {
    document.getElementById('Like').classList.add('bascet-activ')
    document.querySelector('html').style.overflow = 'hidden'
  } 

  const localStor = () => {
    if (localStorage.getItem('like') === null) {
      localStorage.setItem('like', JSON.stringify([]))
    }
    if (localStorage.getItem('bascet') === null) {
      localStorage.setItem('bascet', JSON.stringify([]))
    } else {
      if (localStorage.getItem('bascet').length !== 0) {
        let loc = JSON.parse(localStorage.getItem('bascet'))
        let pr = 0
        loc.map(loc => pr =  pr + Number(loc.prise)) 
        setPrise(pr)
      }
    }
  }
  
  const openLP = () => document.getElementById('header-bottom').classList.add('header-bottom-active')
  

  useEffect(()=>{
    localStor()
  }, [])

  return (
    <div className="header-top">
      <div className="conteiner">
        <div className="header-top-inner p15">
          <div className="header-top-content-item">
            <img src={phone} alt="" className="header-top-content-number-img" />
            <img onClick={openLP} src={burger} alt="" className="header-top-content-bureger-img" />
            <div className="header-top-content-number">+7 (960) 017-29-31</div>
          </div>
          <div className="header-top-content-logo">
            <img src={logo} className="header-top-content-logo-img" alt="" />
          </div>
          <div className="header-top-content-item">
            <img onClick={openLike} src={love} alt="" className="header-top-content-love-img" />
            <div onClick={openBacset} className="header-top-content-bascet">
              <img src={bascet} alt="" className="header-top-content-bascet-img" />
              <div className="header-top-content-bascet-sum">{prise} p.</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HeaderTop;