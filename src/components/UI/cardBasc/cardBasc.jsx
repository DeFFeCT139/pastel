import delite from '../../../image/delete_FILL1_wght100_GRAD0_opsz48.svg'
import img from '../../../image/e900f120e4bf88e3d6fc232e3a6c414a.jpeg.png'

function CardBascet({props, setDelite}) {
  
  const deliteCrd = () => {
    setDelite(props)
  }

  return (
    <div className="card-bascet">
      <div className="card-bascet-left">
        <div className="card-bascet-left-image">
          <img className="card-bascet-left-img" src={img} alt="" />
        </div>
        <div className="card-bascet-left-title">{props.title}</div>
      </div>
      <div className="card-bascet-right">
        <div className="card-bascet-right-inputs">
          <div className="card-bascet-right-inputs-minus-pluse">-</div>
          <input defaultValue='1' className="card-bascet-right-input" type="text" />
          <div className="card-bascet-right-inputs-minus-pluse">+</div>
        </div>
        <div className="card-bascet-right-prise">{props.prise} р.</div>
        <div  className="card-bascet-right-delite">
          <img onClick={deliteCrd} src={delite} className='card-bascet-right-delite-img' alt="" />
        </div>
      </div>
    </div>
  );
}

export default CardBascet;