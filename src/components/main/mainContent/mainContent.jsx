import Card from "../../UI/card/card";

function MainContent() {

  let list = [
    {title:'Пастила', desc: 'Моя закрытая группа ВКонтакте — это база знаний, где собран весь мой опыт.', btn: 'Пастила', card: [{title: 'Яблоко', category: 'Пастила', prise: '160.00'},{title: 'Яблоко', category: 'Пастила', prise: '160.00'},{title: 'Яблоко', category: 'Пастила', prise: '160.00'},{title: 'Яблоко', category: 'Пастила', prise: '160.00'}]},
    {title:'Пастила', desc: 'Моя закрытая группа ВКонтакте — это база знаний, где собран весь мой опыт.', btn: 'Пастила', card: [{title: 'Яблоко', category: 'Пастила', prise: '160.00'},{title: 'Яблоко', category: 'Пастила', prise: '160.00'},{title: 'Яблоко', category: 'Пастила', prise: '160.00'},{title: 'Яблоко', category: 'Пастила', prise: '160.00'}]},
    {title:'Пастила', desc: 'Моя закрытая группа ВКонтакте — это база знаний, где собран весь мой опыт.', btn: 'Пастила', card: [{title: 'Яблоко', category: 'Пастила', prise: '160.00'},{title: 'Яблоко', category: 'Пастила', prise: '160.00'},{title: 'Яблоко', category: 'Пастила', prise: '160.00'},{title: 'Яблоко', category: 'Пастила', prise: '160.00'}]},
  ]
  return (
    <div className="main-coontent bg-w">
      {list.map((lists, insex) =>
        <div key={insex} className="main-block">
          <div className="main-coontent-post">
            <div className="main-coontent-post-inner">
              <div className="main-coontent-post-content">
                <div className="main-coontent-post-title">{lists.title}</div>
                <div className="main-coontent-post-desc">{lists.desc}</div>
                <button className="main-coontent-post-btn">{lists.btn}</button>
              </div>
            </div>
          </div>
          <div className="conteiner">
            <div className="main-coontent-inner p15">
              <div className="main-coontent-cards">
                {lists.card.map((list, insex) => 
                  <Card key={insex} card={list}/>
                )}
              </div>
              <div className="main-coontent-link">Смотреть все {lists.title}</div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default MainContent;