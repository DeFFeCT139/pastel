
function ButtenUp() {

  const goTop = () => {
    window.scrollTo({top: 0, behavior: 'smooth'});
  }
  
  const goTopVisible = () => {
    window.addEventListener('scroll', function() {
      if (window.innerHeight*1.5 > window.scrollY) {
        document.getElementById('buttenUp').style.opacity = 0 + window.scrollY * 0.005
      }
    });
  }
  
  goTopVisible()
  return (
    <div id="buttenUp" onClick={goTop} className="buttenUp">
      <svg xmlns="http://www.w3.org/2000/svg" className="svg-arrow" fill='#fff' height="48" width="48"><path d="M14.15 30.75 12 28.6l12-12 12 11.95-2.15 2.15L24 20.85Z"/></svg>
    </div>
  );
}

export default ButtenUp;