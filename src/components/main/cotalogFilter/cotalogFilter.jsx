import search from '../../../image/search_FILL1_wght400_GRAD0_opsz48.svg'

function CotalogFilter() {

  let list = ['Пастила', 'Фрипсы', 'Подарочные наборы', 'Овощные чипсы', 'Цукаты']

  return (
    <div className="cotalog-filter">
      <div className="cotalog-filter-content">
        <div className="cotalog-filter-content-inner">
          <div className="cotalog-filter-content-search">
            <input type="text" className="cotalog-filter-content-search-input" placeholder="Поиск"/>
            <img src={search} className="cotalog-filter-content-search-img" alt="" />
          </div>
          <div className="cotalog-filter-content-category-items">
            {list.map(list => 
              <div className="cotalog-filter-content-category-item">{list}</div>
            )}
          </div>
          <div className="cotalog-filter-content-range">
            <div className="cotalog-filter-content-range-title">Цена</div>
            <input className='cotalog-filter-content-range-input' type="range" id="volume" name="volume"  min="0" max="3000"/>
            <div className="cotalog-filter-content-range-inputs">
              <div className="cotalog-filter-content-range-inputs-rub">p. </div>
              <input type="number" className="cotalog-filter-content-range-inputs-input" />
              <div className="cotalog-filter-content-range-inputs-rub"> - p. </div>
              <input type="number" className="cotalog-filter-content-range-inputs-input" />
            </div>
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