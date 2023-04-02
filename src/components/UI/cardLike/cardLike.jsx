import delite from '../../../image/delete_FILL1_wght100_GRAD0_opsz48.svg'
import img from '../../../image/e900f120e4bf88e3d6fc232e3a6c414a.jpeg.png'

function CardLike({props, setDelite, setBascet}) {

  const deliteCrd = () => {
    setDelite(props)
  }

  const backetGetCard = () => {
    setBascet(props)
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
        <div className="card-bascet-right-prise">{props.prise} р.</div>
        <div className="card-bascet-right-delite">
          <img onClick={deliteCrd} src={delite} className='card-bascet-right-delite-img' alt="" />
        </div>
        <div onClick={backetGetCard} className="card-bascet-right-btn">В корзину</div>
      </div>
    </div>
  );
}

export default CardLike;