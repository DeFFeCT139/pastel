import img from '../../../image/e900f120e4bf88e3d6fc232e3a6c414a.jpeg.png'

function Card({card}) {
  return (
    <div className="card">
      <img src={img} alt="" className="card-img"/>
      <div className="card-content">
        <div className="card-content-title">{card.title}</div>
        <div className="card-content-category">{card.category}</div>
        <div className="card-content-priseBbtn">
          <div className="card-content-prise">{card.prise} p.</div>
          <div className="card-content-btn">В КОРЗИНУ</div>
        </div>
      </div> 
      <div className="card-live">
        <svg xmlns="http://www.w3.org/2000/svg"  className='card-live-img'><path d="m24 41.95-2.05-1.85q-5.3-4.85-8.75-8.375-3.45-3.525-5.5-6.3T4.825 20.4Q4 18.15 4 15.85q0-4.5 3.025-7.525Q10.05 5.3 14.5 5.3q2.85 0 5.275 1.35Q22.2 8 24 10.55q2.1-2.7 4.45-3.975T33.5 5.3q4.45 0 7.475 3.025Q44 11.35 44 15.85q0 2.3-.825 4.55T40.3 25.425q-2.05 2.775-5.5 6.3T26.05 40.1Z"/></svg>
      </div>
    </div>
  );
}

export default Card;