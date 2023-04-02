import CardBascet from "../UI/cardBasc/cardBasc";
import close from '../../image/close_FILL0_wght100_GRAD200_opsz48.svg'
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function Bascet() {
  let list = []

  const [likeState, setLikeState] = useState(list)
  const [prise, setPrise] = useState(0)
  const [dekite, setDekite] = useState(null)

  useEffect(()=>{
    getList()
  },[prise])

  useEffect(()=>{
    deliteCard(dekite)
  },[dekite])

  useEffect(()=>{
    getPrise()
  },[dekite])

  const getdelite = (value) => {
    setDekite(value)
  }

  const deliteCard = (value) =>{
    if (value === null) {
      
    } else {
      let state = likeState.filter(list => list !== value)
      localStorage.setItem('bascet', JSON.stringify(state))
      setLikeState(state)
    }
  }

  const getList = () => {
    if (localStorage.getItem('bascet') === null) {
      localStorage.setItem('bascet', JSON.stringify([]))
    } else {
      setLikeState(JSON.parse(localStorage.getItem('bascet')))
      if (localStorage.getItem('bascet').length !== 0) {
        let loc = JSON.parse(localStorage.getItem('bascet'))
        let pr = 0
        loc.map(loc => pr =  pr + Number(loc.prise)) 
        setPrise(pr)
      }
    }
  }

  const getPrise = () => {
    if (localStorage.getItem('bascet').length !== 0) {
      let loc = JSON.parse(localStorage.getItem('bascet'))
      let pr = 0
      loc.map(loc => pr =  pr + Number(loc.prise)) 
      setPrise(pr)
    }
  }

  const closed = () => {
    document.getElementById('bascet').classList.remove('bascet-activ')
    document.querySelector('html').style.overflow = 'inherit'
  } 

  return (
    <div id="bascet" className="bascet">
      <div className="bascet-inner">
        <div onClick={closed} className="bascet-bg"></div>
        <div className="bascet-content-inner">
          <div className="bascet-content">
            <div className="bascet-content-list">
              <div className="bascet-content-list-title">Корзина</div>
              <div className="bascet-content-list-items">
                {likeState.map((list, index) => 
                  <CardBascet setDelite={getdelite} key={index} props={list}/>
                )}
              </div>
            </div>
            <div className="bascet-content-botom">
              <div className="bascet-content-botom-title">Итог: {prise} р.</div>
              <div className="bascet-content-btns">
                <Link to={'pastel/delivery'} onClick={closed} className="bascet-content-btn">Оформить заказ</Link>
              </div>
            </div>
            <img onClick={closed}  className="bascet-content-close" src={close} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Bascet;