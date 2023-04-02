import { useEffect, useState } from "react"
import CardBascet from "../../components/UI/cardBasc/cardBasc"
import { useDynamicAdapt } from '../../module/src/dynamicAdapt'

function Delivery() {

  useDynamicAdapt('max')

  let list = []

  let siti = {
    tver: [
      {title: 'Самовывоз с адресса: Тверь Улица пушкина дом калатушкина', desc: 'беслатно'},
      {title: 'Доставка в Кашин, Бежецк', desc: 'беслатно'},
    ],
    moscow: [
      {title: 'Самовывоз с адресса: Москва Улица пушкина дом калатушкина', desc: 'беслатно'},
      {title: 'Доставка по Москве', desc: 'беслатно'},
      {title: 'Доставка Сдеком', desc: '500 руб'}
    ]
  }

  const [likeState, setLikeState] = useState(list)
  const [prise, setPrise] = useState(0)
  const [sitis, setSitis] = useState(true)
  const [sitiState, setSitiState] = useState(siti.moscow)
  const [dekite, setDekite] = useState(null)

  useEffect(()=>{
    headetClick()
  })

  useEffect(()=>{
    getList()
  },[prise])

  useEffect(()=>{
    if (sitis === true) {
      setSitiState(siti.moscow)
    } else {
      setSitiState(siti.tver)
    }
  },[sitis])

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
  
  const headetClick = () => {
    let link = document.getElementsByClassName('header-bottom-content-link')
    for (let index = 0; index < link.length; index++) {
      link[index].classList.remove('header-bottom-content-link-activ')
      if (link[index].innerHTML === 'Оплата/Доставка') {
        link[index].classList.add('header-bottom-content-link-activ')
      } 
    }
  }

  const getSitiM = (e) =>{
    let btn = document.getElementsByClassName('delivery-content-left-sposob-siti-name')
    for (let index = 0; index < btn.length; index++) {
      btn[index].classList.remove('delivery-content-left-sposob-siti-name-activ')
    }
    e.target.classList.add('delivery-content-left-sposob-siti-name-activ')
    setSitis(true)
  }
  const getSitiT = (e) =>{
    let btn = document.getElementsByClassName('delivery-content-left-sposob-siti-name')
    for (let index = 0; index < btn.length; index++) {
      btn[index].classList.remove('delivery-content-left-sposob-siti-name-activ')
    }
    e.target.classList.add('delivery-content-left-sposob-siti-name-activ')
    setSitis(false)
  }
  return (
    <div className="delivery  page">
      <div className="conteiner">
        <div className="delivery-inner">
          <div className="delivery-content">
            <div className="delivery-content-left">
              <div className="delivery-content-left-inner">
                <div className="delivery-content-left-list">
                {likeState.map((list, index) => 
                  <CardBascet setDelite={getdelite} key={index} props={list}/>
                )}
                </div>
                <div className="delivery-content-left-sposob">
                  <div className="delivery-content-left-sposob-siti-names">
                    <div onClick={getSitiM} className="delivery-content-left-sposob-siti-name delivery-content-left-sposob-siti-name-activ">Москва</div>
                    <div onClick={getSitiT} className="delivery-content-left-sposob-siti-name">Тверь</div>
                  </div>
                  <div className="delivery-content-left-sposob-content">
                    {sitiState.map((list, index) => 
                      <div key={index} className="delivery-content-left-sposob-content-item">
                        <div className="delivery-content-left-sposob-content-item-checkBox">
                          <label className="checkBox">
                            <input id="ch1" type="checkbox"/>
                            <div className="transition"></div>
                          </label>
                        </div>
                        <div className="delivery-content-left-sposob-content-item-checkBox-info">
                          <div className="delivery-content-left-sposob-content-item-checkBox-info-title">{list.title}</div>
                          <div className="delivery-content-left-sposob-content-item-checkBox-info-desc">Стоимость: {list.desc}</div>
                        </div>
                      </div>
                    )}
                  </div>
                </div>
                <div className="delivery-content-left-before">Итог к оплате: {prise} р.</div>
              </div>
            </div>
            <div data-da=".delivery-content,830,first" className="delivery-content-right">
              <div className="delivery-content-right-inner">
                <div className="delivery-content-right-title">Контактная информация</div>
                <div className="delivery-content-right-inputs">
                  <div className="delivery-content-right-inputs-name">
                    <div className="delivery-content-right-input-set">
                      <div className="delivery-content-right-input-set-title">Имя</div>
                      <input className="delivery-content-right-input-set-input" type="text" />
                    </div>
                    <div className="delivery-content-right-input-set">
                      <div className="delivery-content-right-input-set-title">Фамилия</div>
                      <input className="delivery-content-right-input-set-input" type="text" />
                    </div>
                  </div>
                  <div className="delivery-content-right-input-set">
                    <div className="delivery-content-right-input-set-title">Номер телефона</div>
                    <input className="delivery-content-right-input-set-input" type="text" />
                  </div>
                  <div className="delivery-content-right-input-set">
                    <div className="delivery-content-right-input-set-title">Email</div>
                    <input className="delivery-content-right-input-set-input" type="text" />
                  </div>
                  <div className="delivery-content-right-input-set">
                    <div className="delivery-content-right-input-set-title">Адрес доставки</div>
                    <input className="delivery-content-right-input-set-input" type="text" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Delivery;