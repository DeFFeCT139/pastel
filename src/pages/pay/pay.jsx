import { useEffect } from "react";

function Pay() {

  const headetClick = () => {
    let link = document.getElementsByClassName('header-bottom-content-link')
    for (let index = 0; index < link.length; index++) {
      link[index].classList.remove('header-bottom-content-link-activ')
      if (link[index].innerHTML === 'Оплата/Доставка') {
        link[index].classList.add('header-bottom-content-link-activ')
      } 
    }
  }

  useEffect(()=>{
    headetClick()
  })
  return (
    <div className="pay page">
      <div className="conteiner">
        <div className="pay-inner">
          <div className="pay-content">
            <div className="pay-content-inner">
              <div className="pay-content-title">Способы доставки и оплаты</div>
              <div className="pay-content-desc">
                <div className="pay-content-desc-delivery">
                  <div className="pay-content-desc-titile">Доставка:</div>
                  <ul>
                    <li>Архангельск - ежедневно бесплатная доставка по городу при заказе от 1500 рублей.</li>
                    <li>Северодвинск, Новодвинск - бесплатная доставка по городу при заказе от 1500 рублей, 1 раз в неделю.⠀</li>
                    <li>По России — Почтой России или СДЭК, стоимость доставки 500 рублей.</li>
                  </ul>
                  <strong>Возможен самовывоз: Гагарина 42, здание Швейной Фабрики, магазин FruitStories.</strong>
                </div>
                <div className="pay-content-desc-pay">
                  <div className="pay-content-desc-titile">Способы оплаты:</div>
                  <strong>Наличный расчёт, банковская карта.</strong>
                  <div className="pay-content-desc-decs">Если товар доставляется курьером, то оплата осуществляется наличными курьеру в руки или банковской картой через терминал банка ПАО Сбербанк.</div>
                </div>
                <div className="pay-content-desc-backUp">
                  <div className="pay-content-desc-titile">Возврат товара:</div>
                  <div className="pay-content-desc-decs">Срок возврата товара ненадлежащего качества составляет 3 дня с момента получения товара.<br/>Возврат переведённых средств, производится на ваш банковский счёт в течение 5-30 рабочих дней (срок зависит от банка, который выдал вашу банковскую карту).</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Pay;