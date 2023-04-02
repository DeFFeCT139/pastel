import { useEffect, useMemo, useState } from "react"
import CotalogFilter from "../../components/main/cotalogFilter/cotalogFilter"
import Card from "../../components/UI/card/card"
import arrow from '../../image/expand_less_FILL0_wght400_GRAD0_opsz48.svg'

function Cotalog() {


  let list = [
    {title: 'Яблоко', category: 'Пастила', prise: '150.00', name:'pas'},
    {title: 'Яблоко', category: 'Пастила', prise: '260.00', name:'pas'},
    {title: 'Яблоко', category: 'Пастила', prise: '160.00', name:'fris'},
    {title: 'Черника', category: 'Пастила', prise: '170.00', name:'fris'},
    {title: 'Яблоко', category: 'Пастила', prise: '190.00', name:'hapy'},
    {title: 'Яблоко', category: 'Пастила', prise: '130.00', name:'hapy'},
    {title: 'Яблоко', category: 'Пастила', prise: '140.00', name:'chips'},
    {title: 'Яблоко', category: 'Пастила', prise: '160.00', name:'chips'},
    {title: 'Яблоко', category: 'Пастила', prise: '140.00', name:'cuk'},
    {title: 'Яблоко', category: 'Пастила', prise: '160.00', name:'cuk'}]

  const [listFilter, setlistFilter] = useState(list)
  const [state, setState] = useState(listFilter)
  const [value, setValue] = useState('all')
  const [search, setSearch] = useState(null)
  const [prises, setPrises] = useState(false)
  const [renge, setRenge] = useState([0, 100])


  useEffect(()=>{
    headetClick()
    typeFilter(value)
  }, [value])

  useEffect(()=>{
    setState(listFilter)
  }, [listFilter])

  useEffect(()=>{
    getPrise(prises)
  }, [prises])

  useEffect(()=>{
    titleFilter(search)
  }, [search])

  useEffect(()=>{
    maxMivFilter(renge)
  }, [renge])
  
  const handleChange = (value) => {
    setValue(value)
  }
  const inputChange = (value) => {
    setSearch(value)
  }
  const rangeChange = (min) => {
    setRenge(min)
  }

  const maxMivFilter = (value) => {
    setState(listFilter.filter(list => Number(list.prise) > value[0] && Number(list.prise) < value[1]))
  }

  const titleFilter = (value) => {
    if (value === null || value === '') {
      setlistFilter(list)
      document.getElementById('catalog-null').innerHTML = ``
    } else {
      let srt = ''
      for (let index = 0; index < value.length; index++) {
        if (index === 0) {
          srt = srt + value[0].toUpperCase() 
        } else {
          srt = srt + value[index].toLowerCase()
        }
        
      }
      
      if (list.filter(list => !list.title.indexOf(srt)).length === 0) {
        setlistFilter(list.filter(list => !list.title.indexOf(srt)))
        document.getElementById('catalog-null').innerHTML = `По запросу "${value}" ничего не было найдено`
      }  else {
        setlistFilter(list.filter(list => !list.title.indexOf(srt)))
      }
    }
  }

  const typeFilter = (value) => {
    if (value === 'all') {
      setlistFilter(list)
    } else {
      setlistFilter(list.filter(list => list.name === value))
    }
  }


  const headetClick = () => {
    let link = document.getElementsByClassName('header-bottom-content-link')
    for (let index = 0; index < link.length; index++) {
      link[index].classList.remove('header-bottom-content-link-activ')
      if (link[index].innerHTML === 'Каталог') {
        link[index].classList.add('header-bottom-content-link-activ')
      } 
    }
  }

  const sortUp = (a, b) =>{
    if (a.prise > b.prise) return -1; 
    if (a.prise === b.prise) return 0;  
    if (a.prise < b.prise) return 1; 
  }

  const sortDoun = (a, b) =>{
    if (a.prise > b.prise) return 1; 
    if (a.prise === b.prise) return 0;  
    if (a.prise < b.prise) return -1;
  }

  const getPrise = (prises) => {
    if (prises === false) {
      setState(state.sort(sortUp))
    } else {
      setState(state.sort(sortDoun)) 
    }
  }

  const prise = () => {
    let element = document.getElementById('setPrise')
    element.classList.toggle('catalog-list-filter-prise-active')
    setPrises(true)
    if (element.classList.contains('catalog-list-filter-prise-active') === true) {
      setPrises(true)
    } else {
      setPrises(false)
    } 
  } 

  return (
    <div className="cotalog page">
      <div className="conteiner">
        <div className="cotalog-inner">
          <CotalogFilter setInput={inputChange} setRange={rangeChange} setState={handleChange}/>
          <div className="catalog-list">
            <div className="catalog-list-filter">
            <div id="setPrise" onClick={prise} className="catalog-list-filter-prise">
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
              {state.map((list, index)=>  
                <div key={index} className="catalog-list-cards-inner">
                  <Card card={list}/>
                </div>
              )}
            <div id="catalog-null" className="catalog-null"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Cotalog;