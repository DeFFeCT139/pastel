import { useState } from 'react'
import search from '../../../image/search_FILL1_wght400_GRAD0_opsz48.svg'
import filter from '../../../image/tune_FILL1_wght400_GRAD0_opsz48.svg'
import RangePrice from '../rangePrice/RangePrice'

function CotalogFilter({setState, setInput, setRange}) {

  const [state, setSteta] = useState(false)

  const rangeChange = (min) => {
    setRange(min)
  }

  let list = [{title:'Пастила', name:'pas'}, { title:'Фрипсы', name:'fris'}, {title:'Подарочные наборы', name:'hapy'}, {title:'Овощные чипсы', name:'chips'}, {title:'Цукаты', name:'cuk'},{ title:'Все', name:'all'},]

  const setCategory = (e) =>{
    let ctegory = list.filter(list => list.title === e.target.innerText)
    setState(ctegory[0].name)
  }

  const InputChenge = () => {
    setInput(document.getElementById('search').value)
  }
  
  return (
    <div className="cotalog-filter">
      <div id='cotalog-filter-content' className="cotalog-filter-content">
        <div className="cotalog-filter-content-inner">
          <div className="cotalog-filter-content-search">
            <input onChange={InputChenge} type="text" id='search' className="cotalog-filter-content-search-input" placeholder="Поиск"/>
            <img src={filter} onClick={() => {
              if (state === false) {
                document.getElementById('cotalog-filter-content').classList.add('cotalog-filter-content-active')
                setSteta(true)
              } else {
                document.getElementById('cotalog-filter-content').classList.remove('cotalog-filter-content-active')
                setSteta(false)
              }
            }} alt="" />
            <img src={search} className="cotalog-filter-content-search-img" alt="" />
          </div>
          <div className="cotalog-filter-content-category-items">
            {list.map((list, index) => 
              <div key={index} onClick={setCategory} className="cotalog-filter-content-category-item">{list.title}</div>
            )}
          </div>
          <div className="cotalog-filter-content-range-title">Цена</div>
          <div className="cotalog-filter-content-range">
              <RangePrice onChange={rangeChange} from={0} to={400} step={1}/>
          </div>
          <div className="cotalog-filter-sost">
            <button className="cotalog-filter-sost-item">С ягодами</button>
            <button className="cotalog-filter-sost-item">С орешками</button>
            <button className="cotalog-filter-sost-item">Цитрус</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CotalogFilter;