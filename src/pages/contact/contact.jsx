import { useEffect } from 'react'
import img from '../../image/call_FILL1_wght400_GRAD0_opsz48 (1).svg'

function Contact() {

  const headetClick = () => {
    let link = document.getElementsByClassName('header-bottom-content-link')
    for (let index = 0; index < link.length; index++) {
      link[index].classList.remove('header-bottom-content-link-activ')
      if (link[index].innerHTML === 'Контакты') {
        link[index].classList.add('header-bottom-content-link-activ')
      } 
    }
  }


  useEffect(()=>{
    headetClick()
  })

  return (
    <div className="contact page">
      <div className="conteiner">
        <div className="contact-inner">
          <div className="contact-content">
            <div className="contact-content-inner">
              <div className="contact-content-left">
                <div className="contact-content-left-title">Контакты</div>
                <div className="contact-content-left-links">
                  <div className="contact-content-left-link">
                    <img src={img} alt="" className="contact-content-left-link-img" />
                    <div className="contact-content-left-link-title">+7 (960) 017-29-31</div>
                  </div>
                  <div className="contact-content-left-link">
                    <img src={img} alt="" className="contact-content-left-link-img" />
                    <div className="contact-content-left-link-title">+7 (960) 017-29-31</div>
                  </div>
                  <div className="contact-content-left-link">
                    <img src={img} alt="" className="contact-content-left-link-img" />
                    <div className="contact-content-left-link-title">+7 (960) 017-29-31</div>
                  </div>
                  <div className="contact-content-left-link">
                    <img src={img} alt="" className="contact-content-left-link-img" />
                    <div className="contact-content-left-link-title">+7 (960) 017-29-31</div>
                  </div>
                </div>
              </div>
              <div className="contact-content-right">
                <iframe src="https://yandex.ru/map-widget/v1/?um=constructor%3A5e84517dba9701e9dae280a37d88e75e3c61249670203a3b64489a06057182a3&amp;source=constructor" width="500" height="400" frameBorder="0"></iframe>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;