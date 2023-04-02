import close from '../../image/close_FILL0_wght100_GRAD200_opsz48.svg'
import CardLike from "../UI/cardLike/cardLike";
import { useEffect, useState } from "react";

function Like() {
  let list = []

  const [likeState, setLikeState] = useState(list)
  const [dekite, setDekite] = useState(null)
  const [bascets, setBascets] = useState(null)

  useEffect(()=>{
    getList()
  },[])

  useEffect(()=>{
    deliteCard(dekite)
  },[dekite])

  useEffect(()=>{
    backetGetCard(bascets)
  },[bascets])

  const getdelite = (value) => {
    setDekite(value)
  }

  const getBascet = (value) => {
    setBascets(value)
  }

  const backetGetCard = (value) =>{
    if (value === null) {
      
    } else {
      let state = likeState.filter(list => list !== value)
      localStorage.setItem('like', JSON.stringify(state))
      if (JSON.parse(localStorage.getItem('bascet')).length === 0) {
        localStorage.setItem('bascet', JSON.stringify([value]))
      } else {
        let loc = JSON.parse(localStorage.getItem('bascet'))
        loc.unshift(value)
        localStorage.setItem('bascet', JSON.stringify(loc))
      }
      setLikeState(state)
    }
  }

  const deliteCard = (value) =>{
    if (value === null) {
      
    } else {
      let state = likeState.filter(list => list !== value) 
      localStorage.setItem('like', JSON.stringify(state))
      setLikeState(state)
    }
  }

  const getList = () => {
    if (localStorage.getItem('like') === null) {
      localStorage.setItem('like', JSON.stringify([]))
    } else {
      setLikeState(JSON.parse(localStorage.getItem('like')))
    }
  }

  const closed = () => {
    document.getElementById('Like').classList.remove('bascet-activ')
    document.querySelector('html').style.overflow = 'inherit'
  } 

  const deliteList = () => {
    setLikeState([])
    localStorage.setItem('like', JSON.stringify([]))
  }

  const getListBascet = () => {
    likeState.map(list => {
      if (JSON.parse(localStorage.getItem('bascet')).length === 0) {
        localStorage.setItem('bascet', JSON.stringify([list]))
      } else {
        let loc = JSON.parse(localStorage.getItem('bascet'))
        loc.unshift(list)
        localStorage.setItem('bascet', JSON.stringify(loc))
      }
    })
    setLikeState([])
    localStorage.setItem('like', JSON.stringify([]))
  }

  return (
    <div id="Like" className="bascet">
      <div className="bascet-inner">
        <div onClick={closed} className="bascet-bg"></div>
        <div className="bascet-content-inner">
          <div className="bascet-content">
            <div className="bascet-content-list">
              <div className="bascet-content-list-title">Список желаний</div>
              <div className="bascet-content-list-items">
                {likeState.map((list, index) => 
                  <CardLike setBascet={getBascet} setDelite={getdelite} key={index} props={list}/>
                )}
              </div>
            </div>
            <div className="bascet-content-botom">
              <div className="bascet-content-btns-clear">
                <div onClick={deliteList} className="bascet-content-btn">Очистить мой список желаний</div>
              </div>
              <div onClick={getListBascet} className="bascet-content-btns">
                <div className="bascet-content-btn">Добавить все в корзину</div>
              </div>
            </div>
            <img onClick={closed}  className="bascet-content-close" src={close} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Like;