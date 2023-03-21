import { useEffect } from "react";
import MainCategory from "../../components/main/mainCategory/mainCategory";
import MainComent from "../../components/main/mainComent/mainComent";
import MainContent from "../../components/main/mainContent/mainContent";
import MainPresent from "../../components/main/mainPresent/mainPresent";

function Home() {

  const headetClick = () => {
    let link = document.getElementsByClassName('header-bottom-content-link')
    for (let index = 0; index < link.length; index++) {
      link[index].classList.remove('header-bottom-content-link-activ')
      if (link[index].innerHTML === 'Главная') {
        link[index].classList.add('header-bottom-content-link-activ')
      } 
    }
  }


  useEffect(()=>{
    headetClick()
  })

  return (
    <div className="home">
      <MainPresent/>
      <MainCategory/>
      <MainContent/>
      <MainComent/>
    </div>
  );
}

export default Home;