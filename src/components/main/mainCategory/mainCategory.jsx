function MainCategory() {
  let list = [
    {id: 1, title: 'Пастила', desc: 'Доступно 14 вкусов: яблоко, мандарин, малина, вишня, клубника, банан/грецкий орех, брусника/кедровый орех, черника, клюква, слива, виноград и др.'},
    {id: 2, title: 'Пастила', desc: 'Доступно 14 вкусов: яблоко, мандарин, малина, вишня, клубника, банан/грецкий орех, брусника/кедровый орех, черника, клюква, слива, виноград и др.'},
    {id: 3, title: 'Пастила', desc: 'Доступно 14 вкусов: яблоко, мандарин, малина, вишня, клубника, банан/грецкий орех, брусника/кедровый орех, черника, клюква, слива, виноград и др.'},
    {id: 4, title: 'Пастила', desc: 'Доступно 14 вкусов: яблоко, мандарин, малина, вишня, клубника, банан/грецкий орех, брусника/кедровый орех, черника, клюква, слива, виноград и др.'},
    {id: 5, title: 'Пастила', desc: 'Доступно 14 вкусов: яблоко, мандарин, малина, вишня, клубника, банан/грецкий орех, брусника/кедровый орех, черника, клюква, слива, виноград и др.'},
    {id: 6, title: 'Пастила', desc: 'Доступно 14 вкусов: яблоко, мандарин, малина, вишня, клубника, банан/грецкий орех, брусника/кедровый орех, черника, клюква, слива, виноград и др.'},
  ]
  return (
    <div className="main-category bg-w">
      <div className="conteiner">
        <div className="main-category-inner p15">
          <div className="main-category-content-items">
           {list.map(list =>
              <div key={list.id} className="main-category-content-item">
                <div className="main-category-content-item-content">
                  <div className="main-category-content-item-title">{list.title}</div>
                  <div className="main-category-content-item-desc">{list.desc}</div>
                  <div className="main-category-content-item-btn">Смотреть</div>
                </div>
              </div>
           )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default MainCategory;