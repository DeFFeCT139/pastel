import { useState, useEffect } from "react";

const RangePrice = ({ from, to, step, onChange }) => {
  const [min, setMin] = useState(from);
  const [max, setMax] = useState(to);

  useEffect(() => {
    onChange([Number(document.getElementById('min').value), Number(document.getElementById('max').value)]); 
  }, [min, max]);

  return (
    <>
      <div className="range-slider">
        <input onChange={(e) => setMin(e.target.value)} id='min' value={min} min={from} max={to} step={step} type="range"/>
        <input onChange={(e) => setMax(e.target.value)} id='max' value={max} min={from} max={to} step={step} type="range"/>
      </div>
      <div className="cotalog-filter-content-range-inputs">
        <label className="label-for-input-minmax">р.</label>
        <input className="cotalog-filter-content-range-inputs-input" placeholder={from} value={Math.min(min, max)} onChange={(e) => setMin(e.target.value)}/>
        <label className="label-for-input-minmax"> -р.</label>
        <input className="cotalog-filter-content-range-inputs-input" placeholder={to} value={Math.max(min, max)} onChange={(e) => setMax(e.target.value)}/>
      </div>
    </>
  );
};


export default RangePrice;
