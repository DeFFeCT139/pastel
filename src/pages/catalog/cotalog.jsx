import { useEffect } from "react"
import CotalogFilter from "../../components/main/cotalogFilter/cotalogFilter"
import Card from "../../components/UI/card/card"
import arrow from '../../image/expand_less_FILL0_wght400_GRAD0_opsz48.svg'

function Cotalog() {

  let list = [{title: 'Яблоко', category: 'Пастила', prise: '160.00'},{title: 'Яблоко', category: 'Пастила', prise: '160.00'},{title: 'Яблоко', category: 'Пастила', prise: '160.00'},{title: 'Яблоко', category: 'Пастила', prise: '160.00'},{title: 'Яблоко', category: 'Пастила', prise: '160.00'},{title: 'Яблоко', category: 'Пастила', prise: '160.00'},{title: 'Яблоко', category: 'Пастила', prise: '160.00'},{title: 'Яблоко', category: 'Пастила', prise: '160.00'}]

  const headetClick = () => {
    let link = document.getElementsByClassName('header-bottom-content-link')
    for (let index = 0; index < link.length; index++) {
      link[index].classList.remove('header-bottom-content-link-activ')
      if (link[index].innerHTML === 'Каталог') {
        link[index].classList.add('header-bottom-content-link-activ')
      } 
    }
  }

  useEffect(()=>{
    headetClick()
  })
  return (
    <div className="cotalog page">
      <div className="conteiner">
        <div className="cotalog-inner">
          <CotalogFilter/>
          <div className="catalog-list">
            <div className="catalog-list-filter">
            <div className="catalog-list-filter-prise">
              <div className="catalog-list-filter-prise-title">Цена</div>
              <img src={arrow} alt="" className="catalog-list-filter-prise-img" />
            </div>
            <select className="catalog-list-filter-select">
              <option>Новинки</option>
              <option>По рейтингу</option>
              <option>По отзывам</option>
              <option>По популярности</option>
            </select>
            </div>
            <div className="catalog-list-cards">
              {list.map(list => 
                <div className="catalog-list-cards-inner">
                  <Card card={list}/>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Cotalog;